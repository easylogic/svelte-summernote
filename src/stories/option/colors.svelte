<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'


let colors = ['red', 'back']
let colorsName = ['red', 'back']
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
<div class="container">
    <h1>colors, colorsName</h1>

<pre>

  import SvelteSummernoteLite from '@easylogic/svelte-summernote';
  import '@easylogic/svelte-summernote/summernote-lite.css';

  &lt;SvelteSummernoteLite id="lite" colors={`{['red', 'black']}`} colorsName={`{['red', 'black']}`}/>

</pre>

    <SvelteSummernoteLite id="sample" {colors} {colorsName} />

</div>