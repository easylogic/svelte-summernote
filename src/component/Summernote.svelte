<script>
import { onMount, onDestroy } from 'svelte';
import jQuery from 'jquery';

export let id; 
export let value; 

onMount(() => {

    const {id, value, ...props} = $$props

    jQuery(`#${id}`).summernote({
        ...props
    });
})

onDestroy(() => {
    jQuery(`#${id}`).summernote('destroy');
})

</script>

<div class="svelte-summernote">
    <div {id} class="svelte-summernote-container">{value || ''}</div>
</div>