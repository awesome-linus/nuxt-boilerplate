import { storiesOf } from '@storybook/vue';
import CurrentCount from '../src/components/CurrentCount/index';

storiesOf('CurrentCount', module)
  .add('should be displayed count plus 10 value', () => ({
    components: { CurrentCount },
    template: `<CurrentCount count=10 />`
  }))
  .add('should be displayed count minus 10 value', () => ({
    components: { CurrentCount },
    template: `<CurrentCount count=-10 />`
  }));
