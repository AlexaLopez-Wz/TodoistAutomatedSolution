import { Selector ,t} from "testcafe";
var casual = require('casual');

class  inboxPage{
    constructor(){
        //Inbox elements
        this.createNewTaskButton = Selector('.plus_add_button')

        //Add task section elements
        this.taskNameInput = Selector(".public-DraftEditor-content")
        this.taskDescriptionInput = Selector(".task_editor__description_field")
        this.addTaskButton = Selector("button").withExactText("Add task")
        this.dueTimeSelector = Selector(".item_due_selector")

        //Time Selector elements
        this.dueTimeInput = Selector("[placeholder='Type a due date']")

        //Task elements
        this.taskInPage = Selector(".task_content")
        this.taskItemsDiv = Selector(".task_list_item").child("div")
        this.taskOptions = Selector(".task_list_item__actions task_list_item__actions--active")
        this.moreButton = Selector(".more_actions_button")
        this.deleteTaskOption = Selector(".icon_menu_item__content").withText('Delete task')
        this.taskdueDate = Selector(".due_date_controls")

        //Delete modal elements
        this.confirmDeleteButton = Selector("button").withText("Delete")
    }
    
    async createNewTask(taskNumber,dueDdate){
        for(var i=0;i<=taskNumber-1;i++){
            if(i<1){
                await t.click(this.createNewTaskButton)
            }
            this.addInfoToNewTask(dueDdate)
        }
    }

    async addInfoToNewTask(dueDdate){
        var taskName = casual.title
        var taskDescription= casual.description
        await t
        .typeText(this.taskNameInput, taskName, { paste: true })
        .typeText(this.taskDescriptionInput,taskDescription)
        .click(this.dueTimeSelector)
        .typeText(this.dueTimeInput,dueDdate)
        .pressKey('enter')
        .click(this.addTaskButton)   
        .wait(1500)
        this.validateTaskWasCreatedWithCorrectInfo(taskName,dueDdate)
    }

    async validateTaskWasCreatedWithCorrectInfo(taskName, dueDdate){
        var numberOfTaskInThePage = (await this.taskInPage.count) -1
        await t.expect(this.taskInPage.nth(numberOfTaskInThePage).innerText).eql(taskName)
        await t.expect(this.taskdueDate.nth(numberOfTaskInThePage).innerText).eql(dueDdate)
    }

    async deleteAllTasks(){
        //Delete all the task using the more actions button
        var taskNumber = await this.taskInPage.count
        for(var i=0;i<taskNumber;i++)
        {
        await t
        .hover(this.taskItemsDiv.nth(0))
        .click(this.moreButton)
        .click(this.deleteTaskOption)
        .wait(1500)
        .click(this.confirmDeleteButton)
        }

    }
}

export default new inboxPage