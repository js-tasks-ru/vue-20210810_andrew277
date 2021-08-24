import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  data() {
    return {
      numA: 0,
      numB: 0,
      radio: null,
    };
  },
  computed: {
    result() {
      switch (this.radio) {
        case 'sum':
          return this.numA + this.numB;
        case 'subtract':
          return this.numA - this.numB;
        case 'multiply':
          return this.numA + this.numB;
        case 'divide':
          return this.numA / this.numB;
        default:
          return 0;
      }
    },
  },
});

const app = createApp(RootComponent);

app.mount('#app');
