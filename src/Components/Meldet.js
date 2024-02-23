/**
 * Meldet.org component
 */

 import Component from '../lib/Component';
 import Elements from '../lib/Elements';
 import Router from '../Router';
 import Navigation from './Navigation';
 import { meldetCategories, meldetEmail } from '../consts';

 class MeldetComponent extends Component {
     constructor() {
         super({
             name: 'meldet',
             routerPath: '/meldet',
         });
     }

     // eslint-disable-next-line class-methods-use-this
     getInputValues() {
        const form = document.querySelector('.meldetForm');
        const formData = new FormData(form);
        const title = formData.get('title');
        const adress = formData.get('adress');
        const description = formData.get('description');
        const category = formData.get('category');
        const date = formData.get('date');

        if (title === '' || adress === '' || category === '' || date === '') {
            Component.showError('All fields are required!');
        } else {
            console.log(title, adress, description, category, date);
            console.log('Harassment reported to: ', meldetEmail);
        }
     }

     async renderAsync() {
         // clear container
         this.clearComponentContainer();

         // remove background image
         this.removeBackground();

         // set background color
         this.setBackgroundColor('#d52d5c');

        //  get the categories
        const categories = [];

        meldetCategories.forEach((element) => {
            const option = Elements.createOption({
                value: element,
                textContent: element,
            });

            categories.push(option);
        });

         // add navigation bar
         const navBar = Elements.createContainer({
             id: 'navBar',
             children: [Navigation('', 'active', '')],
         });

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
             textContent: 'MELDET.ORG',
             className: 'meldetHeader',
         });

         const error = Elements.createContainer({
             id: 'error',
         });

         const titleLabel = Elements.createLabel({
             attribute: 'title',
             textContent: 'Title',
         });

         const titleInput = Elements.createInput({
             type: 'text',
             name: 'title',
             className: 'title',
         });

         const adressLabel = Elements.createLabel({
             attribute: 'adress',
             textContent: 'Adress',
         });

         const adressInput = Elements.createInput({
             type: 'text',
             name: 'adress',
             className: 'adress',
         });

         const descriptionLabel = Elements.createLabel({
             attribute: 'description',
             textContent: 'Description (optional)',
         });

         const descriptionInput = Elements.createTextArea({
             name: 'description',
             rows: 4,
            cols: 25,
         });

         const categoryLabel = Elements.createLabel({
             attribute: 'category',
             textContent: 'Category',
         });

        //  const selectCategory = Elements.createOption({
        //      value: '#',
        //      textContent: 'Select category',
        //  });

         const categorySelect = Elements.createSelect({
             name: 'category',
             children: [
                categories,
              ],
         });

         const dateLabel = Elements.createLabel({
             attribute: 'date',
             textContent: 'Date (DD/MM/YYYY)',
         });

         const dateInput = Elements.createInput({
             type: 'date',
             name: 'date',
             className: 'date',
         });

         const meldetForm = Elements.createForm({
             className: 'meldetForm',
             children: [titleLabel, titleInput, adressLabel, adressInput, descriptionLabel,
                descriptionInput, categoryLabel, categorySelect, dateLabel, dateInput],
         });

         const sendBtn = Elements.createButton({
             textContent: 'SEND',
             onClick: () => {
                this.getInputValues();
             },
         });

         const meldetFormDiv = Elements.createContainer({
             className: 'meldetFormDiv',
             children: [error, meldetForm, sendBtn],
         });

         backBtn.appendChild(backImg);
         this.componentContainer.appendChild(backBtn);
         this.componentContainer.appendChild(header);
         this.componentContainer.appendChild(meldetFormDiv);
         this.componentContainer.appendChild(navBar);

         return this.componentContainer;
     }
 }

 export default MeldetComponent;
