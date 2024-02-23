/* eslint-disable import/no-named-as-default */
/**
 * Register Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';
import Authenticator from '../lib/Firebase/Authenticator';

class RegisterComponent extends Component {
    constructor() {
        super({
            name: 'register',
            routerPath: '/',
        });
    }

    render() {
        // clear the component
        this.clearComponentContainer();

        // add white background to container
        this.componentContainer.classList.add('whiteContainer');

        // add flex to container
        this.componentContainer.classList.add('flex-space-between');

        // create logo
        const logo = Elements.createImage({
            className: 'logo',
            src: '../assets/alert_logo.svg',
        });

        const navBtnRegister = Elements.createLink({
            href: '/',
            textContent: 'SIGN UP',
            attribute: 'data-navigo',
            className: 'buttonAsLink active',
        });

        const navBtnLogin = Elements.createLink({
            href: '/login',
            textContent: 'LOGIN',
            attribute: 'data-navigo',
            className: 'buttonAsLink',
        });

        const nav = Elements.createContainer({
            className: 'nav__registerLogin',
            children: [navBtnRegister, navBtnLogin],
        });

        const error = Elements.createContainer({
            id: 'error',
        });

        const inputEmail = Elements.createInput({
            name: 'email',
            type: 'email',
            placeholder: 'Email',
        });

        const inputPassword = Elements.createInput({
            type: 'password',
            name: 'password',
            placeholder: 'Password',
        });

        const signUpButton = Elements.createButton({
            textContent: 'SIGN UP',
            onClick: () => {
                Authenticator.initRegister();
            },
        });

        const signUpWith = Elements.createParagraph({
            className: 'signUpWith',
            textContent: 'or sign up with',
        });

        const GoogleImage = Elements.createImage({
            src: '../assets/btn_google_dark_normal_ios.svg',
            alt: 'btn_google',
        });

        const GoogleButton = Elements.createButton({
            className: 'btn_google',
            onClick: () => {
                Authenticator.googleLogin();
            },
        });

        const form = Elements.createForm({
            className: 'flex-center',
            children: [inputEmail, inputPassword],
            id: 'registerForm',
        });

        this.componentContainer.appendChild(logo);
        this.componentContainer.appendChild(nav);
        this.componentContainer.appendChild(error);
        this.componentContainer.appendChild(form);
        this.componentContainer.appendChild(signUpButton);
        this.componentContainer.appendChild(signUpWith);
        GoogleButton.appendChild(GoogleImage);
        this.componentContainer.appendChild(GoogleButton);

        return this.componentContainer;
    }
}

export default RegisterComponent;
