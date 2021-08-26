import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  emits: ['update:count'],

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    countHandler() {
      this.$emit('update:count', 1 + this.count);
    },
  },

  template: `<button type="button" @click='countHandler'>{{ count }}</button>`,
});
