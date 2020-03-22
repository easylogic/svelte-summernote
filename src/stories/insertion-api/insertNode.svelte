<script>
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'

let noteInstance = null; 
function doInsertNode () {
  if (noteInstance) {
    const div = document.createElement('div')
    div.innerHTML = `<span>Hello, World</span>`
    noteInstance.summernote('insertNode', div)
  }

}

</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
 <h1>insertNode</h1>
      <pre>{`
        <SvelteSummernoteLite id="sample" onInit={({ note } ) => {
          const div = document.createElement('div')
          div.innerHTML = \`<span>Hello, World</span>\`
          note.summernote('insertNode', div)
        }} />                
      `}</pre>
        <button on:click={doInsertNode}>insertNode Hello, World </button>
        <SvelteSummernoteLite id="sample" onInit={({ note }) => {
            noteInstance = note
        }} />
  </div>               
                           