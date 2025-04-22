import { ChatId } from "node-telegram-bot-api";

const defaultStates = {
    setupStep:false,
    setupDone:false
}

export const state = {
    setState(id:ChatId, key:string, value: any): void {this[id] = this[id] ?? structuredClone(defaultStates); return this[id][key] = value},
    getState(id:ChatId, key:string, defaultValue:any = null):any {
        try {
            return this[id][key]
        } catch(e) {
            return defaultValue;
        }
    }
}