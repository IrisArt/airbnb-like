export interface IStorage {
    put(id: string, content: string): Promise<void>
    get(id: string): Promise<string | undefined>
}