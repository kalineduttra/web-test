<h1>Cypress Automation Project for Adopet</h1>
Automated testing for the Adopet website, implemented with Cypress. The tests cover functionalities, bulk data insertion and API verification. The documentation for the automated tests is generated from the Mochawesome package.

<h2>Features</h2>  

End-to-End UI Testing: Comprehensive test coverage for various functionalities of the Cypress website.  
Cypress: Utilized for interacting with the web elements and performing actions.  
Mochawesome: Integrated to generate detailed and visually appealing reports of the test execution.

<h2>Techonologies Used</h2>  

JS: Programming language used for developing the test scripts.  
Cypress: Tool for automating web application testing.  
Cypress Cloud: Share cloud testing documentation.  
Node.js: Cypress runs in a Node.js environment.  
Mochawesome: Package for generating test execution reports.  

<h2>Setup and Installation</h2>  
1. Clone the repository  

```
git clone https://github.com/kalineduttra/web-test.git
```

2. Important to have the tools installed  
[Node.js](https://nodejs.org/en)  
[VSCode](https://code.visualstudio.com/)

3. Local environment setup

Starting a project with NPM
```
npm init
```
Install Cypress
```
npm install cypress --save-dev
```

<h2>Running the Tests</h2>
    Open the project using the Cypress GUI

```
npx cypress open
```
or test in headless mode  
```
npx cypress run
npx cypress run --spec ".\cypress\e2e\correct-login.cy.js"
```
