<h2>Adopet</h2>
Automated testing for the Adopet website, implemented with Cypress. The tests cover functionalities, bulk data insertion and API verification. The documentation for the automated tests is generated from the Mochawesome package.

<h2>Installation</h2>
Important to have the tools installed

[Node.js](https://nodejs.org/en)  
[VSCode](https://code.visualstudio.com/)

`git clone https://github.com/kalineduttra/web-test.git` = clone project

<h2>Local environment setup</h2>

`npm init` = Starting a project with NPM

`npm install cypress --save-dev` = Install Cypress

<h2>Usage</h2>

Open the project using the Cypress GUI | `npx cypress open`

or test in headless mode
```
npx cypress run
npx cypress run --spec ".\cypress\e2e\correct-login.cy.js"
```
