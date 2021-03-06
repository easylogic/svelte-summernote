import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import SvelteSummernoteLite, { createSummernotePlugin, SummernotePlugin } from 'src/summernote/SvelteSummernoteLite';

createSummernotePlugin('sample-destroy', class extends SummernotePlugin {
  destroy() {
    console.log('summernote is destroyed ', this.context.options);
  }
})

export const DestoryPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Destory Plugin</h1>
      <pre>{`
import SvelteSummernoteLite, { createSummernotePlugin } from 'src/summernote/SvelteSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {

  this.destroy = function () {
    console.log('summernote is destroyed ');
  }

})

<SvelteSummernoteLite id="sample" />

      `}</pre>
          <SvelteSummernoteLite id="sample" />
      </div>
    )
  }
  
  DestoryPlugin.story = {
    name: 'plugin - destroy',
    decorators: [withKnobs],
  }
  