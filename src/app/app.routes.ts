import { Routes } from "@angular/router";
import { Auth } from "./auth/auth";
import { Main } from "./features/layouts/main/main";
import { Error } from "./features/layouts/error/error";
import { HomeComponent } from "./features/home/home";
import { Property } from "./features/property/property";
import { propertiesResolver } from "./features/properties/property-list/property-list.resolver";

export const routes: Routes = [
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                component: HomeComponent,
                resolve: {
                    properties: propertiesResolver
                }
            },
            {
                path: 'property/:id',
                component: Property
            }
        ]
    },
    {
        path: 'login',
        component: Auth
    },
    {
        path: '**',
        component: Error
    }
]