# Jest

## Installation

`npm install --save-dev jest babel-jest react-test-renderer ts-jest`

`----------------------------jest-------------------------`
`|                            |                          |`
`babel-jest           react-test-renderer           ts-jest`

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

npm install --save-dev styled-components jest-styled-components

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






