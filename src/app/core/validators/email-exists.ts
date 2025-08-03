import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { lastValueFrom, map, Observable, switchMap, timer } from "rxjs";

type EmailExistsData = {
    message: string
    exists: boolean
}

export function emailExistsValidator() {
    const http = inject(HttpClient)
    return function(control: AbstractControl<string>): Observable<{ emailExists: boolean } | null> {
        return timer(500).pipe(
            switchMap(() => {
                return http.post<EmailExistsData>('https://apprendre.angular.fr/api/fake/check-email', {
                    email: control.value
                })
            }),
            map((data) => data.exists ? { emailExists: true } : null)
        )
        // const data = await lastValueFrom(http.post<EmailExistsData>('https://apprendre.angular.fr/api/fake/check-email', {
        //     email: control.value
        // }))
        // return  data.exists ? { emailExists: true } : null
    }
}