import { Routes } from "@angular/router";
import { Auth } from "./auth/auth";
import { Main } from "./features/layouts/main/main";
import { Error } from "./features/layouts/error/error";
import { HomeComponent } from "./features/home/home";
import { Property } from "./features/property/property";

export const routes: Routes = [
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                component: HomeComponent
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