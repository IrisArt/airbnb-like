import { Resolve, ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { PropertiesModel, Property } from "../../../core/properties/properties";
import { catchError } from "rxjs";

export const propertiesResolver: ResolveFn<Property[]> = () => {
    const propertiesModel = inject(PropertiesModel)
    return propertiesModel.fetchProperties().pipe(
        catchError((err) => {
            throw err
        })
    )
}