import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  data() {
    return {
      counter: 0,
    };
  },
  template: `
    <button
      v-text='counter'
      @click='counter++'
    />
  `,
});

const app = createApp(RootComponent);

app.mount('#app');
