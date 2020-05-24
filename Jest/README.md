# Jest

## About Jest

Jest is a JavaScript Testing Framework for unit tests maintained by Facebook. It works with projects using: Babel, TypeScript, Node.js, React, Angular and Vue.js. It aims to work out of the box and config free

Features: 

- expectations and test lifecycle hooks (before/after callbacks)

- Assertions - are built in

- Snapshots -  It allows you to take a snapshot of your React component’s rendering – a representation of its output at a given point in time. The first time you run a Jest snapshot test, a snapshot file will be created and considered as the correct version. In the future, that snapshot file will be checked to see if it contains any changes.


## Jest gotchas

### Error when importing a file

! There is an error when importing files like png, to solve this you need:

1. Add moduleNameMapper property to jest config in package.json

    "moduleNameMapper": {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
    },

2. Create __mocks__ folder with fileMock.js and fill it with `module.exports = '';`


## Setup Jest

When using together with react-test-renderer chages that is made in child components affects tested (parent) component.
To solve this issue, we will use the Enzyme package instead of the React Test Renderer package.

`npm install --save-dev jest babel-jest react-test-renderer ts-jest`

`----------------------------jest-------------------------`
`|                            |                          |`
`babel-jest           react-test-renderer           ts-jest`

npm install --save-dev styled-components jest-styled-components

## Jest config for ts

{
  "jest": {
    "transform": {
      ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ]
  }
}


# Jest with Enzyme

## Enzyme 

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.

Enzyme is a wrapper written on top of React Test Renderer which stubs out child components while focusing on just parent components. 

## Setup Enzyme

npm i --save-dev enzyme enzyme-adapter-react-16 

ts support 

npm i @types/enzyme @types/enzyme-adapter-react-16 -D 

## Shallow vs Mount Enzyme

### Shalow method

• shallow method is used to render the single component that we are testing. It does not render child components.
• In Enzyme version less than 3, the shallow method does not have the ability to access lifecycle methods. But in Enzyme version 3, we have this ability.
• Simple shallow calls the constructor, render, componentDidMount (in Enzyme version 3) methods.
• shallow + setProps call componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate (in Enzyme version 3) methods.
• shallow + unmount call componentWillUnmount method.

### Mount method

• mount method renders the full DOM including the child components of the parent component that we are running the tests.
• This is more suitable when there are components which directly interfere with DOM API or lifecycle methods of React.
• But this is more costly in execution time.
• Simple mount calls the constructor, render, componentDidMount methods.
• mount + setProps call componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate methods.
• mount + unmount call componentWillUnmount method.

### Sinon

sinon: Spy functions, mocks, and stubs

-------------------------------------------------------------------------------------------------------------------


# Babel vs TypeScript compiler

Babel and TypeScript are both compilers that can transpile files into js. There are some major differences between using TypeScript and using TypeScript with Babel. 

### How can Babel handle the TypeScript type checking?

Babel stripping out TypeScript code during compilation. This means that Babel doesn`t care about TypeScript types. 
The example below compiles without any errors or warnings with Babel, but not with TypeScript:

`let num:string = 8` - 8 is not a string

### TypeScript can already output to ES5 just like Babel can, so what’s the point?

Babel is a good choice for browser compatability. Babel converts your code and let you use latest features without worry.

The TypeScript compiler has a similar feature, enabled by setting target to something like ES5 or ES6. But the Babel configuration improves on this with babel-preset-env. Instead of locking in a specific set of JavaScript features (ES5, ES6, etc), you list the environments you need to support:

`"targets": {`
`	"browsers": ["last 2 versions", "safari >= 7"],`
`	"node": "6.10"`
`}`

# Babel as a TypeScript compiler

Babel has the TypeScript plugin (@babel/preset-typescript) that allows to transpile ts files into js. To do this you need to 
configure the TypeScript compiler only check types, but not emit files. And use the Babel to do the actual compilation.

-To allow Babel to consume TypeScript files you need to install `@babel/preset-typescript`

`-----------------------@babel/core-----------------------`
`|                            |                          |`
`@babel/preset-react   @babel/preset-typescript   @babel/preset-env`

## Configure Babel

- In babelrc, add the preset-typescript preset. This strips out type annotations from your TypeScript files, allowing Babel to compile them just as it would regular JavaScript.

`presets: [`
`    '@babel/preset-react',`
`    '@babel/preset-typescript',`
`    '@babel/preset-env'`
`  ]`
`}`

`This only makes Babel ignore the types` — `it doesn't check them!`

## Configure TypeScript

- In tsconfig.json you need to set `noEmit` to `true` which prevents TypeScript from writing its own JavaScript files.






