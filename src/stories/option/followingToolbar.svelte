<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>Following Toolbar</h1>
      <pre>{`
  <SvelteSummernoteLite id="sample2" followingToolbar={true} />
      `}</pre>
  <SvelteSummernoteLite id="sample2" followingToolbar={true} />
</div>    