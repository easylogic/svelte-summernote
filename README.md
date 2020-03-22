# svelte-summernote
Svelte extension for summernote

This library support all summernote features. 


# install 
```
npm install @easylogic/svelte-summernote 
```

# Getting Started 

```js
import 'jquery'
import SvelteSummernoteLite from '@easylogic/svelte-summernote'
import '@easylogic/svelte-summernote/index.css'

const EditorComponent = () => {
  return <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          note.summernote('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
        }} />
}

export default EditorComponent
```


# Support Internalization

```js
import 'jquery'
import '@easylogic/jquery-globals'
import SvelteSummernoteLite from '@easylogic/svelte-summernote'
import '@easylogic/svelte-summernote/index.css'
import '@easylogic/svelte-summernote/dist/lang/summernote-ko-KR'

const EditorComponent = () => {
  return <SvelteSummernoteLite id="sample" lang='ko-KR' />
}

export default EditorComponent
```






# development 

```
npm install
npm run dev 
```

# build 

```
npm install
npm run build
```

# storybook 

```
npm install
npm run storybook
```
