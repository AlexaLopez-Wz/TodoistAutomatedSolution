![image](https://user-images.githubusercontent.com/92478365/138358383-120b04b1-77ce-4380-9a05-3bf2c15bf4eb.png)

<!-- ABOUT THE PROJECT -->
## About The Project
Todoist is the simple yet powerful to-do list app that will help organize life and work.

<!-- ABOUT THE AUTOMATION -->
## Automated Solution


### Built With
Frameworks and libraries used:
* NPM
* TestCafe
* Eslint
* TestCafe Reporter 
* ESLint


Programing language:
* JavaScript
	
	
<!-- GETTING STARTED -->
## Getting Started
	
### Prerequisites
- [x] An IDE installed  (Recommended: Visual studio code) 
- [x] NPM installed
	
### Installation
- Clone the repository : https://github.com/Alexahls/TodoistAutomatedSolution
- Install TestCafe using the terminal
	 ```
	npm install testcafe
	```
- Install Reporter using the terminal
	```
	npm install testcafe-reporter-html
	```
- Install Casual using the terminal
 	```
	npm install casual
	```
- Install ESLint using the terminal
 	```
	npm install eslint
	```
- Create .env file: (In order to run the scripts the .env file must be created, there the login information will be located)
	1. In the main folder add one new file using the following name: 
		```
		.env
		```
	2. Add the following information in the file :
		- STANDARD_USER_EMAIL = myemail@email.com
		- STANDARD_USER_PASSWORD = password
	3.  Save the file

### Solution Structure:
    TodoistAutomatedSolution
    ├── README.md
    ├── Reporter
    │   ├── FullRegressionReports
    │   │   └── file.html
    │   └── SmokeReports
    │       └── file.html
    ├── package-lock.json
    ├── package.json
    └── pageObjectModel
        ├── data
        │   ├── Constrains.js
        │   └── Roles.js
        ├── pages
        │   ├── InboxPage.js
        │   ├── LoginPage.js
        │   ├── SideBarPage.js
        │   └── TodayPage.js
        └── tests
            ├── LoginTest.js
            ├── ProjectCreationTest.js
            └── TaskCreationTest.js
	   
Description:  
- pageObjectModel:
	* DATA : here you can find the common data used by tests and methods.
	* PAGES :  the files simulate each page in the website, here the elements are declared and used to perform actions.
 	* TEST:  test cases are created here, assertions are used to validate the actions were performed correctly.
- Reporter: here the reports with the status of the test cases executed are saved in html format (open it using any browser).



<!-- EXECUTING SCRIPTS  -->
## Execute scripts
Copy & paste the following code into the terminal
- Login in two browsers headless:
	```
	npm run testlogin2browsersheadlessmode
	```
- Full regression (all the test cases in this solution):
	```
	npm run fullregression
	```
- Validate the code using eslint: 
	```
	npm run lint
	```
- Run login test cases: 
	```
	npm run logintest
	```
- Run task creation test cases: 
	```
	npm run taskcreationtest
	```
- Run project creation test cases: 
	```
	npm run projectcreationtest
	```
- Smoke test: 
	```
	npm run smoketest
	```
