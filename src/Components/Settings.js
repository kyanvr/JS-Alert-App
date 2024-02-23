/**
 * Settings component
 */

import { getAuth } from 'firebase/auth';
import Component from '../lib/Component';
import Elements from '../lib/Elements';
import Router from '../Router';
import Navigation from './Navigation';
import Authenticator from '../lib/Firebase/Authenticator';
import Firestore from '../lib/Firebase/Firestore';

class SettingsComponent extends Component {
    constructor() {
        super({
            name: 'settings',
            routerPath: '/settings',
        });
    }

    // eslint-disable-next-line class-methods-use-this
    getInputValues() {
        // get formdata
        const form = document.querySelector('.settingsForm');
        const formData = new FormData(form);
        const fname = formData.get('firstname');
        const lname = formData.get('lastname');
        const email = formData.get('email');
        const password = formData.get('password');
        const uname = formData.get('username');
        const phone = formData.get('phone');

        // add formdata to user in firestore
        Firestore.editProfile(fname, lname, uname, email, password, phone);
        const auth = getAuth();
        const user = auth.currentUser;
        user.displayName = `${fname} ${lname}`;

        // update email and password for login
        if (!email === '') Authenticator.updateEmail(email);
        if (!password === '') Authenticator.updatePassword(password);
    }

    render() {
        // clear container
        this.clearComponentContainer();

        // remove background image
        this.removeBackground();

        // set background color
        this.setBackgroundColor('#d52d5c');

        // get the current user
        const auth = getAuth();
        const user = auth.currentUser;

        // add navigation bar
        const navBar = Elements.createContainer({
            id: 'navBar',
            children: [Navigation('', '', 'active')],
        });

        const backImg = Elements.createImage({
            src: 'assets/ic_chevron_left_24px.svg',
            alt: 'back_button',
            className: 'backImage',
        });

        const backBtn = Elements.createButton({
            onClick: () => Router.navigate('/dashboard'),
            className: 'backButton',
        });

        const header = Elements.createHeader({
            size: 1,
            textContent: 'SETTINGS',
            className: 'settingsHeader',
        });

        const emailLabel = Elements.createLabel({
            attribute: 'email',
            textContent: 'Email',
        });

        const emailInput = Elements.createInput({
            type: 'email',
            name: 'email',
            className: 'email',
            value: `${user.email}`,
        });

        const passwordLabel = Elements.createLabel({
            attribute: 'password',
            textContent: 'Password',
        });

        const passwordInput = Elements.createInput({
            type: 'password',
            name: 'password',
            className: 'password',
            value: `${user.password}`,
        });

        const usernameLabel = Elements.createLabel({
            attribute: 'username',
            textContent: 'Username',
        });

        const usernameInput = Elements.createInput({
            type: 'text',
            name: 'username',
            className: 'username',
        });

        const firstnameLabel = Elements.createLabel({
            attribute: 'firstname',
            textContent: 'Firstname',
        });

        const firstnameInput = Elements.createInput({
            type: 'text',
            name: 'firstname',
            className: 'firstname',
            value: `${user.displayName.split(' ')[0]}`,
        });

        const lastnameLabel = Elements.createLabel({
            attribute: 'lastname',
            textContent: 'Lastname',
        });

        const lastnameInput = Elements.createInput({
            type: 'text',
            name: 'lastname',
            className: 'lastname',
            value: `${user.displayName.split(' ')[1]} ${user.displayName.split(' ')[2]}`,
        });

        const phoneLabel = Elements.createLabel({
            attribute: 'phone',
            textContent: 'Phone number',
        });

        const phoneInput = Elements.createInput({
            name: 'phone',
            className: 'phone',
            type: 'tel',
            value: `${user.phoneNumber}`,
        });

        const avatarLabel = Elements.createLabel({
            attribute: 'avatar',
            textContent: 'Change avatar',
        });

        const avatarInput = Elements.createInput({
            type: 'file',
            name: 'avatar',
            className: 'eventImage',
        });

        const saveButton = Elements.createButton({
            textContent: 'SAVE',
            onClick: () => {
                this.getInputValues();
                Router.navigate('/dashboard');
            },
        });

        const deleteButton = Elements.createButton({
            textContent: 'DELETE ACCOUNT',
            className: 'deleteBtn',
            onClick: () => Authenticator.deleteUserProfile(),
        });

        const settingsForm = Elements.createForm({
            className: 'settingsForm',
            children: [emailLabel, emailInput, passwordLabel, passwordInput, usernameLabel,
                usernameInput, firstnameLabel, firstnameInput, lastnameLabel, lastnameInput,
                phoneLabel,
                phoneInput, avatarLabel, avatarInput],
        });

        const buttonsDiv = Elements.createContainer({
            className: 'buttonsDiv',
            children: [saveButton, deleteButton],
        });

        const settingsFormDiv = Elements.createContainer({
            className: 'settingsFormDiv',
            children: [settingsForm, buttonsDiv],
        });

        backBtn.appendChild(backImg);
        this.componentContainer.appendChild(backBtn);
        this.componentContainer.appendChild(header);
        this.componentContainer.appendChild(settingsFormDiv);
        this.componentContainer.appendChild(navBar);

        return this.componentContainer;
    }
}

export default SettingsComponent;
