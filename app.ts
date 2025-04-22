import "dotenv/config";
import { CallbackQuery } from "node-telegram-bot-api";
import { bot,useCallback } from "./bot/bot";
import { log } from "./utils";
import { startCommand } from "./bot/commands/start";

const callback_handlers = {
}

// ==== Commands declatations
bot.onText(/\/start/, startCommand);

// Callback hanlder activation
bot.on("callback_query", async (query:CallbackQuery) => useCallback(query, callback_handlers));

log("Start");
bot.sendMessage(process.env.OWNER_ID, "<Старт бота>"); // Tell owner that bot is ready and configured