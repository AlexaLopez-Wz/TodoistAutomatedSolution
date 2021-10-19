import { Selector ,t} from "testcafe";

class loginPage{
    constructor(){
        //Login page elements
        this.emailInput = Selector('#email')
        this.password = Selector('#password')
        this.loginButton = Selector("[class*='submit_btn']")
        this.errorMessage = Selector(".error_msg").child('span')
    }
    async submitLoginForm(email,password){
        await t
        .typeText(this.emailInput,email)
        .typeText(this.password,password)
        .click(this.loginButton)
    }
}

export default new loginPage