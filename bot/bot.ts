import {default as TelegramBot, CallbackQuery} from "node-telegram-bot-api";
import { log } from "../utils";

export const bot = new TelegramBot(process.env.BOT_TOKEN, {polling:true});
bot.on("polling_error", console.log);
export const useCallback = (query:CallbackQuery, map:object) => {
    log(`Received callback query from ${query.from.username}: ${query.data}`, "Callbacks");
    let data = query.data.split(" ");
    let action = data[0];
    data.splice(0,1);

    if(action in map) map[action](data, query);
}