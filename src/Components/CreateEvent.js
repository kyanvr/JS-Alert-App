/**
 * Create an event
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';
import Firestore from '../lib/Firebase/Firestore';
import Router from '../Router';

class CreateEventComponent extends Component {
    constructor() {
        super({
            name: 'create',
            routerPath: '/create',
        });
    }

    // eslint-disable-next-line class-methods-use-this
    getInputValues() {
        // get the form data
        const form = document.querySelector('.eventForm');
        const formData = new FormData(form);
        const name = formData.get('eventName');
        const date = formData.get('eventDate');
        const startTime = formData.get('startTime');
        const endTime = formData.get('endTime');
        const location = formData.get('eventLocation');
        const about = formData.get('eventAbout');

        if (name === '' || date === '' || startTime === '' || endTime === '' || location === '' || about === '') {
            Component.showError('All fields are required!');
        } else {
            // add formdata to events in firestore
            Firestore.addEventToFirestore(name, date, startTime, endTime, location, about);
            Router.navigate('/dashboard');
        }
    }

    render() {
        // clear container
        this.clearComponentContainer();

        // remove the background
        this.removeBackground();

        // set the backgroundcolor
        this.setBackgroundColor('#d52d5c');

        // create the elements
        const backImg = Elements.createImage({
            src: '../assets/ic_chevron_left_24px.svg',
            alt: 'back_button',
            className: 'backImage',
        });

        const backBtn = Elements.createButton({
            onClick: () => Router.navigate('/dashboard'),
            className: 'backButton',
        });

        const header = Elements.createHeader({
            size: 1,
            textContent: 'CREATE AN EVENT',
            className: 'createEvent',
        });

        const error = Elements.createContainer({
            id: 'error',
        });

        const nameLabel = Elements.createLabel({
            attribute: 'eventName',
            textContent: 'Name',
        });

        const nameInput = Elements.createInput({
            type: 'text',
            name: 'eventName',
            className: 'eventName',
        });

        const dateLabel = Elements.createLabel({
            attribute: 'eventDate',
            textContent: 'Date',
        });

        const dateInput = Elements.createInput({
            type: 'date',
            name: 'eventDate',
            className: 'eventDate',
        });

        const startTimeLabel = Elements.createLabel({
            attribute: 'startTime',
            textContent: 'Start time',
        });

        const startTimeInput = Elements.createInput({
            type: 'time',
            name: 'startTime',
            className: 'startTime',
        });

        const endTimeLabel = Elements.createLabel({
            attribute: 'endTime',
            textContent: 'End time',
        });

        const endTimeInput = Elements.createInput({
            type: 'time',
            name: 'endTime',
            className: 'endTime',
        });

        const locationLabel = Elements.createLabel({
            attribute: 'eventLocation',
            textContent: 'Location',
        });

        const locationInput = Elements.createInput({
            type: 'text',
            name: 'eventLocation',
            className: 'eventLocation',
        });

        const aboutLabel = Elements.createLabel({
            attribute: 'eventAbout',
            textContent: 'About this event',
        });

        const aboutInput = Elements.createTextArea({
            name: 'eventAbout',
            className: 'eventAbout',
            rows: 4,
            cols: 25,
        });

        const imgLabel = Elements.createLabel({
            attribute: 'eventImgae',
            textContent: 'Choose event picture',
        });

        const img = Elements.createInput({
            type: 'file',
            name: 'eventImage',
            className: 'eventImage',
        });

        const createButton = Elements.createButton({
            textContent: 'Create event',
            className: 'createBtn',
            onClick: () => {
                this.getInputValues();
            },
        });

        const eventForm = Elements.createForm({
            className: 'eventForm',
            children: [nameLabel, nameInput, dateLabel, dateInput, startTimeLabel, startTimeInput,
                endTimeLabel, endTimeInput, locationLabel, locationInput, aboutLabel, aboutInput,
                imgLabel,
                img],
        });

        const eventFormDiv = Elements.createContainer({
            className: 'eventFormDiv',
            children: [eventForm, error, createButton],
        });

        backBtn.appendChild(backImg);
        this.componentContainer.appendChild(backBtn);
        this.componentContainer.appendChild(header);
        this.componentContainer.appendChild(eventFormDiv);

        return this.componentContainer;
    }
}

export default CreateEventComponent;
