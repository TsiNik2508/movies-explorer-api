# Ru

# Проект: Навигатор фильмов (backend)

Дипломный проект выполненный в рамках курса "Веб-разработчик" от Яндекс Практикум.
Проект представляет из себя бэкенд часть для проекта [movies-explorer](https://github.com/TsiNik2508/movies-explorer-frontend) также выполненного в рамках указанного выше учебного курса.

## Оглавление

- [Обзор проекта](#обзор-проекта)
  - [Задачи проекта](#задачи-проекта)
  - [Функциональность проекта](#функциональность-проекта)
  - [Директории проекта](#директории-проекта)
  - [Запуск проекта](#запуск-проекта)
- [Ход выполнения проекта](#ход-выполнения-проекта)
  - [Используемые технологии](#используемые-технологии)
  - [Чему я научился работая над проектом](#чему-я-научился-работая-над-проектом)

## Обзор проекта

### Задачи проекта

Проект был призван закрепить навыки backend-разработки, и способы развёртывания приложения на Node.js и Express, а также работе с БД MongoDB и ODM mongoose.

### Функциональность проекта

- В проекте созданы схемы и модели пользователей и карточек с контентом:
  - `movie` — схема карточки с контентом
  - `user` — схема пользователя
- В проекте созданы эндпоинты:
  - `/movies` — обрабатывает:
    - GET запросы — отдаёт все карточки из БД
    - POST запросы — создаёт новую карточку с контентом
  - `/movies/:cardId` — обрабатывает DELETE запросы, удаляет карточку по `cardId`
  - `/signin` — обрабатывает POST запросы, производит аутентификацию пользователя
  - `/signup` — обрабатывает POST запросы, производит регистрацию пользователя
  - `/signout` — обрабатывает POST запросы, производит выход пользователя
  - `/users/me` — обрабатывает:
    - GET запросы — отдаёт всех информацию о пользователе
    - PATCH запросы — обновляет информацию о пользователе
- Созданы мидлвары:
  - Авторизации пользователя
  - Валидации поступающих в запросе данных
  - Работе с CORS
  - Централизованной обработки ошибок
  - Ограничитель количества запросов (защита от DDoS атак)
  - Логирования
- Производится валидация поступающих данных:
  - до передачи информации контроллерам с помощью celebrate
  - на уровне схем с помощью validator и встроенных методов mongoose

### Директории проекта

- `/controllers` — директория с файлами контроллеров
- `/errors` — директория с файлами кастомных ошибок
- `/middlewares` — директория с мидлварами
- `/models` — директория с файлами описания схем и моделей
- `/routes` — директория с файлами роутера
- `/utils` — директория со вспомогательными файлами

### Запуск проекта

- `npm lint` — запускает проверку линтером
- `npm run start` — запускает приложение в режиме продакшн
- `npm run dev` — запускает приложение в режиме разработки с hot-reload

## Ход выполнения проекта

### Используемые технологии

- [Node.js](https://nodejs.org/ru)
- [nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [celebrate](https://www.npmjs.com/package/celebrate)
- [validator](https://www.npmjs.com/package/validator)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [helmet](https://helmetjs.github.io/)
- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [ESLint](https://eslint.org/)

### Чему я научился работая над проектом

- Разворачивать приложение на Node.js
- Использовать в работе фреймворк Express
- Работать с БД MongoDB
- Использовать в работе с БД ODM mongoose
- Создавать схемы и модели для работы с БД
- Обрабатывать различные виды запросов
- Обрабатывать ошибки некорректных запросов
- Валидировать приходящую в запросе информацию
- Работать с JWT токеном
- Работать с cookies
- Базовой защите приложения
- Логированию
- Работе с CORS
- Деплою проекта на реальный хостинг

# En

# Project: Movies Explorer (backend)

This is a diploma project completed as part of the "Web Developer" course from Yandex Practicum. The project represents the backend part for the [Movies Explorer project](https://github.com/TsiNik2508/movies-explorer-frontend) also completed within the same educational program.

## Table of Contents

- [Project Overview](#project-overview)
  - [Project Goals](#project-goals)
  - [Project Functionality](#project-functionality)
  - [Project Directories](#project-directories)
  - [Project Setup](#project-setup)
- [Project Execution](#project-execution)
  - [Technologies Used](#technologies-used)
  - [What I Learned](#what-i-learned)

## Project Overview

### Project Goals

The project aimed to reinforce backend development skills, deployment methods for Node.js and Express applications, as well as working with MongoDB database and mongoose ODM.

### Project Functionality

- Schemas and models for users and cards with content are created in the project:
  - `movie` — card schema with content
  - `user` — user schema
- Endpoints are created in the project:
  - `/movies` — handles:
    - GET requests — retrieves all cards from the database
    - POST requests — creates a new card with content
  - `/movies/:cardId` — handles DELETE requests, deletes the card by `cardId`
  - `/signin` — handles POST requests, authenticates the user
  - `/signup` — handles POST requests, registers the user
  - `/signout` — handles POST requests, logs out the user
  - `/users/me` — handles:
    - GET requests — retrieves user information
    - PATCH requests — updates user information
- Middleware is created:
  - User authorization middleware
  - Request data validation middleware
  - CORS handling
  - Error handling middleware
  - Request rate limiter middleware (DDoS attack protection)
  - Logging middleware
- Data validation is performed:
  - Before passing information to controllers using celebrate
  - At the schema level using validator and mongoose built-in methods

### Project Directories

- `/controllers` — directory with controller files
- `/errors` — directory with custom error files
- `/middlewares` — directory with middleware files
- `/models` — directory with schema and model description files
- `/routes` — directory with router files
- `/utils` — directory with utility files

### Project Setup

- `npm lint` — runs lint checks
- `npm run start` — starts the application in production mode
- `npm run dev` — starts the application in development mode with hot-reload

## Project Execution

### Technologies Used

- [Node.js](https://nodejs.org/)
- [nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [celebrate](https://www.npmjs.com/package/celebrate)
- [validator](https://www.npmjs.com/package/validator)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [helmet](https://helmetjs.github.io/)
- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [ESLint](https://eslint.org/)

### What I Learned

- Setting up an application on Node.js
- Using the Express framework in work
- Working with MongoDB database
- Using mongoose as an ODM
- Creating schemas and models for working with the database
- Handling various types of requests
- Handling errors from incorrect requests
- Validating incoming request data
- Working with JWT token
- Working with cookies
- Basic application security
- Logging
- CORS handling
- Deploying the project to a real hosting
