import rangeSelect from './range.select.svelte';

export const RangeSelectCommand = () => {
  return {
    Component: rangeSelect,
  }
}

RangeSelectCommand.story = {
  name: 'range.select()',
}              