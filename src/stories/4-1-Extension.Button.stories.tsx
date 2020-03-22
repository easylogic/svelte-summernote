import SvelteSummernoteLite from 'src/summernote/SvelteSummernoteLite';
import { withKnobs } from "@storybook/addon-knobs";

export { NativeButtonExtension } from './extensions/native-button';
export { ButtonExtension } from './extensions/button';

export default {
  title: 'Extension/Button',
  component: SvelteSummernoteLite,
  decorators: [withKnobs] // 애드온 적용
};
