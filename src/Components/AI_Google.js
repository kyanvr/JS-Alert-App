/**
 * Additional Information Component
 */

 import Component from '../lib/Component';
 import Elements from '../lib/Elements';
 import Authenticator from '../lib/Firebase/Authenticator';
 import Router from '../Router';

 class AIGoogleComponent extends Component {
     constructor() {
         super({
             name: 'ai_google',
             routerPath: '/ai_google',
         });
     }

     render() {
         const user = Authenticator.getUserProfile();
         // clear the component
         this.clearComponentContainer();

         // add white background to container
         this.componentContainer.classList.add('whiteContainer');

        //  add flex to the container
         this.componentContainer.classList.add('flex-center');

         // create logo
         const logo = Elements.createImage({
             className: 'logo',
             src: '../assets/alert_logo.svg',
         });

         const header = Elements.createHeader({
             size: 2,
             textContent: 'Please add additional information',
             className: 'aiHeader',
         });

         const inputFirstname = Elements.createInput({
             name: 'firstname',
             type: 'text',
             value: user.displayName.split(' ')[0],
         });

         const inputLastname = Elements.createInput({
             type: 'text',
             name: 'lastname',
             value: `${user.displayName.split(' ')[1]} ${user.displayName.split(' ')[2]}`,
         });

         const inputUsername = Elements.createInput({
             type: 'text',
             name: 'username',
             placeholder: 'Username',
         });

         const inputPhone = Elements.createInput({
             type: 'tel',
             name: 'phone',
             placeholder: 'Phone number',
         });

         const form = Elements.createForm({
             className: 'AIForm',
             id: 'AIForm',
             children: [inputFirstname, inputLastname, inputUsername, inputPhone],
         });

         const continueBtn = Elements.createButton({
         textContent: 'CONTINUE',
         onClick: () => {
             Authenticator.addAdditionalInfo();
             Router.navigate('/privacy');
         },
         });

         this.componentContainer.appendChild(logo);
         this.componentContainer.appendChild(header);
         this.componentContainer.appendChild(form);
         this.componentContainer.appendChild(continueBtn);

         return this.componentContainer;
     }
 }

 export default AIGoogleComponent;
