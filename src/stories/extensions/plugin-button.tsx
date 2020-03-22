import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import SvelteSummernoteLite, { createSummernoteButton, createSummernotePlugin, SummernotePlugin } from 'src/summernote/SvelteSummernoteLite';
import { SummernoteContext } from 'types';


createSummernotePlugin('sample3-button', class extends SummernotePlugin {
  constructor (context: SummernoteContext, $: JQueryStatic) {
    super(context, $);

    // button name: 'hello' 
    context.memo('button.hello3', createSummernoteButton({
      title:'hello',
      onClick: () => {
        context.invoke('insertText', 'hello'); // custom command call 
      }
    }))
  }
})

export const ButtonPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Define a button in plugin</h1>
      <pre>{`
import SvelteSummernoteLite, { createSummernoteButton, createSummernotePlugin } from 'src/summernote/SvelteSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample', function (context: SummernoteContext) {
  // button create 
  context.memo('button.hello', createSummernoteButton({
    title:'hello',
    onClick: () => {
      context.invoke('insertText', 'hello'); // custom command call 
    }
  }))
})

<SvelteSummernoteLite id="sample" 
  toolbar={[
    ['group', ['hello']]
  ]}
/>

      `}</pre>
          <SvelteSummernoteLite id="sample" 
            toolbar={[
              ['group', ['hello3']]
            ]}
          />
      </div>
    )
  }
  
  ButtonPlugin.story = {
    name: 'plugin - custom button',
    decorators: [withKnobs],
  }
  