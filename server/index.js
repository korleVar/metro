// импорт express при помощи функции require
const express = require("express");
// экземпляр
const app = express();
// импорт функции из файла
const { connectToDB } = require("./db.js");
// вызов функции
connectToDB();
// импорт модуля http

const http = require("http");
// устанавливаем значение для переменной
const hostname = "127.0.0.1";
const port = 3000;

// создание http сервера при помощи команды http.createServer(объект запроса, объект ответа )
const server = http.createServer((req, res) => {
  // отправляется успешный ответ
  res.statusCode = 200;
  // ответ простой текст
  res.setHeader("Content-Type", "text/plain");
  // тестовый ответ
  // res.write("Hello World");
  res.end("Hello World kok");
});

//запуск сервера и прослушивание входящих http запросов
server.listen(port, hostname, () => {
  // при успешном запуске вывод результата в консоль
  console.log(`Server running at http://${hostname}:${port}/`);
});
