import { Role, t } from "testcafe";
import { URLS , CREDENTIALS} from "./Constrains";
import loginPage from "../pages/LoginPage";
import todayPage from "../pages/TodayPage"

export const STANDARD_USER = Role( URLS.LOGIN_URL,async () => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL,CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(todayPage.todayView.visible).ok()
},{preserveUrl:true})