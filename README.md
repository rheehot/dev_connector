<h1 align="center">Welcome to Dev Connector 👋</h1>

> Social network for developers

This is a MERN stack application from the "MERN Stack Front To Back" course on Udemy. It is a small social network app that includes authentication, profiles and forum posts. <br />
To practice at building NodeJS app, I built it on top of this [course](https://www.udemy.com/course/mern-stack-front-to-back/).

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

### ✨ [Live Demo](https://suh-dev-connector.herokuapp.com/)

## Resource

You can get an Github token by following [these instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

- [jwt authentication](https://jwt.io/)
- [transitioning from rdbms to mongodb](https://www.mongodb.com/blog/post/transitioning-from-relational-databases-to-mongodb)
- [prettier options](https://prettier.io/docs/en/options.html)
