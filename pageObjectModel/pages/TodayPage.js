import { Selector} from "testcafe";


class todayPage{
    constructor(){
        this.todayView = Selector('.today_view')
    }
}

export default new todayPage