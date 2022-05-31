# grid-project
 
Project structure
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

To run the tests follow the steps:

1. Install npm on your machine
2. Using the terminal go to your project folder
3. Install dependencies but running the dommand: npm install
4. On visual code, open the file tsconfig.json and change these two attributes:
"experimentalDecorators": true
"strictPropertyInitialization": false
5. Using the terminal, go to your project folder and run tests using the command: npm test