
 class AppConfig {
    getApiServerAddress() {
        return 'http://test.dasda.cn';
    }

    getImagesAddress() {
        return 'image://';
    }

    getJsServerAddress() {
        return 'js://';
    }
}

export default new AppConfig();