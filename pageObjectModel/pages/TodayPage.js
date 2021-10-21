import { Selector ,t} from "testcafe";
var casual = require('casual');

class todayPage{
    constructor(){
        this.todayView = Selector('.today_view')
    }
}

export default new todayPage