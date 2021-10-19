import { Selector, t } from "testcafe"
import todayPage from '../pages/TodayPage'
import {CREDENTIALS, URLS} from '../data/Constrains'
import {STANDARD_USER} from '../data/Roles'
import sideBarPage from "../pages/SideBarPage"

//Multiple information to create a project
var projectInfo = {
    name :["Work", "Shop list", "To do - Urgent"],
    color :["Blue", "Grape", "Red","Green"],
    view : ["List", "Board"]
}
var projectRandomInfo


fixture ("Create new Project test")
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        //Log in before run every test in this suite
        await t.useRole(STANDARD_USER)
        await t.expect(todayPage.todayView.visible).ok({timeout:3500})
        //Get random information before creating a new project
        projectRandomInfo={
            name :((await sideBarPage.getRandomInformation(projectInfo)).name),
            color :((await sideBarPage.getRandomInformation(projectInfo)).color),
            view :((await sideBarPage.getRandomInformation(projectInfo)).view)
        }
    })

test.meta('type','smoke')("As an user, I should be able to create a new project by providing valid information", async t => {
    await sideBarPage.addNewProject(projectRandomInfo.name,projectRandomInfo.color,projectRandomInfo.view)
    await t.expect(sideBarPage.projectsListItem.visible).ok({timeout:3500})
})