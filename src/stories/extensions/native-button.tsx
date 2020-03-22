import React from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite';

export const NativeButtonExtension = () => {
    return (
      <div style={defaultStyle}>
        <h1>Define Native button</h1>
      <pre>{`
        import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite';

        <SvelteSummernoteLite id="sample" 
          toolbar={[
            ['group', ['default']]
          ]}
          buttons={{
            default: createSummernoteButton({
              title: 'default button',
              onClick: (context: any) => {
                context.invoke('insertText', 'default');
              }
            })
          }}  
        />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
            toolbar={[
              ['group', ['default']]
            ]}
            buttons={{
              default: createSummernoteButton({
                title: 'default button',
                onClick: (context: any) => {
                  context.invoke('insertText', 'default');
                }
              })
            }}  
          />
      </div>
    )
  }
  
  NativeButtonExtension.story = {
    name: 'native button',
    decorators: [withKnobs],
  }
  