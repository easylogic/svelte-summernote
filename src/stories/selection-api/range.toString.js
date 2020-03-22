  import rangeToString from './range.toString.svelte';

  export const RangeToStringCommand = () => {
    return {
      Component: rangeToString,
    }
  }
  
  RangeToStringCommand.story = {
    name: 'range.toString()',
  }                