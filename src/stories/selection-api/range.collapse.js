  import rangeCollapse from './range.collapse.svelte';

  export const RangeCollapseCommand = () => {
    return {
      Component: rangeCollapse,
    }
  }
  
  RangeCollapseCommand.story = {
    name: 'range.collapse()',
  }                