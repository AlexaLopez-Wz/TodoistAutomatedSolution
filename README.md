- Pre-requisites:
    - Download the repository : https://github.com/Alexahls/TodoistAutomatedSolution
    - Install npm
    - Install testcafe: npm install -g testcafe
    - Install Reporter: npm install testcafe-reporter-html
    - Install casual: npm install casual
    - prerequisitos (que se necesita instalar)


- Run the scripts
    In terminal run the following command:
    - cd TodoistAutomatedSolution +
        - Smoke test: npm run smoketest
        - Login in two browsers headless : npm run testlogin2browsersheadlessmode
        - Full regression (all the thest cases in this solution): npm run fullregression
  
- Solution Structure:
    - node_modules
    - pageObjectModel
        -data : the files where the common data are saved
        -pages :  file where you can find  the dom locators and the metod
        -test : files where the test are added
    - Reporter : here the logs are saved, you can open this file in any browser
