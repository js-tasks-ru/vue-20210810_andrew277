import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const RootComponent = defineComponent({
  data() {
    return {
      pickedMeetupId: null,
      pickedMeetupTitle: null,
    };
  },
  watch: {
    async pickedMeetupId(id) {
      if (!id) return;

      const { title } = await fetchMeetupById(id);
      this.pickedMeetupTitle = title;
    },
  },
});

const app = createApp(RootComponent);

app.mount('#app');
