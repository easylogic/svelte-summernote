<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
      <h1 >onImageUpload</h1>
      <div>
        Override image upload handler(default: base64 dataURL on IMG tag). You can upload image to server or AWS S3: <a href="https://github.com/summernote/summernote/issues/72">more…</a>
      </div>
      <pre>{`
        <SvelteSummernoteLite id="sample" 
          onImageUpload={(files) => {
            // upload image to server and create imgNode...
            console.log(files);
          }} />
      `}</pre>
        <SvelteSummernoteLite id="sample" 
          onImageUpload={(files) => {
            // upload image to server and create imgNode...
            console.log(files);
          }} />
  </div>               
               