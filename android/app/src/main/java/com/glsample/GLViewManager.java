package com.glsample;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

@ReactModule(name = GLViewManager.REACT_CLASS)
public class GLViewManager extends SimpleViewManager<GLView> {
    protected static final String REACT_CLASS = "RCTGLView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected GLView createViewInstance(ThemedReactContext reactContext) {
        return new GLView(reactContext);
    }
}
