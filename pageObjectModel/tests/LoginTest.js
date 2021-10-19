import { Selector, t } from "testcafe";
import loginPage from '../pages/LoginPage'
import todayPage from '../pages/TodayPage'
import {CREDENTIALS, URLS} from '../data/Constrains'

fixture ("Login feature test - Valid scenarios")
    .page `${URLS.LOGIN_URL}`

test.meta('type','smoke')("As an user, I should be able to log in successfully by providing valid credentials", async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(todayPage.todayView.visible).ok({timeout:3500})
})


fixture ("Login feature test - Negative scenarios")
    .page `${URLS.LOGIN_URL}`
 

test("As an user, I should not be able to login by providing a wrong email format", async t => {
    await loginPage.submitLoginForm("test",CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.textContent).eql("Invalid email address.")
    await t.expect(todayPage.todayView.exists).notOk()
})

test("As an user, I should not be able to login by providing an email that does not exists", async t => {
    await loginPage.submitLoginForm("someemailthatdoesnotexist@some.com",CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.textContent).eql("Wrong email or password.")
    await t.expect(todayPage.todayView.exists).notOk()
})

test("As an user, I should not be able to login by providing a wrong password", async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,"wrongPassword")
    await t.expect(loginPage.errorMessage.textContent).eql("Wrong email or password.")
    await t.expect(todayPage.todayView.exists).notOk()
})
