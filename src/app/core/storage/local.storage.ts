import { IStorage } from "./storage.interface";

export class LocalStorage implements IStorage {
    async put(id: string, content: string) {
        localStorage.setItem(id, content)
    }

    async get(id: string) {
        return localStorage.getItem(id) ?? undefined
    }
}