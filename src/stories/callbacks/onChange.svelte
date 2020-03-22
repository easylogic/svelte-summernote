<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1 >onChange(contents, $editable)</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample"  onChange={(contents, $editable) => {
          console.log('onChange:', contents, $editable);
        }}
        />
      `}</pre>
        <SvelteSummernoteLite id="sample"  onChange={(contents, $editable) => {
          console.log('onChange:', contents, $editable);
        }}
        />
  </div>               
         