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