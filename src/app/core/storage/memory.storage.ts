import { IStorage } from "./storage.interface";

export class MemoryStorage implements IStorage {
    private storage = new Map<string, string>()

    async put(id: string, content: string) {
        this.storage.set(id, content)
    }

    async get(id: string) {
        return this.storage.get(id)
    }
}