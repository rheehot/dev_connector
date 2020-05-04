<h1 align="center">Welcome to Dev Connector 👋</h1>

> Social network for developers

This is a MERN stack application from the "MERN Stack Front To Back" course on Udemy. It is a small social network app that includes authentication, profiles and forum posts.

## Version info

- NodeJS v12.16.1

### ✨ [Live Demo](https://suh-dev-connector.herokuapp.com/)

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

## App Info

### Author

👤 **Brad Traversy** [Traversy Media](https://www.traversymedia.com/)

👤 **Suhyeon Jang** [@shjang](https://www.linkedin.com/in/shjang/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/shjang7/dev_connector/issues).

1. Fork it (https://github.com/shjang7/dev_connector/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add')
4. Push to the branch (git push origin feature/[feature-name])
5. Create a new Pull Request

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.

## Resource

You can get an Github token by following [these instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

- [jwt authentication](https://jwt.io/)
- [transitioning from rdbms to mongodb](https://www.mongodb.com/blog/post/transitioning-from-relational-databases-to-mongodb)
- [prettier options](https://prettier.io/docs/en/options.html)
