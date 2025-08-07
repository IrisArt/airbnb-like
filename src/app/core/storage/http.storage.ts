import { inject, Injectable } from "@angular/core";
import { IStorage } from "./storage.interface";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class HttpStorage implements IStorage {
    private http = inject(HttpClient)
    readonly url = 'http://fakewebsite.com'

    async put(id: string, content: string) {
        await lastValueFrom(this.http.post(this.url + '/' + id, content))
    }

    get(id: string) {
        return lastValueFrom(this.http.get<string>(this.url + '/' + id))
    }
}