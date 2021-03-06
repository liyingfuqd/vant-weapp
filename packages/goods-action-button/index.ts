import { link } from '../mixins/link';
import { VantComponent } from '../common/component';

VantComponent({
  mixins: [link],

  props: {
    text: String,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      value: 'danger'
    }
  },

  methods: {
    onClick(event: Weapp.Event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});
