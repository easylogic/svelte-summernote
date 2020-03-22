  import insertOrderedList from './insertOrderedList.svelte';

  export const InsertOrderedListCommand = () => {
    return {
      Component: insertOrderedList,
    }
  }
  
  InsertOrderedListCommand.story = {
    name: 'insertOrderedList',
  }              