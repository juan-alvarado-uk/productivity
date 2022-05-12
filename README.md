# To-Do App

**This one is a django project that serves as an API and communicates with a ReactJS app.**

## Set-Up Guide
- [Installation](#installation)
- [Starting project](#starting-project)



**0. Before doing any of the following, check this out**

For this example, it is suggested to use a conda virtual environment. In order to do that you must download and install miniconda:

https://docs.conda.io/en/latest/miniconda.html

All this to keep the base configuration of your computer as it is.

Once miniconda is installed, create a virtual environment. 


Create a new environment (with Python 3.10)
```sh
conda create --name TC2002S python=3.10
```
When you want to use it, activate environment
```sh
conda activate TC2002S
```
when you are done, deactivate environment
```sh
conda deactivate TC2002S
```
If you want to see the environments you have created
```sh
conda info --envs
```
Because this project uses django we must install it. 
We’re installing two more dependencies for our API:

Django REST Framework: a powerful and Flexible toolkit for building Web APIs

django-cors-headers: app for handling the server headers required for Cross-Origin Resource Sharing (CORS)
This is going to be useful when we try to access the API from a different application (React). It helps to connect Django to React.

```sh
pip install django djangorestframework django-cors-headers
```

Also, make sure you've got the latest versions of node and npm installed:

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

If you are using Windows you can run the three necessary commands using Powershell. You might need elevated privileges.

```sh
rm -r -fo .git
git init
npm init
```

**3. Install the (React project) dependencies :**

```sh
cd todo_react
npm install
```

## Starting project

This project has two parts, one is a django project that serves as API for the second part of this project which is a ReactJS app. In order to start this project the next steps are needed.


**4. Start server for the django project :**

From the root folder (productivity)
```sh
python manage.py runserver
```

**5. Start server for the React project :**

```sh
cd todo_react
npm start
```

> These are web servers for the project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.


**6. Generate a production build in `./build` :**

```sh
npm run build
```

**7. Once the two servers are running**

Visit: http://localhost:3000/