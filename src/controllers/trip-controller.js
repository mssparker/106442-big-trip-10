import Sort, {SortType} from "../components/sort.js";
import PointController from './point-controller.js';
import Day from '../components/day';
import DayList from '../components/day-list';
import NoPointMessage from "../components/no-point-message";
import SortPoints from '../components/sort-points';

import {getDate, ArrayUtils} from "../utils/utils";
import {renderComponent} from '../utils/render-utils';

const sortByDuration = (a, b) => (b.endTime - b.startTime) - (a.endTime - a.startTime);
const sortByPrice = (a, b) => b.price - a.price;
const replace = (collection, replacement, index) => [...collection.slice(0, index), replacement, ...collection.slice(index + 1)];

const renderPoints = (eventList, points, onDataChange, onViewChange) => {
  return points.map((pointData) => {
    const pointController = new PointController(eventList, onDataChange, onViewChange);
    pointController.render(pointData);

    return pointController;
  });
};

export default class TripController {
  constructor(container) {
    this._container = container;
    this._points = [];
    this._showedPointControllers = [];

    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);

    this._noPointMessage = new NoPointMessage();
    this._sort = new Sort();
    this._dayList = new DayList();

    this._sort.setSortClickHandler(this._onSortTypeChange);
  }

  render(points) {
    this._points = points;

    if (this._points.length === 0) {
      renderComponent(this._container, this._noPointMessage);
      return;
    }

    renderComponent(this._container, this._sort);
    renderComponent(this._container, this._dayList);

    this._renderDays(this._points);
  }

  _renderSortEvents(points) {
    const dayList = this._dayList.getElement();
    const sortPoints = new SortPoints();

    renderComponent(dayList, sortPoints);

    const pointList = sortPoints.getElement().querySelector(`.trip-events__list`);
    const additionalPointControllers = renderPoints(pointList, points, this._onDataChange, this._onViewChange);
    this._showedPointControllers = [...this._showedPointControllers, ...additionalPointControllers];
  }

  _renderDays(points) {
    const dayList = this._dayList.getElement();

    const days = ArrayUtils.getUnique(points.map((point) => getDate(point.startTime)));

    days.forEach((day) => {
      const dayComponent = new Day(day);
      renderComponent(dayList, dayComponent);

      const pointList = dayComponent.getElement().querySelector(`.trip-events__list`);

      const dayPoints = points.filter((point) => getDate(point.startTime) === day);
      const additionalPointControllers = renderPoints(pointList, dayPoints, this._onDataChange, this._onViewChange);
      this._showedPointControllers = [...this._showedPointControllers, ...additionalPointControllers];
    });
  }

  _onDataChange(pointController, replaceablePoint, replacementPoint) {
    const index = this._points.findIndex((point) => point === replaceablePoint);
    this._points = replace(this._points, replacementPoint, index);

    pointController.render(this._points[index]);
  }

  _onViewChange() {
    this._showedPointControllers.forEach((controller) => controller.setDefaultView());
  }

  _onSortTypeChange(sortType) {
    let sortedEvent = [];

    const $dayList = this._dayList.getElement();

    switch (sortType) {
      case SortType.TIME: {
        sortedEvent = ArrayUtils.sortPurely(this._points, sortByDuration);
        break;
      }
      case SortType.PRICE: {
        sortedEvent = ArrayUtils.sortPurely(this._points, sortByPrice);
        break;
      }
      case SortType.DEFAULT:
      default : {
        sortedEvent = this._points;
        break;
      }
    }

    this._showedPointControllers = [];

    $dayList.innerHTML = ``;

    if (sortType === SortType.DEFAULT) {
      this._renderDays(sortedEvent);
    } else {
      this._renderSortEvents(sortedEvent);
    }

  }
}
