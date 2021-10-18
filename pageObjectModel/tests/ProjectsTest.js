import { Selector, t } from "testcafe"
import projectsSidePage from '../pages/ProjectsSidePage'
import loginPage from '../pages/LoginPage'
import {CREDENTIALS, URLS} from '../data/Constrains'

//Multiple information to create a project
var projectInfo = {
    name :["Work", "Shop list", "To do - Urgent"],
    color :["Blue", "Grape", "Red","Green"],
    view : ["List", "Board"]
}


fixture ("Create new Task feature test")
    .page `${URLS.LOGIN_URL}`

test.only("As an user, I should be able to reate a new project by providing valid information", async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.wait(3000)
    await projectsSidePage.addNewProject(projectInfo.name[2],projectInfo.color[1],projectInfo.view[1])
    await t.wait(1500)
    await t.expect(projectsSidePage.projectsListItem.exists).ok()
})