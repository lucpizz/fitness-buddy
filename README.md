![GitHub License](https://img.shields.io/badge/MIT-License-informational) ![GitHub License](https://img.shields.io/badge/Node-JavaScript-informational) ![GitHub License](https://img.shields.io/badge/MongoDB-Database-informational) ![GitHub License](https://img.shields.io/badge/Express-Server-informational) ![GitHub License](https://img.shields.io/badge/MySQL2-Database-informational) ![GitHub License](https://img.shields.io/badge/Mongoose-ODM-informational)

# Fitness Buddy

## Table of Contents

- [Description](#description)
- [Deployed Application](#deployed-applicaiton)
- [Site Structure](#site-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#question)
- [License](#license)

---

## Description

This program is a simple and intuitive fitness tracker. You input your workouts, it stores them, and you can view the dashboard for your stats.

## Site Structure

```bash
├── Develop
│   ├── models
│   │   ├── index.js
│   │   └── Workout.js
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── api.js
│   │   ├── exercise.html
│   │   ├── exercise.js
│   │   ├── index.html
│   │   ├── index.js
│   │   ├── stats.html
│   │   ├── stats.js
│   │   ├── style.css
│   │   └── workout.js
│   ├── routes
│   │   ├── api_routes.js
│   │   └── html_routes.js
│   ├── seeders
│   │   └── seed.js
│   └── server.js
├── LICENSE
└── README.md
```

### File Descriptions

1. Main Directory - Develop

- models directory
  - index.js (exports and requies the workout file - Mongoose Schema)
  - Workout.js (Mongoose Schema file)
- package.json & package-lock.json (Node configuration list program details, scripts, license, and dependencies packages)
- public directory
  - api.js (API for the workout post, fetch, and put methods)
  - exercise.js (functions to input aspects of the workouts)
  - index.html (landing html (main webpage) for fitness tracker app)
  - index.js (JavaScript code that initializes the landing page with the last workout)
  - stats.html (stats html webpage)
  - stats.js (JavaScript code that correlates the workout status)
  - style.css (adds style, color, and organizes the webpages)
  - workout.js (JavaScript code that computes the workout status)
- routes directory
  - api-routes.js (JavaScript code for API gets, creates, and deletes user input)
  - html-routes.js (JavaScript code that gets all the data and re-renders it on the webpage)
- seeders
  - seed.js (mongodb/mongoose database test data for application)
- server.js (JavaScript code that envokes and establishes the express service
- LICENSE (MIT license)
- README.md (contains the description of the program and files)

---

## Installation

1. Create this repostiory by using the GitHub forking process onto your computer
2. Install NPM the Node Project Manager to your program directory
3. Install dependecies to your program directory (npm install "package name"):
   - Node
   - Nodemon
   - Express
   - Eslint
   - Mongoose
   - Morgan
   - Dotenv
4. Start your MongoDB server and connect to localhost.
5. Run your seeder file "node seeders/seed.js"
6. Run your server "node server.js"

---

## Usage

This program is designed to track your workouts and provide stats.

Start the program with the following command "node server.js".

---

## Contributing

GitHub Username - lucpizz

Please list your name here if you are contributing to this project.

---

## Questions

Please contact me at lucpizz@gmail.com for any questions regarding this program.

---

## License

MIT License

Copyright (c) 2021 Luca Pizzoferrato

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
