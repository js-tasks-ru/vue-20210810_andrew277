import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      default: () => [],
    },
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <MeetupAgendaItem
          v-for='agendaItem in agenda'
          v-bind='{ agendaItem }'
          :key='agendaItem.id'
        />
      </li>
    </ul>`,
});
