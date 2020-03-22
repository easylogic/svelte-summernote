import rangeInsertNode from './range.insertNode.svelte';

export const RangeInsertNodeCommand = () => {
  return {
    Component: rangeInsertNode,
  }
}

RangeInsertNodeCommand.story = {
  name: 'range.insertNode()',
}                