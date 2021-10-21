import { Selector, t } from "testcafe"
import todayPage from '../pages/TodayPage'
import {URLS,projectInfo} from '../data/Constrains'
import {STANDARD_USER} from '../data/Roles'
import sideBarPage from "../pages/SideBarPage"


fixture ("Create new Project test")
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        //Log in before run every test in this suite
        await t.useRole(STANDARD_USER)
        await t.expect(todayPage.todayView.visible).ok()
    })

test.meta('type','smoke')("As an user, I should be able to create a new project by providing valid information", async t => {
    await sideBarPage.addNewProject()
    await t.wait(1500)
    await sideBarPage.lookForProject()
    await t.expect(sideBarPage.projectsListItem.visible).ok()
})