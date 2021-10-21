import { t } from "testcafe"
import todayPage from '../pages/TodayPage'
import inboxPage from '../pages/InboxPage'
import {URLS,taskDueDate} from '../data/Constrains'
import {STANDARD_USER} from '../data/Roles'
import sideBarPage from "../pages/SideBarPage"

var casual = require('casual');

fixture ('Create new Task feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        //Log in before run every test in this suite
        await t.useRole(STANDARD_USER)
        await t.expect(todayPage.todayView.visible).ok()
        await sideBarPage.goToInboxPage()
    })
    .afterEach(async t => {
        //Delete all the task after each test case
        await inboxPage.deleteAllTasks()
        //Wait untill the api gets the new information
        await t.wait(1500)
    })

test.only.meta('type','smoke')('As an user, I should be able create a new task using today as due date', async t => {
    var taskName = casual.title
    var taskDescription= casual.description
    var date = taskDueDate.today
    await inboxPage.createNewTask(taskName,taskDescription,date)
    await t.wait(1500)
    var taskNumber = await inboxPage.taskInPage.count
    await t.expect(inboxPage.taskInPage.nth(taskNumber-1).innerText).eql(taskName)
    console.log(inboxPage.taskDueDate.nth(taskNumber-1).innerText)
  //  await t.expect(inboxPage.taskDueDate.nth(taskNumber-1).value).eql("Monday")
})

test.meta('type','smoke')('As an user, I should be able create a new task using tomorrow as due date', async t => {
    var taskName = casual.title
    var taskDescription= casual.description
    var date = taskDueDate.today
    await inboxPage.createNewTask(taskName,taskDescription,date)
    await t.wait(1500)
    var taskNumber = await inboxPage.taskInPage.count
    await t.expect(inboxPage.taskInPage.nth(taskNumber-1).innerText).eql(taskName)
    await t.expect(inboxPage.taskDueDate.nth(taskNumber-1).innerText).eql(date)
})

test('As an user, I should be able create 10 tasks', async t => {
    var numberOfTaskToCreate = 10
    await inboxPage.createSeveralDynamicTasks(numberOfTaskToCreate)
    var taskNumber = await inboxPage.taskInPage.count
    await t.expect(taskNumber).eql(numberOfTaskToCreate)
})
