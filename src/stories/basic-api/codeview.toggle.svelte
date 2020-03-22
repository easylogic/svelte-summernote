<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>codeview.toggle</h1>
        <p>You can toggle editable/codable view by API.</p>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
          note.summernote('codeview.toggle');
        }} />
      `}</pre>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
          note.summernote('codeview.toggle');
        }} />
  </div>       