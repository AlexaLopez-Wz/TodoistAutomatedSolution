import {URLS} from '../data/Constrains'
import {STANDARD_USER} from '../data/Roles'
import sideBarPage from "../pages/SideBarPage"


fixture ("Create new Project test")
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        //Log in before run every test in this suite
        await t.useRole(STANDARD_USER)
        await sideBarPage.getRandomInformation()

    })

test.meta('type','smoke')("As an user, I should be able to create a new project by providing valid information", async t => {
    await sideBarPage.addNewProject()
    await t.wait(1500)
    await t.expect(sideBarPage.projectNameLabel.visible).ok()
})