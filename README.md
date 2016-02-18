# easyfront

[![Join the chat at https://gitter.im/lavrton/easyfront](https://badges.gitter.im/lavrton/easyfront.svg)](https://gitter.im/lavrton/easyfront?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Universal tool for modern and fucking simple front end development flow.

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
