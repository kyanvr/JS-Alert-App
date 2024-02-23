/**
 * Privacy Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';

class PrivacyComponent extends Component {
    constructor() {
        super({
            name: 'privacy',
            routerPath: '/privacy',
        });
    }

    render() {
        // clear the component
        this.clearComponentContainer();

        // add white background to container
        this.componentContainer.classList.add('whiteContainer');

        // add flex to the container
        this.componentContainer.classList.add('flex-center');

        const logo = Elements.createImage({
            className: 'logo',
            src: '../assets/alert_logo.svg',
        });

        const paragraph = Elements.createParagraph({
            className: 'privacyParagraph',
            textContent: 'We will safely store your personal information in our database so  that we can send your data immediately to Meldet.org and alert everyone in your event. In this case you can press the ALERT-button even when you\'re not logged in. This will ensure a quick response from your peers and/or the authorities.',
        });

        const checkbox = Elements.createInput({
            type: 'checkbox',
            name: 'checkbox',
            className: 'checkbox',
        });

        const pRead = Elements.createParagraph({
            className: 'readPrivacy',
            textContent: 'I have read and accept the Privacy Statement.',
        });

        const checkboxDiv = Elements.createContainer({
            className: 'checkboxDiv',
            children: [checkbox, pRead],
        });

        const continueBtn = Elements.createLink({
            href: '/dashboard',
            textContent: 'CONTINUE',
            className: 'buttonAsLink active',
            attribute: 'data-navigo',
        });

        this.componentContainer.appendChild(logo);
        this.componentContainer.appendChild(paragraph);
        this.componentContainer.appendChild(checkboxDiv);
        this.componentContainer.appendChild(continueBtn);

        return this.componentContainer;
    }
}

export default PrivacyComponent;
