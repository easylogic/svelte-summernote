import insertNode from './insertNode.svelte';

export const InsertNodeCommand = () => {
  return {
    Component: insertNode,
  }
}

InsertNodeCommand.story = {
  name: 'insertNode',
}            