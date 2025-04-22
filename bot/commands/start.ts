import { Message } from "node-telegram-bot-api";
import { bot } from "../bot";

export const startCommand = async (message:Message)=>{
    await bot.sendMessage(message.chat.id, "Старт");
}