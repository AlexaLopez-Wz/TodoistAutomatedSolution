import { Selector ,t} from "testcafe";

class loginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.password = Selector('#password')
        this.loginButton = Selector("[class='submit_btn ist_button ist_button_red sel_login']")
        this.errorMessage = Selector(".error_msg").child('span')
    }
    async submitLoginForm(email,password){
       //var email ='alexa.lopez+todoistemail@wizeline.com'
        //var password='todoist123!'
        await t
        .typeText(this.emailInput,email)
        .typeText(this.password,password)
        .click(this.loginButton)
    }
}

export default new loginPage