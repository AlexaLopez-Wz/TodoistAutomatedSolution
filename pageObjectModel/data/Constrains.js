import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL:`https://todoist.com/Users/showLogin`
}

export const CREDENTIALS = { 
STANDARD_USER: {
    EMAIL: process.env.STANDARD_USER_EMAIL,
    PASSWORD:  process.env.STANDARD_USER_PASSWORD
}
}

export const  PROJECTINFO = {
    name :["Work", "Shop list", "To do - Urgent"],
    color :["Blue", "Grape", "Red","Green"],
    view : ["List", "Board"]
}

export const TASKDUEDATE ={
    today: "Today",
    tomorrow : "Tomorrow"
}

export const TASKNUMBER ={
    singleTask : 1,
    tenTasks : 10
}