package com.app.util;

import android.app.Activity;
import android.content.Context;
import android.util.DisplayMetrics;

public class BaseUtils {

    // 获取屏幕宽高
    public static void getScreenSize(Activity context) {
        DisplayMetrics dm = new DisplayMetrics();
        context.getWindowManager().getDefaultDisplay().getMetrics(dm);
//        BaseConstants.SCREEN_WIDTH = dm.widthPixels;
//        BaseConstants.SCREEN_HEIGHT = dm.heightPixels;
    }
}
