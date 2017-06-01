
/**
 *url上加参数  支持中文
 * @param url
 * @param obj
 * @returns {string}
 */
function getUrlJoinParams(url, obj) {
    var result = url + '?';
    for (var p in obj) {
        if (typeof ( obj[p]) == 'function') {
            continue;
        } else {
            result += encodeURI(p) + '=' + encodeURI(obj[p]) + '&';
        }
    }
    result = result.substring(0, result.length - 1);
    return result;
};

/**
 *从url解析出参数，返回的是一个对象,支持中文
 * @param url
 * @returns {{}}
 */
function parseUrlParams(url) {
    var paramters = {};
    var start = url.indexOf('?');//找到第一个？的位置
    if (start >= 0) {
        url = url.substring(start + 1); //去掉？
    }
    var paramterStr = url.split("&"); //字符分割

    paramterStr.forEach(function (item, index) {
        var obj = item.split('=');
        if (obj.length == 2) {

            paramters[decodeURI(obj[0])] = decodeURI(obj[1]);
        }
    });

    return paramters;
};

function isNull(p) {
    if (!p || p === undefined || p === '' || p === [] || p === {} || p === 0 || p === NaN || p == 'null' || p == '0') {
        return true;
    }
    return false;
};


/**
 * 判断字符串全是数字
 * @param str
 * @returns {boolean}
 */
function isNumber(str) {
    if (str == undefined || !str) {
        return false;
    }
    var re = new RegExp("^\\d+$");
    return re.test(str);


};

/**
 * 判断是不是手机号
 * @param str
 * @returns {boolean}
 */
function isPhoneNumber(str) {
    if (str == undefined || !str) {
        return false;
    }
    var re = new RegExp("^\\d{11}$");
    return re.test(str);
};

/**
 * 是不是数字验证码 可以指定验证码的位数，默认是4
 * @param auth_code
 * @param num 验证码位数，默认是4 可以不传
 */
function isAuthCode(auth_code, num) {
    if (num == undefined) {
        num = 4;
    }
    var re = new RegExp("^\\d{" + num + "}$");
    return re.test(auth_code);
};
/**
 * {a:1,c:2,b:3} => a=1&c=2&b=3
 * 对象转string objectToString(obj,[separator]) ;//separator默认是& 分隔符
 * @param obj
 * @returns {string}
 */
function objectToString(obj) {
    var separator = arguments[1] || '&';
    var result = '';
    for (var p in obj) {
        if (typeof ( obj[p]) == 'function') {
            continue;
        } else {
            result += p + '=' + obj[p] + separator;
        }
    }
    result = result.substring(0, result.length - 1);
    return result;
};

/**
 *  a=1&c=2&b=3 =>{a:1,c:2,b:3}
 * @param str
 * @returns {{}}
 */
function stringToObject(str) {
    var paramters = {};
    var separator = arguments[1] || '&';
    var paramterStr = str.split(separator); //字符分割

    paramterStr.forEach(function (item, index) {
        var obj = item.split('=');
        if (obj.length == 2) {
            paramters[obj[0]] = obj[1];
        }
    });

    return paramters;
};

function navConvert(vm,iosH,androidH) {
    var config = vm.$getConfig();
    var env = config.env;
    if (env.platform == 'iOS') {
        var scale = env.scale;
        var deviceWidth = env.deviceWidth / scale;
        return iosH * 750.0 / deviceWidth;
    } else {
        return androidH;
    }
}

//针对ios 状态栏高度
function statusBarHeight(vm) {
   return navConvert(vm, 20, 0);
};
//导航栏 除了状态栏的高度
function navbarHeight(vm,androidH = 88) {
  return navConvert(vm, 44, androidH);
}

//导航栏总高度
function navHeight(vm,androidH) {
   return navConvert(vm, 64, androidH);
}
//判断设备系统是否为IOS
function isIOS() {
    return weex.config.env ? weex.config.env.platform === 'iOS' : false
}
//返回格式化后的时间,月日时分秒
function  getFormatTime(created_at) {

    var longtime = created_at*1000;
    var date = new Date(longtime);
    var month = date.getMonth()+1+"月";
    var day = date.getDate()+'日';
    var min = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()
    var second = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
    return month+day+date.getHours()+':'+min+':'+second;

}


export  {getUrlJoinParams, parseUrlParams, isNull, isNumber,isIOS,getFormatTime,
    isAuthCode, isPhoneNumber, objectToString, stringToObject, statusBarHeight, navbarHeight,navHeight};