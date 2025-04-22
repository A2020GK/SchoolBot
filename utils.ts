import { CallbackQuery, Message } from "node-telegram-bot-api";
import { bot } from "./bot/bot";

export const log = (message:string,prefix:string="Info", level="info") => console.log(`[${prefix}] ${message}`);
export const convertToMap = (funcs: CallableFunction[])=>{
    let map = {};
    funcs.forEach(func => {
        map[func.name] = func
    });
    return map;
}
export const localizedDay = (day:number)=>{
    return ["понедельник", "вторник", "среду", "четверг", "пятницу", "субботу", "воскресенье"][day];
}
export const padTo2Digits = (num:number)=> num.toString().padStart(2, '0');
export const dateIsValid = (date:Date) => !isNaN(date.getTime());