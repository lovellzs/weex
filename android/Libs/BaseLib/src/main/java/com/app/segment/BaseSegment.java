package com.app.segment;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;

/**
 * Created by lovellzs on 17/6/2.
 */

public abstract class BaseSegment extends ViewGroup {

    public BaseSegment(Context context) {
        super(context);
    }

    public BaseSegment(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public BaseSegment(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }




    @Override
    protected void onLayout(boolean changed, int l, int t, int r, int b) {
        // 记录总高度
        int mTotalHeight = 0;
        // 遍历所有子视图
        int childCount = getChildCount();
        for (int i = 0; i < childCount; i++) {
            View childView = getChildAt(i);

            // 获取在onMeasure中计算的视图尺寸
            int measureHeight = childView.getMeasuredHeight();
            int measuredWidth = childView.getMeasuredWidth();

            childView.layout(l, mTotalHeight, measuredWidth, mTotalHeight
                    + measureHeight);

            mTotalHeight += measureHeight;
        }
    }
}
