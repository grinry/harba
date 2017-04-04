import {enableProdMode} from "@angular/core";
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'es6-shim';

if (process.env.NODE_ENV == 'production') {
    enableProdMode();
}