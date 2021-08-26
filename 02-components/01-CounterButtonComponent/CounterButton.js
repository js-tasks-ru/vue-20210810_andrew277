import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  emits: ['update:count'],

  props: {
    count: Number,
  },

  methods: {
    countHandler() {
      this.$emit('update:count', 1 + (this.count || 0));
    },
  },

  template: `<button type="button" @click='countHandler'>{{ count || 0 }}</button>`,
});
