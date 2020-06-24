const express = require('express');
const { PORT = 3000 } = process.env;

const app = express();
const path = require("path");                                              //модуль ноды для работы с путями файлов

const cardsRouter = require(path.join(__dirname, 'routes', 'cards.js'));   // импортируем роутер для карточек
const usersRouter = require(path.join(__dirname, 'routes', 'users.js'));   // импортируем роутер для данных о пользователях
const nolinkRouter = require(path.join(__dirname, 'routes', 'nolink.js')); // импортируем роутер для неверных запросов

const publicPath = path.join(__dirname, 'public');                         //собрали абсолютный путь к папке public

app.use(express.static(publicPath));                                       // доступ только к публичным файлам

app.use('/', cardsRouter);                                       //подключаем cardsRouter
app.use('/', usersRouter);                                       //подключаем userssRouter
app.use('/', nolinkRouter);                                      //подключаем nolinkRouter

app.listen(PORT);                                                //начинаем слушать заданный порт


