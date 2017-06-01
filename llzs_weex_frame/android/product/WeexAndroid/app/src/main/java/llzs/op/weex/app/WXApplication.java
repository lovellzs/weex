package llzs.op.weex.app;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;

import llzs.op.weex.adapter.ImageAdapter;

/**
 * Created by apple on 17/5/31.
 */

public class WXApplication  extends Application{

    @Override
    public void onCreate() {
        super.onCreate();

        InitConfig config=new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this,config);
    }
}
