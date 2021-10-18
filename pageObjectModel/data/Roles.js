import { Role } from "testcafe";
import { URLS , CREDENTIALS} from "./Constrains";
import loginPage from "../pages/LoginPage";

export const STANDARD_USER = Role( URLS.LOGIN_URL,async t=> {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
},{preserveUrl:true})