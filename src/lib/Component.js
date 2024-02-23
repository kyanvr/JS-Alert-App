/* eslint-disable class-methods-use-this */
/**
 * The Component Parent
 */

import Elements from './Elements';

class Component {
    constructor({
        name,
        model,
        routerPath,
    }) {
        this.name = name;
        this.props = null;
        this.model = model;
        this.routerPath = routerPath;
        this.componentContainer = this.createComponentContainer();
    }

    // create a div container
    createComponentContainer() {
        return Elements.createContainer({ id: `${this.name}Container` });
    }

    // clear the div container
    clearComponentContainer() {
        while (this.componentContainer.firstChild) {
            this.componentContainer.removeChild(this.componentContainer.firstChild);
        }
    }

    // remove the background
    removeBackground() {
        const appContainer = document.getElementById('app');
        appContainer.style.backgroundImage = 'none';
    }

    // set a background color
    setBackgroundColor(color) {
        const appContainer = document.getElementById('app');
        appContainer.style.backgroundColor = color;
    }

    // show an error message
    static showError(e) {
        const error = document.getElementById('error');
        error.style.display = 'flex';
        error.textContent = e;
        setTimeout(() => {
            error.style.display = 'none';
        }, 5000);
    }
}

export default Component;
