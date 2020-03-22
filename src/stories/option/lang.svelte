<script>
import '@easylogic/jquery-globals'
import 'summernote/dist/lang/summernote-ko-KR';
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>lineHeights</h1>
        <p>You can override the default list and specify a custom one.</p>
      <pre>{`
  import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite';
  import '@easylogic/jquery-globals'
  import 'summernote/dist/lang/summernote-ko-KR';
  
  <SvelteSummernoteLite id="sample" lang="ko-KR" />
      `}</pre>

    <SvelteSummernoteLite id="sample" lang="ko-KR" />
  </div>       