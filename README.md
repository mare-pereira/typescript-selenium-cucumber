# Typescript/cucumber/selenium
Esse é um exemplo de como automatizar esses testes

## Project structure

```
.
├──features
├──step-definitions
├──pages
├──lib
├──node_modules
├──config.ts
├──cucumber.js
├──package-lock.json
├──package.json
├──tsconfig.json
└── README.md
```

## To run the tests follow the steps:

1. Install npm on your machine
2. Download chromedriver and add it to PATH: https://zwbetz.com/download-chromedriver-binary-and-add-to-your-path-for-automated-functional-testing/
3. Using the terminal go to your project folder
4. Install dependencies but running the command: npm install
5. On visual code, open the file tsconfig.json and change these two attributes:
"experimentalDecorators": true
"strictPropertyInitialization": false
5. Using the terminal, go to your project folder and run tests using the command: npm test
