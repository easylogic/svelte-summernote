import createRange from './createRange.svelte';

export const CreateRangeCommand = () => {
    return {
      Component: createRange,
    }
  }
  
  CreateRangeCommand.story = {
    name: 'createRange',
  }