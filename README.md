# easyfront

![easyfront logo](https://cloud.githubusercontent.com/assets/1443320/13167423/f09fdf14-d70d-11e5-9221-6d9ccfd45e7e.png)

[![Join the chat at https://gitter.im/lavrton/easyfront](https://badges.gitter.im/lavrton/easyfront.svg)](https://gitter.im/lavrton/easyfront?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Universal tool for modern and dead simple frontend development flow.

What to make web development DAMN simple? Meet with `easyfront`!

Usage:

```bash
# install globally for initing command
npm install easyfront -g

mkdir my-project && cd ./my-project

# create initial frontend application file structure and instal some deps
easyfront init

# start dev enviroment and local server
npm start
# now go to http://localhost:8080/src/ for your app
# or http://localhost:8080/test/ for tests


# run tests via CLI
npm test

# compile, concat and minify application
npm run build


```

## Project structure

All your core files are placed in `./src/` directory.
If you need to include some addition files (like images, fonts or styles which you don't want to import from js) into build result just place them in `./src/assets/` directory.

## Support

- Join [gitter char](https://gitter.im/lavrton/easyfront)
- Follow on [Twitter](https://twitter.com/lavrton).

## Roadmap

- builtin eslint configuration with bunch of useful plugins and text editors support
- flow support
- more useful babel-presets
- css preprocessors


## Benefits of using easyfront?

The general idea of `easyfront` is to make frontend development flow very simple and AVOID any configurations.

There is part of my package.json before easyfront:

```
“devDependencies”: {
 “babel-core”: “^6.2.1”,
 “babel-loader”: “^6.2.0”,
 “babel-plugin-transform-object-rest-spread”: “^6.1.18”,
 “babel-preset-es2015”: “^6.1.18”,
 “babel-preset-react”: “^6.1.18”,
 “babel-preset-stage-0”: “^6.1.18”,
 “css-loader”: “^0.22.0”,
 “eslint”: “^2.1.0”,
 “raw-loader”: “^0.5.1”,
 “react-addons-perf”: “^0.14.3”,
 “style-loader”: “^0.13.0”,
 “webpack”: “^1.12.4”,
 “webpack-dev-server”: “^1.12.1”
}
```
After:
```
“devDependencies”: {
   “eslint”: “^2.1.0”,
   “easyfront”: “^0.0.6”
 }
 ```
