import { Selector, t } from "testcafe"
import todayPage from '../pages/TodayPage'
import loginPage from '../pages/LoginPage'
import mainPage from '../pages/MainPage'
import {CREDENTIALS, URLS} from '../data/Constrains'

fixture ('Create new Task feature test')
    .page `${URLS.LOGIN_URL}`

test('As an user, I should be able create a new task using today as due date', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
    //await t.useRole(STANDARD_USER)
    await t.wait(3000)
    await t.expect(mainPage.todayView.exists).ok()
    await todayPage.createNewTask('homework','send the homeworkn on monday please')
   // await t.expect(todayPage.taskContentLabel.exists).ok()
    //await t.expect(todayPage.taskContentLabel.textContent).eql('Math')
})