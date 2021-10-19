import { Selector, t } from "testcafe"
import todayPage from '../pages/TodayPage'
import {CREDENTIALS, URLS} from '../data/Constrains'
import {STANDARD_USER} from '../data/Roles'
var casual = require('casual');

fixture ('Create new Task feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        //Log in before run every test in this suite
        await t.useRole(STANDARD_USER)
        await t.expect(todayPage.todayView.visible).ok({timeout:3500})
    })
    .afterEach(async t => {
        //Delete all the task after each test case
        await todayPage.deleteAllTasks()
    })

test.meta('type','smoke')('As an user, I should be able create a new task using today as due date', async t => {
    var taskName = casual.title
    var taskDescription= casual.description
    await todayPage.createNewTask(taskName,taskDescription)
    var taskNumber = await todayPage.taskInTodayPage.count
    await t.expect(todayPage.taskInTodayPage.nth(taskNumber-1).innerText).eql(taskName)
})
test('As an user, I should be able create 10 tasks using today as due date', async t => {
    const createTaskNumber = 10
    for(var i=0;i<createTaskNumber;i++)
    {
        var taskName = casual.title
        var taskDescription= casual.description
        await todayPage.createNewTask(taskName,taskDescription)
        var taskNumber = await todayPage.taskInTodayPage.count
        await t.expect(todayPage.taskInTodayPage.nth(taskNumber-1).innerText).eql(taskName)
    }
    
})