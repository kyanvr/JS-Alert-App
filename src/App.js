/**
 * App Wrapper
 */

import Component from './lib/Component';
import Router from './Router';

class App {
    constructor(parent, portal) {
        this.parent = parent;
        this.portal = portal;
        this.components = [];
    }

    // clear the container
    // eslint-disable-next-line class-methods-use-this
    clearContainer(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    // add component
    addComponent(component) {
        if (!(component instanceof Component)) return null;

        // get the name from our component
        const { name, routerPath } = component;

        // add to internal class
        this.components.push(component);

        // add to router
        Router.on(
          routerPath,
          (params) => {
            this.showComponent({
              name,
              props: params,
            });
          },
        ).resolve();
      }

    // show component
    showComponent({ name, props }) {
      const foundComponent = this.components.find((component) => component.name === name);

      if (foundComponent) {
        this.clearContainer(this.parent);
        if (props) foundComponent.props = props;

        if (foundComponent.render) {
          this.parent.appendChild(foundComponent.render());
        }

        if (foundComponent.renderAsync) {
          foundComponent
            .renderAsync()
            .then((renderedComponent) => {
              this.parent.appendChild(renderedComponent);
            })
            .catch((error) => {
              console.error(error.message);
            });
        }
      }
    }
}

export default App;
