package com.glsample;

import android.content.Context;
import android.opengl.GLSurfaceView;
import android.util.AttributeSet;

public class GLView extends GLSurfaceView {
    private final GLRenderer mRenderer;

    public GLView(Context context) {
        this(context, null);
    }

    public GLView(final Context context, AttributeSet attrs) {
        super(context, attrs);

        // Create an OpenGL ES 2.0 context
        setEGLContextClientVersion(2);

        // Log GL errors.
        // setDebugFlags(DEBUG_CHECK_GL_ERROR);
        // Specify stencil buffer.
        // setEGLConfigChooser(8, 8, 8, 8, 16, 8);

        mRenderer = new GLRenderer();
        // Set the Renderer for drawing on the GLSurfaceView
        setRenderer(mRenderer);

        // Render the view only when there is a change in the drawing data
        setRenderMode(GLSurfaceView.RENDERMODE_WHEN_DIRTY);
    }
}
