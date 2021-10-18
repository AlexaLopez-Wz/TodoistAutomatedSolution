import { Selector, t} from "testcafe";

class mainPage{
    constructor(){
        this.todayView = Selector('.today_view')
    }
}
export default new mainPage