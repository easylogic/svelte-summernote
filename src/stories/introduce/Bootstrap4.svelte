<style>
    .container {
        padding: 20px 40px;
    }
</style>
<div class="container">

<h3>SvelteSummernoteBS4</h3>

<pre>{`

<script>
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/bootstrap.css'
import SvelteSummernoteBS4 from '@easylogic/svelte-summernote/summernote-bs4'
import '@easylogic/svelte-summernote/summernote-bs4.css'
</script>


<SvelteSummernoteBS4 
    id="sample" 
    initInvoke={invoke => {
        invoke('pasteHTML', '<span style="font-size:30px">Hello, world for 30px</span>')
    }} 
/>
`}
</pre>

</div>