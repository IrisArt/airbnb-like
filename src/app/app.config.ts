import { ApplicationConfig, inject, InjectionToken, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { PropertiesModel } from './core/properties/properties';
import { versionToken } from './token';
import { STORAGE_TOKEN } from './core/storage/storage.token';
import { MemoryStorage } from './core/storage/memory.storage';
import { LocalStorage } from './core/storage/local.storage';
import { HttpStorage } from './core/storage/http.storage';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    {
      provide: STORAGE_TOKEN,
      useFactory: () => {
        return  environment.isProd ? new HttpStorage() : new MemoryStorage()
      }
    }
  ]
};
