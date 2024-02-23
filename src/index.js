import './sass/main.scss';
import App from './App';
import {
 DashboardComponent, RegisterComponent, LoginComponent, AIComponent, PrivacyComponent,
 AIGoogleComponent, CreateEventComponent, SettingsComponent, MeldetComponent,
} from './Components/index';

const initApp = () => {
  // get the app container
  const appContainer = document.getElementById('app');

  const app = new App(appContainer);

  // add all components to app container
  app.addComponent(new DashboardComponent());
  app.addComponent(new RegisterComponent());
  app.addComponent(new LoginComponent());
  app.addComponent(new AIComponent());
  app.addComponent(new AIGoogleComponent());
  app.addComponent(new PrivacyComponent());
  app.addComponent(new CreateEventComponent());
  app.addComponent(new SettingsComponent());
  app.addComponent(new MeldetComponent());

  // install service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
};

window.addEventListener('load', initApp);
