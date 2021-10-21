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
        this.moreButton = Selector(".task_list_item").child("div")
        this.deleteTaskOption = Selector(".icon_menu_item__content").withText('Delete task')
        this.taskdueDate = Selector(".date")

        //Delete modal elements
        this.confirmDeleteButton = Selector("button").withText("Delete")
    }
    
    async createNewTask(taskName,taskDescription,dueDdate){
        await t
        .click(this.createNewTaskButton)
        .typeText(this.taskNameInput, taskName, { paste: true })
        .typeText(this.taskDescriptionInput,taskDescription)
        .click(this.dueTimeSelector)
        .typeText(this.dueTimeInput,dueDdate)
        .pressKey('enter')
        .click(this.addTaskButton)       
    }

    async createSeveralDynamicTasks(taskNumber){
        for(var i=0;i<=taskNumber-1;i++){
            if(i<1){
                await t.click(this.createNewTaskButton)
            }
        await t
        .typeText(this.taskNameInput, casual.title, { paste: true })
        .typeText(this.taskDescriptionInput,casual.description)
        .click(this.addTaskButton)
        }
    }

    async deleteAllTasks(){
        //Delete all the task using the more actions button
        var taskNumber = await this.taskInPage.count
        this.moreButton = this.moreButton.child("div").child(".more_actions_button") 
        for(var i=taskNumber-1;i>=0;i--)
        {
        await t
        .hover(this.taskItemsDiv.nth(i))
        .click(this.moreButton)
        .click(this.deleteTaskOption)
        .wait(1500)
        .click(this.confirmDeleteButton)
        }

    }
}

export default new inboxPage