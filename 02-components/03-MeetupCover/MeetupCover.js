import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: String,
    image: String,
  },

  computed: {
    meetupCoverStyle() {
      return {
        '--bg-url': `url(${this.image})`,
      };
    },
  },

  template: `
    <div class="meetup-cover" :style="!!this.image && this.meetupCoverStyle">
        <h1 class="meetup-cover__title">{{ this.title }}</h1>
    </div>`,
});
