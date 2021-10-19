import { Selector ,t} from "testcafe";

class todayPage{
    constructor(){
        this.todayView = Selector('.today_view')
        this.createNewTaskButton = Selector('.plus_add_button')
        //Add task section elements
        this.taskNameInput = Selector("[class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']")
        this.taskDescriptionInput = Selector("[class='task_editor__description_field no-focus-marker']")
        this.addTaskButton = Selector("[class='reactist_button reactist_button--primary']")
        //Task elements
        this.taskInTodayPage = Selector("[class='markdown_content task_content']")
        this.taskItemsDiv = Selector("[class='task_list_item']").child("div")
        this.moreButton = Selector("[class='task_list_item']").child("div")
        this.deleteTaskOption = Selector("[class='icon_menu_item__content']").withText('Delete task')
        //Delete modal elements
        this.confirmDeleteButton = Selector("button").withText("Delete")
    }
    
    async createNewTask(taskName,taskDescription){
        
        await t
        .click(this.createNewTaskButton)
        .typeText(this.taskNameInput, taskName, { paste: true })
        .typeText(this.taskDescriptionInput,taskDescription)
        .click(this.addTaskButton)
        .wait(3000)
        //Cancel create a new task
        if(Selector("button").withText("Cancel").visible){
            await t.click(Selector("button").withText("Cancel"))
        }
        
    }


    async deleteAllTasks(){
        //Delete all the task using the more actions button
        var taskNumber = await this.taskInTodayPage.count
        this.moreButton = this.moreButton.child("div").child(".more_actions_button") 
        for(var i=taskNumber-1;i>=0;i--)
        {
        await t
        .hover(this.taskInTodayPage.nth(i))
        .click(this.moreButton)
        .click(this.deleteTaskOption)
        .wait(1500)
        .click(this.confirmDeleteButton)
        }

    }
}

export default new todayPage