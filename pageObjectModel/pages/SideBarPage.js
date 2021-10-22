import { Selector ,t} from "testcafe";
import {PROJECTINFO} from '../data/Constrains'

var projectRandomInfo

class sideBarPage{
    constructor(){
        //Elements in the left side bar
        this.addProjectButton = Selector("[aria-label='Add Project']")
        this.projectsListItem = Selector("span")
        this.inboxOption = Selector("#filter_inbox")

        //Elements in the Add project Modal
        this.projectNameInput = Selector("#edit_project_modal_field_name")
        this.projectColorPicker = Selector(".color_dropdown_toggle")
        this.projectColor = Selector(".color_dropdown_select__name")
        this.addToFavorites = Selector(".reactist_switch")
        this.projectViewCheckBox = Selector(".edit_project_modal__view_radio_option")
        this.addProjectSubmitButton = Selector("button").withExactText("Add")
    }
    async addNewProject(){
        //Get random information before creating a new project
        await this.getRandomInformation()
        //Creating a new project using name, color, favorite and view
        await t
        .click(this.addProjectButton)
        .typeText(this.projectNameInput,projectRandomInfo.name)
        .click(this.projectColorPicker)
        .click(this.projectColor.withText(projectRandomInfo.color))
        .click(this.addToFavorites)
        .click(this.projectViewCheckBox.withText(projectRandomInfo.view).child("span").child("button"))
        .click(this.addProjectSubmitButton)
        this.projectNameLabel =this.projectsListItem.withText(projectRandomInfo.name)
    }

    async getRandomInformation(){
          projectRandomInfo={
            //The name is a mix of a random name in the array + today's date
            name: (PROJECTINFO.name[Math.floor(Math.random() *(PROJECTINFO.name.length))]).concat(" - ").concat(new Date().toISOString().split('T')[0]),
            //The color is randomly selected from the color array 
            color: PROJECTINFO.color[Math.floor(Math.random() * (PROJECTINFO.color.length))],
            //The kind of view is randomly selected from the view array 
            view: PROJECTINFO.view[Math.floor(Math.random() * (PROJECTINFO.view.length))]
        }
    }
    

}

export default new sideBarPage