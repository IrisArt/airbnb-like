import { ApplicationConfig, inject, InjectionToken, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { PropertiesModel } from './core/properties/properties';
import { versionToken } from './token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    {
      provide: versionToken,
      useFactory: () => {
        const instance = new PropertiesModel()
        return instance
      }
    }
  ]
};
