import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      isLoading: false,
      isError: false,
    };
  },

  watch: {
    meetupId: {
      handler: 'getMeetup',
      immediate: true,
    },
  },

  methods: {
    getMeetup(id) {
      if (!id) return;

      this.isLoading = true;
      fetchMeetupById(id)
        .then((meetup) => {
          this.meetup = meetup;
          this.isError = false;
        })
        .catch(({ message }) => (this.isError = message))
        .finally(() => (this.isLoading = false));
    },
  },

  template: `
    <div class="page-meetup">
      <ui-container v-if='isLoading'>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else-if='isError'>
        <ui-alert>{{ isError }}</ui-alert>
      </ui-container>

      <meetup-view
        v-else
        :meetup="meetup"
      />
    </div>`,
});
