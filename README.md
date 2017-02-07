## Deprecated. Use [CRA](https://github.com/facebookincubator/create-react-app) instead!



# easyfront

![easyfront logo](https://cloud.githubusercontent.com/assets/1443320/13167423/f09fdf14-d70d-11e5-9221-6d9ccfd45e7e.png)

[![Join the chat at https://gitter.im/lavrton/easyfront](https://badges.gitter.im/lavrton/easyfront.svg)](https://gitter.im/lavrton/easyfront?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Integral tool for modern and dead simple frontend development flow.

What to make web development DAMN simple? Meet with `easyfront`!

`easyfront` is a particular set of most powerful and solid frontend tools which integrated to work together.


## [Read the Overview Post](https://medium.com/@lavrton/frontend-development-tools-are-damn-complex-let-us-fix-it-56b3ff46ca8d)

[https://medium.com/@lavrton/frontend-development-tools-are-damn-complex-let-us-fix-it-56b3ff46ca8d](https://medium.com/@lavrton/frontend-development-tools-are-damn-complex-let-us-fix-it-56b3ff46ca8d)


## Usage:

```bash
# create folder for you project
mkdir my-project && cd ./my-project

# instal easyfront locally
npm install easyfront

# create initial frontend application file structure and instal some deps
./node_modules/.bin/easyfront init


# start dev environment and local server
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

Use `npm` for any libraries/frameworks dependences:

```bash
npm install react --save
```

```javascript
import React from 'react';
```

## npm2 and npm3 note

By default your tests will be configured to get dependences (mocha/chai) from `./node_modules/`. It will work well for `npm3` users as `npm3` use flatten approach of installing dependences. If you are using `npm2` take a look into `./test/index.html`. There are some comments how to enable test for you.

## Configuration

Remember that the general idea of `easyfront` is to avoid any configuration.
But if you still need some customization you can pass some options into `easyfront` CLI.
For list of all option you can run:

```bash
./node_modules/.bin/easyfront [command] -h
# for instance
./node_modules/.bin/easyfront dev -h
```

## There are list of current options

You can update `scripts` of your `package.json` file.

### Local server port

```
easyfront dev --port 8081
```

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


## F.A.Q.

### Can I use my own webpack configuration?

Probably this will be supported, but right now *NO*.
We want to avoid ANY configurations and use them as less as possible.

If you have something very good to add into current webpack configuration create GitHub issue, please.

### Can I use gulp/grunt instead of webpack?

Probably you don't need grunt/gulp for bundling as webpack works very good. If you have your own gulp/grunt configuration for bundling you don't need `easyfront`.

But in some specific cases (for instance ftp deploy, assets preparation) you can use gulp/grunt in parallel with `easyfront`.

The idea of `easyfront` is to hide all of this internal tools from you. So if new better bundler will come out (something that can replace webpack) you will not care about this, because `easyfront` incapsulate such tool and bundler will be updated inside `easyfront`.


### Can I use Jasmine instead of Mocha/chai for testing?

Yes, you can. But you have to install them manually and `easyfront test` command will not work in this case. So if you need CLI test runner you have to setup it manually.

## Alternatives

There are some other projects with the same idea:

1. https://github.com/insin/nwb
2. https://github.com/mzabriskie/rackt-cli  [very specific to react, useful for creating and publishing componets]
3. https://github.com/petehunt/rwb [was not working for me, and code structure is strange]
4. https://github.com/ryanflorence/react-project [add a lot of React + react router boilerplates but have server support]
5. https://github.com/tj/react-fatigue-dev [Looks like limited for creating react components]
6. https://github.com/jarsbe/react-simple [For fast test without building]

## Change log

### 0.0.12

- add port option to `dev` command
- add add png loader
