import { Selector ,t} from "testcafe";

class todayPage{
    constructor(){
        this.createNewTaskButton = Selector('.plus_add_button')
        this.taskNameInput = Selector("[class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']")
        this.taskDescriptionInput = Selector("[class='task_editor__description_field no-focus-marker']")
        this.addTaskButton = Selector("[class='reactist_button reactist_button--primary']")
        this.taskInTodayPage = Selector('.task_list_item__content')
        this.taskContentLabel = Selector("[class='markdown_content task_content']")
        this.moreActionsButton = Selector("[class='item_action item_actions_more']")
        this.deleteTaskOption = Selector("[class='icon_menu_item__content']").withText('Delete task')
    }
    async createNewTask(taskName,taskDescription){
        await t
        .click(this.createNewTaskButton)
        .typeText(this.taskNameInput,taskName)
        .typeText(this.taskDescriptionInput,taskDescription)
        //.click(this.addTaskButton)
        //this.findATaskUsingTaskContent(taskName)
        //this.deleteTaskOption(taskName)
    }
    async findATaskUsingTaskContent(taskName){
        this.taskContentLabel = this.taskContentLabel.withText(taskName)
    }
    async deleteATaskUsingTaskContent(taskName){
        findATaskUsingTaskContent(taskName)
        await t
        .click(this.taskContentLabel)
        .click(this.moreActionsButton)
        .click(this.deleteTaskOption)

    }
}

export default new todayPage