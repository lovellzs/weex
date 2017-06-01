/**
 * Created by apple on 2017/3/30.
 */

import appConfig from 'utils/AppConfig'
import weexModule from 'utils/WeexModules'
import {isNull} from 'utils/Utils'

class Start {

    //固定的数据
    getBgImage() {
        return 'http://192.168.39.155:8081/hybird/image/start.png';
        // return appConfig.getImagesAddress()+'start.png';
    }
}

export default new Start();