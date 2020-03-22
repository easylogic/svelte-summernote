<script>
import jQuery from 'jquery'
import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite.svelte'
</script>

<style>
    .container {
        padding: 20px 40px;
    }
</style>
 <div class="container">
      <h1>hint</h1>
      <p>
          Summernote supports autocomplete features, hint to help typing. You can define custom hints with options. Hint options can be an object or array for multiple hints.
      </p>
      <table className="table" border="1"> 
        <thead>
          <tr>
            <th>Key</th>
            <th style={{ width: '200px'}}>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>match</td>
            <td>RegExp <code>required</code></td>
            <td>Regular expression for checking trigger pattern.</td>
          </tr>
          <tr>
            <td>search</td>
            <td>Function <code>required</code></td>
            <td>Handler for matched keyword. You can passed suggestion items with callback. First argument is keyword and second is callback.</td>
          </tr>
          <tr>
            <td>template</td>
            <td>Function <code>optional</code></td>
            <td>Item template on suggestion popover. This function get item as argument and should return String type.</td>
          </tr>      
          <tr>
            <td>content</td>
            <td>Function <code>optional</code></td>
            <td>Template function for insertion. You can switch item with node for insertion with this function. This function get item as first argument and should return Element or String.</td>
          </tr>      
        </tbody>
      </table>
      <pre>{`
      <SvelteSummernoteLite 
        id="sample" 
        hint={{
          words: ['apple', 'orange', 'watermelon', 'lemon'],
          match: /\b(\w{1,})$/,
          search: function (keyword, callback) {
            callback($.grep(this.words, function (item) {
              return item.indexOf(keyword) === 0;
            }));
          }
        }} 
        value="sample text" 
        placeholder="type with apple, orange, watermelon, lemon" 
      />
      `}</pre>
      <SvelteSummernoteLite 
        id="sample" 
        hint={{
          words: ['apple', 'orange', 'watermelon', 'lemon'],
          match: /\b(\w{1,})$/,
          search: function (keyword, callback) {
            callback(jQuery.grep(this.words, function (item) {
              return item.indexOf(keyword) === 0;
            }));
          }
        }} 
        value="sample text" 
        placeholder="type with apple, orange, watermelon, lemon" 
      />
  </div>         