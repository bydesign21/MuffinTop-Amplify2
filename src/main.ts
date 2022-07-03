import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js';
import awsconfig from './aws-exports'
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import Amplify, { Logger } from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import {AuthModeStrategyType } from 'aws-amplify';

Amplify.configure({
  awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})
API.configure(awsconfig);
PubSub.configure(awsconfig);
Amplify.configure(awsconfig);
DataStore.configure(awsconfig);

DataStore.start();
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
