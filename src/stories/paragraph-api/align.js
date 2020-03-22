import align from './align.svelte';

export const AlignCommand = () => {
  return {
    Component: align,
  }
}

AlignCommand.story = {
  name: 'left, right and more',
}        