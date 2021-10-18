import { Selector ,t} from "testcafe";

class projectsSidePage{
    constructor(){
        this.addProjectButton = Selector("[data-track='navigation|projects_quick_add']")
        this.projectNameInput = Selector("#edit_project_modal_field_name")
        this.projectColorPicker = Selector("[class='color_dropdown_toggle form_field_control']")
        this.projectColorSelector = Selector("[class='color_dropdown_select__name']")
        this.addToFavorites = Selector(".reactist_switch")
        this.projectViewCheckBox = Selector("[class='edit_project_modal__view_radio_option']")
        this.addProjectSubmitButton = Selector("[class='ist_button ist_button_red']")
        this.projectsListItem = Selector("span")
    }
    async addNewProject(projectName, projectColor, projectView){
        await t
        .click(this.addProjectButton)
        .typeText(this.projectNameInput,projectName)
        .click(this.projectColorPicker)
        .click(this.projectColorSelector.withText(projectColor))
        .click(this.addToFavorites)
        .click(this.projectViewCheckBox.withText(projectView).child("span").child("button"))
        .wait(1500)
        .click(this.addProjectSubmitButton)
        await this.lookForProject(projectName)
    }
    async lookForProject(projectName){
        this.projectsListItem =this.projectsListItem.withText(projectName)
    }
}

export default new projectsSidePage