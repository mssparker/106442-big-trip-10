export const renderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`
};

export const createComponent = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const renderComponent = (container, element, place = renderPosition.BEFOREEND) => {
  const component = element.getElement();
  switch (place) {
    case renderPosition.AFTERBEGIN:
      container.prepend(component);
      break;
    case renderPosition.AFTEREND:
      container.after(component);
      break;
    case renderPosition.BEFOREEND:
      container.append(component);
      break;
  }
};

export const replaceComponent = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const elementsAvailable = Boolean(parentElement && newElement && oldElement);

  if (elementsAvailable) {
    if (parentElement.contains(oldElement)) {
      parentElement.replaceChild(newElement, oldElement);
    }
  }
};

export const removeComponent = (component) => {
  component.getElement().remove();
  component.removeElement();
};
