import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },

  computed: {
    dateFormattedLong() {
      return this.formatDate({
        options: {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        },
      });
    },
    dateFormattedShort() {
      return this.formatDate({ locale: 'en-CA' });
    },
  },
  methods: {
    formatDate({ locale = navigator.language, options = {} }) {
      const date = new Date(this.date);

      return date.toLocaleDateString(locale, options);
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ this.organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ this.place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="this.dateFormattedShort">{{ this.dateFormattedLong }}</time>
      </li>
    </ul>`,
});
