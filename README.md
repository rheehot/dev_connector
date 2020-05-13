<h1 align="center">Welcome to Dev Connector 👋</h1>

> Social network for developers

It is a small social network app that includes authentication, profiles and forum posts. <br />
To practice at building NodeJS app, I built it on top of this [MERN Stack Front To Back](https://www.udemy.com/course/mern-stack-front-to-back/) course on Udemy.

## Version info

- NodeJS v12.16.1

## Getting started

> Set private token

```
$ cd config
$ touch default.json
```

```
{
  "mongoURI": "xxx",
  "jwtSecret": "xxx",
  "githubToken": "xxx"
}
```

> Install dependencies and Run dev

```
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Run both Express & React from root
npm run dev
```

> Build for production

```
# Build for production
cd client
npm run build
```

### ✨ Live Demo

[herokuapp](https://suh-dev-connector.herokuapp.com/)

- Version: 1.0.0
- Author: Suhyeon Jang, [Brad Traversy MERN stack](https://www.udemy.com/course/mern-stack-front-to-back/) course

## Resource

You can get an Github token by following [these instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

- [jwt authentication](https://jwt.io/)
- [transitioning from rdbms to mongodb](https://www.mongodb.com/blog/post/transitioning-from-relational-databases-to-mongodb)
- [prettier options](https://prettier.io/docs/en/options.html)
