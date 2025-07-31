import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { map, Observable } from "rxjs";

type EmailExistsData = {
    message: string
    exists: boolean
}

export function emailExistsValidator() {
    const http = inject(HttpClient)
    return function(control: AbstractControl<string>): Observable<{ emailExists: boolean } | null> {
        return http.post<EmailExistsData>('https://apprendre.angular.fr/api/fake/check-email', {
            email: control.value
        }).pipe(
            map((data) => data.exists ? { emailExists: true } : null)
        )
    }
}