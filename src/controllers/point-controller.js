import Point from '../components/point';
import PointEdit from '../components/point-edit';
import {renderComponent, replaceComponent} from '../utils/render-utils';


const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`,
};

export default class PointController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._mode = Mode.DEFAULT;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._point = null;
    this._pointEdit = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(pointData) {
    const oldPointComponent = this._point;
    const oldPointEditComponent = this._pointEdit;

    this._point = new Point(pointData);
    this._pointEdit = new PointEdit(pointData);

    this._point.setEditButtonClickHandler(() => {
      this._startEventEditing();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._pointEdit.setSubmitHandler(() => this._stopEventEditing());

    this._pointEdit.setInputFavoriteChangeHandler(() => {
      this._onDataChange(this, pointData, {...pointData, isFavored: !pointData.isFavored });
    });

    if (oldPointEditComponent && oldPointComponent) {
      replaceComponent(this._point, oldPointComponent);
      replaceComponent(this._pointEdit, oldPointEditComponent);
    } else {
      renderComponent(this._container, this._point);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._stopEventEditing();
    }
  }

  _startEventEditing() {
    this._onViewChange();

    replaceComponent(this._pointEdit, this._point);
    this._mode = Mode.EDIT;
  }

  _stopEventEditing() {
    replaceComponent(this._point, this._pointEdit);
    this._mode = Mode.DEFAULT;
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      this._stopEventEditing();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
