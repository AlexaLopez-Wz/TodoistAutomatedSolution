import { Selector ,t} from "testcafe";

class sideBarPage{
    constructor(){
        //Elements in the left side bar
        this.addProjectButton = Selector("[data-track='navigation|projects_quick_add']")
        this.projectsListItem = Selector("span")

        //Elements in the Add project Modal
        this.projectNameInput = Selector("#edit_project_modal_field_name")
        this.projectColorPicker = Selector("[class='color_dropdown_toggle form_field_control']")
        this.projectColorSelector = Selector("[class='color_dropdown_select__name']")
        this.addToFavorites = Selector(".reactist_switch")
        this.projectViewCheckBox = Selector("[class='edit_project_modal__view_radio_option']")
        this.addProjectSubmitButton = Selector("[class='ist_button ist_button_red']")
    }
    async addNewProject(projectName, projectColor, projectView){
        //Creating a new project using name, color, favorite and view
        await t
        .click(this.addProjectButton)
        .typeText(this.projectNameInput,projectName)
        .click(this.projectColorPicker)
        .click(this.projectColorSelector.withText(projectColor))
        .click(this.addToFavorites)
        .click(this.projectViewCheckBox.withText(projectView).child("span").child("button"))
        .wait(1500)
        .click(this.addProjectSubmitButton)
        .wait(1500)
        await this.lookForProject(projectName)
    }
    async lookForProject(projectName){
        //Search the project name in the list of proyects in the left side panel
        this.projectsListItem =this.projectsListItem.withText(projectName)
    }
    async getRandomInformation (projectInfo){
        const randomInfo={
            //The name is a mix of a random name in the array + today's date
            name: (projectInfo.name[Math.floor(Math.random() *(projectInfo.name.length))]).concat("-").concat(new Date().toISOString().split('T')[0]),
            //The color is randomly selected from the color array 
            color: projectInfo.color[Math.floor(Math.random() * (projectInfo.color.length))],
            //The kind of view is randomly selected from the view array 
            view: projectInfo.view[Math.floor(Math.random() * (projectInfo.view.length))]
        }
        return randomInfo
    }
}

export default new sideBarPage