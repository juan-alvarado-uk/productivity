# To-Do App

## Set-Up Guide
- [Installation](#installation)
- [Starting project](#starting-project)

**0. Before doing any of this, if you're using your own laptop/desktop, make sure you've got the latest versions of node and npm installed:**

```sh
node -v
npm -v
```

## Installation

**1. Clone this repository :**

```sh
git clone --depth 1 https://github.com/juan-alvarado-uk/productivity.git productivity
cd productivity
```

**2. Make it your own :**

```sh
rm -rf .git && git init && npm init
```

> :information_source: Command above re-initializes the repo and sets up your NPM project.

**2a. Make it your own (Windows):**

If you are using Windows you can run the three necessary comand using Powershell. You might need elevated privileges.

```sh
rm -r -fo .git
git init 
npm init
```

**3. Install the dependencies :**

```sh
npm install
```

## Starting project

This project has two parts, one is a django projects that serves as api for the seconda part of this projects which is a ReactJS project. In order to start this project the next steps are needed.


**4. Start server for the django project :**

```sh
python manage.py runserver
```

**5. Start server for the React project :**

```sh
cd todo_react
npm start
```

> These are full web servers for the project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.


**6. Generate a production build in `./build` :**

```sh
npm run build
```
