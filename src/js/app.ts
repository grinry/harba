import './bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './modules/AppModule';

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    console.info('Bootstrapped');
}).catch((error) => {
    console.warn(error);
});