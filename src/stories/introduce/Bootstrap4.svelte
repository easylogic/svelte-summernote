<style>
    .container {
        padding: 20px 40px;
    }
</style>
<div class="container">
    <h1>Getting Started</h1>

Svelte Extenstion for summernote (with all features)

    <h1>Install</h1>

add to your project 

    <h2>For lite version</h2>
`npm install jquery @easylogic/svelte-summernote`

    <h2>For bootstrap4 version</h2>

`npm install jquery bootstrap @easylogic/svelte-summernote `

<h2>Use</h2>

<h3>SvelteSummernoteLite</h3>

<pre>

&lt;script>
import 'jquery'
import SvelteSummernoteLite from '@easylogic/svelte-summernote'
import '@easylogic/svelte-summernote/index.css'
&lt;/script>


&lt;SvelteSummernoteLite 
    id="sample" 
    initInvoke={invoke => {
        invoke('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
    }} 
/>
</pre>

<h3>SvelteSummernoteBS4</h3>

<pre>

&lt;script>
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/bootstrap.css'
import SvelteSummernoteBS4 from '@easylogic/svelte-summernote/summernote-bs4'
import '@easylogic/svelte-summernote/summernote-bs4.css'
&lt;/script>


&lt;SvelteSummernoteBS4 
    id="sample" 
    initInvoke={invoke => {
        invoke('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
    }} 
/>
</pre>

</div>