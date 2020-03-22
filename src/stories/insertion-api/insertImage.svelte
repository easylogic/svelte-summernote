<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doInsertImage () {

  if (noteInstance) {
    noteInstance.summernote('insertImage', text('image_url', 'https://summernote.org/img/img_main_picture-big.jpg'), function ($image) {
      console.log($image);
    })
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
        <h1>insertImage</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          // default insert image 
          note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg')

          // append alt text 
          note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg', 'SummernoteLog')

          // You can modify image with passing callback as second argument.
          note.summernote('insertImage', 'https://summernote.org/img/img_main_picture-big.jpg', function ($image) {
            $image.css('width', $image.width() / 3);
            $image.attr('data-filename', 'retriever');
          })
        }} />                
      `}</pre>
        <button on:click={doInsertImage}>insertImage https://summernote.org/img/img_main_picture-big.jpg </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
                        