/* eslint-disable class-methods-use-this */
/**
 * Overview Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';
import Firestore from '../lib/Firebase/Firestore';
import Router from '../Router';
import Storage from '../lib/Firebase/Storage';
import Authenticator from '../lib/Firebase/Authenticator';
import Navigation from './Navigation';

class DashboardComponent extends Component {
    constructor() {
        super({
            name: 'dashboard',
            routerPath: '/dashboard',
        });
    }

    async renderAsync() {
        // get user avatar
        const avatar = await Storage.downloadAvatar();

        const menuDiv = Elements.createContainer({
            className: 'placeholderAvatar',
            children: [avatar],
        });

        const eventsDiv = Elements.createContainer({
            className: 'eventsDiv',
            children: [Firestore.getEvents()],
        });

        // add navigation bar
        const navBar = Elements.createContainer({
            id: 'navBar',
            children: [Navigation('active')],
        });

        this.componentContainer.appendChild(menuDiv);
        this.componentContainer.appendChild(eventsDiv);
        this.componentContainer.appendChild(navBar);
    }

    render() {
        // clear component container
        this.clearComponentContainer();

        // remove the background image
        this.removeBackground();

        // add flex to div
        this.componentContainer.classList.add('flex-center');

        // create logo
        const logo = Elements.createImage({
            className: 'logo',
            src: 'assets/alert_logo.svg',
        });

        const signOutBtn = Elements.createButton({
            innerHTML: '<i class="fas fa-sign-out-alt"></i>',
            className: 'logout',
            onClick: () => Authenticator.signOut(),
        });

        const createEvent = Elements.createButton({
            innerHTML: '<i class="fas fa-plus-square"></i> Create event',
            className: 'createEventBtn',
            onClick: () => Router.navigate('/create'),
        });

        const navAllEvents = Elements.createLink({
            href: '/dashboard',
            textContent: 'All events',
            attribute: 'data-navigo',
            className: 'underline',
        });

        const navMyEvents = Elements.createLink({
            href: '/myEvents',
            textContent: 'My events',
            attribute: 'data-navigo',
        });

        const navPendingInvites = Elements.createLink({
            href: '/pending',
            textContent: 'Pending',
            attribute: 'data-navigo',
        });

        const navEvents = Elements.createContainer({
            className: 'navDashboard',
            children: [navAllEvents, navMyEvents, navPendingInvites],
        });

        // append elements
        this.componentContainer.appendChild(logo);
        this.componentContainer.appendChild(signOutBtn);
        this.componentContainer.appendChild(createEvent);
        this.componentContainer.appendChild(navEvents);

        return this.componentContainer;
    }
}

export default DashboardComponent;
