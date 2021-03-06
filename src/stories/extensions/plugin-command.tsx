import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import SvelteSummernoteLite, { createSummernoteButton, createSummernotePlugin, SummernotePlugin } from 'src/summernote/SvelteSummernoteLite';
import { SummernoteButtonProps } from 'types';


createSummernotePlugin('sample2-command', class extends SummernotePlugin {
  
  externalCommand () {
    console.log('external command is called', this.context);
  }

})


function MyButton(props: SummernoteButtonProps) {

  // call plugin command 
  return <span onClick={() => props.context.invoke('sample2.externalCommand') }>{props.title}</span>
}

export const CommandPlugin = () => {

    return (
      <div style={defaultStyle}>
        <h1>Define Custom Command</h1>
      <pre>{`
import SvelteSummernoteLite, { createSummernotePlugin } from 'src/summernote/SvelteSummernoteLite';

// plugin name : sample 
createSummernotePlugin('sample2', function (context: SummernoteContext) {
  this.externalCommand = function () {
    console.log('external command is called');
  }

})

function MyButton(props: SummernoteButtonProps) {

  // call plugin command 
  return <span onClick={() => props.context.invoke('sample2.externalCommand') }>{props.title}</span>
}

<SvelteSummernoteLite id="sample" 
  toolbar={[
    ['group', ['hello2']]
  ]}
  buttons={{
    hello2: createSummernoteButton({
      element: MyButton,
      props: {
        title: 'sample'
      },
      container: 'body',
      tooltip: 'yellow'
    })
  }}
/>

      `}</pre>
          <SvelteSummernoteLite id="sample" 
            toolbar={[
              ['group', ['hello2']]
            ]}
            buttons={{
              hello2: createSummernoteButton({
                element: MyButton,
                props: {
                  title: 'sample'
                },
                container: 'body',
                tooltip: 'yellow'
              })
            }}
          />
      </div>
    )
  }
  
  CommandPlugin.story = {
    name: 'plugin - command',
    decorators: [withKnobs],
  }
  