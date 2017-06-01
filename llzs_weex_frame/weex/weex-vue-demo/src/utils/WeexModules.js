
import {parseUrlParams, getUrlJoinParams, objectToString, isNull} from './Utils';
import app from 'utils/AppConfig';

var modal = weex.requireModule('modal');
var event = weex.requireModule('event');
var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
var photograph = weex.requireModule('PhotographModule');
// var global_event = weex.requireModule('globalEvent');

function streamRequest(url, method, body) {
    console.log('cody:streamRequest');
    if (isNull(body)){
        body = '';
    }
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: method,
            url: url,
            body:body,
            type: 'json'
        }, res => {
            // console.log('cody:streamRequest return'+JSON.stringify(res));
            if (res.ok) {
                resolve(res.data)
            } else {
                resolve(-1)
            }
        }, progress => {
        })
    });
}

 class WeexModules {

    constructor() {
        this.tag = 'cody';
        this._vue = null;
        this._env = null;
        this._bundleUrl = null;


        this.lingDangIsMoved1 = false;
        this.lingDangIsMoved2 = false;
        this.lastTimer1 = null;
        this.lastTimer2 = null;

    }



    log(msg) {
        if (typeof msg === 'object') {
            console.log(this.tag + ":" + JSON.stringify(msg));

        } else {
            console.log(this.tag + ':' + msg);
        }
    }

    toast(msg, duration = 1) {
        if (typeof msg === 'object') {
            msg = JSON.stringify(msg);
        }
        modal.toast({message: msg, duration: duration});
    }


    confirm(message,okTitle,cancelTitle){
        return new Promise((resolve, reject) => {
            modal.confirm({
                'message':message,
                'okTitle':okTitle,
                'cancelTitle':cancelTitle
            },function (e) {
                if (String(e)===okTitle){
                    resolve();
                }
                else if (String(e)===cancelTitle){

                }
            });
        })
    }

     //================================
     setVue(vue) {
         if (!isNull(vue)) {
             this._vue = vue;
             this._env = vue.$getConfig().env;
             this._bundleUrl = vue.$getConfig().bundleUrl;
         }
     }
    /**
     * @returns {null | android |iOS}
     */
    getPlatform() {
        if (!this._env) {
            return null;
        }
        return this._env.platform;
    }


    getParams() {
        if (this._bundleUrl) {
            return parseUrlParams(this._bundleUrl);
        }
        return null;
    }
//================================
    /**
     * 设置临时数据
     * @param key
     * @param json
     */
    setTempData(key, json) {
        if (isNull(json)) {
            return;
        }
        event.storeTempData(key, json);
    };

    /**
     * 获取临时数据，常用于js 页面跳转 getTempData(key).then(function(json){})
     * @param key
     * @param json
     */
    getTempData(key) {

        return new Promise((resolve, reject)=>{
            if (isNull(key)) {
                resolve(null);
                return;
            }
            event.fetchTempData(key, function (json) {
                resolve(json);
            });
        });

    };

    //*************永久存放数据 start
    /**
     * 单个数据存放 数据可以使字符串或json对象，数组
     * @param key 字符串
     * @param value 字符串或json对象
     * @returns {Promise}
     */
    setItem(key, value){
        return new Promise((resolve, reject) => {
            if (isNull(key) || isNull(value)) {
                resolve(null);
                return;
            }
            storage.setItem(key, value, function (e) {
                if (e.result == 'success') {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        })
    }

    /**
     * 获取存放的数据
     * @param key
     * @returns {Promise}
     */
    getItem(key) {
        return new Promise((resolve, reject) => {
            if (isNull(key)) {
                resolve(null);
            } else {
                storage.getItem(key, function (e) {
                    if (e.result == 'success') {
                        resolve(e.data);
                    } else {
                        resolve(null);
                    }
                });
            }
        });
    }



    /**
     * 移除数据
     * @param key
     * @returns {Promise}
     */
    removeItem(key) {
        return new Promise((resolve, reject) => {
            if (isNull(key)) {
                resolve(false);
            } else {
                storage.removeItem(key, function (e) {
                    if (e.result == 'success') {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            }
        });
    }

    /**
     * 获取本地有多少条数据
     * @returns {Promise}
     */
    storageLength() {
        return new Promise((resolve, reject) => {
            storage.length(function (e) {
                if (e.result == 'success') {
                    resolve(e.data);
                } else {
                    resolve(0);
                }
            })
        })
    }

    getAllKeys(){
        return new Promise((resolve, reject) => {
            storage.getAllKeys(function (e) {
                if (e.result == 'success') {
                    resolve(e.data);
                } else {
                    resolve(null);
                }
            })
        })
    }
    //*************永久存放数据 end

    /**
     * 跳转页面
     * @param url
     * @param backto
     */
    gotoPage(url, backto = null, param=null) {

        if (!isNull(param)) {
            url = getUrlJoinParams(url, param);
        }
        event.openURLBack(url, backto);
    }

    openURLClosePage(url){
        event.openURLClose(url, null, null, null, true);
    }

    //关闭当前页面
    closePage() {
        event.openURLBack(null, null);
    }

    /**
     * 打卡app内置的功能或者内置协议 openAppFunction(url, param).then(function(json){})
     * @param url
     * @param backTo
     * @param param
     * @param callback
     */
    openAppFunction(url, param=null) {
        return new Promise((resolve, reject) =>{
            event.openURLCallback(url, null, param, json=>{
                resolve(json);
            });
        });

    }

    /**
     *  更新sid updateSid(sid).then(function(json){})
     * @param sid
     */
    updateSid(sid) {
        return new Promise((resolve, reject) =>{
            if (isNull(sid)) {
                resolve(null);
                return;
            }
            event.sid(sid, function (json) {
                resolve(json);
            });
        });


    };


    /**
     *  上传照片 upPhoto().then(function(avatar_url){})
     * @param 么有参数
     */
    upPhoto(){
        return new Promise((resolve, reject)=>{
            photograph.takePicture(avatar_url =>{
                resolve(avatar_url);
            });
        });
    }

     /**
      * 使用方式 httpGet(url,param).then(function(response){})
      * @param url
      * @param parameters
      * @returns {Promise}
      */
    httpGet(url, parameters) {
        url = getUrlJoinParams(url, parameters);
        console.log('cody:httpGet');
        return streamRequest(url, 'GET', null);
    };


    /**
     * 使用方式 httpPost(url,param).then(function(response){})
     * @param url
     * @param parameters
     * @returns {Promise}
     */
    httpPost(url, parameters) {
        var body = objectToString(parameters);
        return streamRequest(url, 'POST', body);

    };

    /**
     * 使用方式 httpPut(url,param).then(function(response){})
     * @param url
     * @param parameters
     * @returns {Promise}
     */
    httpPut(url, parameters) {
        var body = objectToString(parameters);
        return streamRequest(url, 'PUT', body);
    };

    /**
     * 使用方式 httpDelete(url).then(function(response){})
     * @param url
     * @param parameters
     * @returns {Promise}
     */
    httpDelete(url){
        return streamRequest(url, 'DELETE', null);
    }

    //空 返回true
    isBlank(value) {
        return isNull(value);
    }
    //值是不为空
    isPresent(value) {
        return !isNull(value);
    }

    getRefreshGifPic(){
       return app.getImagesAddress()+'header_anime.gif';
    }
}

export default new WeexModules();