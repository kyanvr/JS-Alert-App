/**
 * Login Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';
import Authenticator from '../lib/Firebase/Authenticator';

class LoginComponent extends Component {
    constructor() {
        super({
            name: 'login',
            routerPath: '/login',
        });
    }

    render() {
        // clear the component
        this.clearComponentContainer();

        // add white background to container
        this.componentContainer.classList.add('whiteContainer');

        // add flex to container
        this.componentContainer.classList.add('flex-space-between');

        const logo = Elements.createImage({
            className: 'logo',
            src: '../assets/alert_logo.svg',
            alt: 'alert_logo',
        });

        const navBtnRegister = Elements.createLink({
            href: '/',
            textContent: 'SIGN UP',
            className: 'buttonAsLink',
            attribute: 'data-navigo',
        });

        const navBtnLogin = Elements.createLink({
            href: '/login',
            textContent: 'LOGIN',
            className: 'buttonAsLink active',
            attribute: 'data-navigo',
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

        const form = Elements.createForm({
            id: 'loginForm',
            className: 'loginForm',
            children: [inputEmail, inputPassword],
        });

        const signUpButton = Elements.createButton({
            textContent: 'LOGIN',
            onClick: () => Authenticator.initLogin(),
        });

        const signUpWith = Elements.createParagraph({
            className: 'signUpWith',
            textContent: 'or log in with',
        });

        const googleImage = Elements.createImage({
            src: '../assets/btn_google_dark_normal_ios.svg',
            alt: 'btn_google',
        });

        const GoogleButton = Elements.createButton({
            className: 'btn_google',
            onClick: () => {
                Authenticator.googleLogin();
            },
        });

        // append elements
        this.componentContainer.appendChild(logo);
        this.componentContainer.appendChild(nav);
        this.componentContainer.appendChild(error);
        this.componentContainer.appendChild(form);
        this.componentContainer.appendChild(signUpButton);
        this.componentContainer.appendChild(signUpWith);
        GoogleButton.appendChild(googleImage);
        this.componentContainer.appendChild(GoogleButton);

        return this.componentContainer;
    }
}

export default LoginComponent;
