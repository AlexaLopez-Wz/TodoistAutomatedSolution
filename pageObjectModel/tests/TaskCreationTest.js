import inboxPage from '../pages/InboxPage'
import {URLS,TASKDUEDATE,TASKNUMBER} from '../data/Constrains'
import {STANDARD_USER} from '../data/Roles'
import sideBarPage from '../pages/SideBarPage'


fixture ('Create new Task feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        //Log in before run every test in this suite
        await t.useRole(STANDARD_USER)
        await t.click(sideBarPage.inboxOption)
    })
    .afterEach(async t => {
        await t.wait(1000)
        //Delete all the task after each test case
        await inboxPage.deleteAllTasks()
        //Wait untill the api gets the new information
        await t.wait(1000)
    })

test.meta('type','smoke')('As an user, I should be able create a new task using today as due date', async t => {
    //Create one single task usign Today as due date
    await inboxPage.createNewTask(TASKNUMBER.singleTask,TASKDUEDATE.today)
    await t.wait(1500)

})

test.meta('type','smoke')('As an user, I should be able create a new task using tomorrow as due date', async t => {
    //Create one single task usign Tomorrow as due date
    await inboxPage.createNewTask(TASKNUMBER.singleTask,TASKDUEDATE.tomorrow)
    await t.wait(1500)
})

test('As an user, I should be able create 10 tasks', async t => {
    //Delete all the task before start this test
    await inboxPage.deleteAllTasks()
    //Create 10 tasks usign Today as due date
    await inboxPage.createNewTask(TASKNUMBER.tenTasks,TASKDUEDATE.today)
    await t.expect(await inboxPage.taskInPage.count).eql(TASKNUMBER.tenTasks)
})
