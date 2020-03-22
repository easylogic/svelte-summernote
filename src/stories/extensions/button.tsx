import React, { useState, useEffect } from 'react'; 
import { withKnobs } from "@storybook/addon-knobs"
import { defaultStyle } from "../util"
import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite';
import { SummernoteButtonProps } from 'types';

function MyButton(props: SummernoteButtonProps) {

  const [value, setValue] = useState('my button');
  const div = document.createElement('div');

  function handleChangeValue (_: any, content: string) {
    div.innerHTML = content;
    setValue(div.textContent);
  }

  useEffect(() => {
    props.context.$note.on('summernote.change', handleChangeValue) 
    return () => {
      props.context.$note.off('summernote.change', handleChangeValue) 
    }
  }, [])

return <span onClick={() => alert('aa')}>{value} - {props.title}</span>
}

export const ButtonExtension = () => {
    return (
      <div style={defaultStyle}>
        <h1>Define React Button</h1>
      <pre>{`
        import SvelteSummernoteLite, { createSummernoteButton } from 'src/summernote/SvelteSummernoteLite';

                
        function MyButton(props: SummernoteButtonProps) {

          const [value, setValue] = useState('my button');
          const div = document.createElement('div');

          function handleChangeValue (_: any, content: string) {
            div.innerHTML = content;
            setValue(div.textContent);
          }

          useEffect(() => {
            props.context.$note.on('summernote.change', handleChangeValue) 
            return () => {
              props.context.$note.off('summernote.change', handleChangeValue) 
            }
          }, [])

          return <span onClick={() => alert('aa')}>{value} - {props.title}</span>
        }

        <SvelteSummernoteLite id="sample" 
            toolbar={[
              ['group', ['hello']]
            ]}
            buttons={{
              hello: createSummernoteButton({
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
              ['group', ['hello']]
            ]}
            buttons={{
              hello: createSummernoteButton({
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
  
  ButtonExtension.story = {
    name: 'react button',
    decorators: [withKnobs],
  }
  