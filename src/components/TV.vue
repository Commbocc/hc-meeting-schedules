<template>
  <!-- <div id="tv" class="embed-responsive embed-responsive-16by9"> -->
  <!-- <div class="embed-responsive-item"> -->

  <div id="tv">
    <div>
      <div class="container-fluid text-white">

        <h1 class="text-center font-weight-bold mt-3">
          <!-- <img src="../assets/logo.png"> -->
          Schedule
        </h1>

        <!-- Today -->
        <section v-if="todaysMeetings.length">
          <h2 class="text-center">
            Today's Meetings
          </h2>
          <table is="TvTable" :meetings="todaysMeetings"></table>
        </section>

        <!-- Upcoming -->
        <section>
          <h2 class="text-center">
            Upcoming Meetings
          </h2>
          <table is="TvTable" :meetings="upcomingMeetings"></table>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import orderBy from 'lodash.orderby'
import GoogleSheetModel from 'google-sheet-model'
import Meeting from '../models/meeting'
import TvTable from './TvTable'

export default {
  name: 'app',
  extends: GoogleSheetModel,
  props: {
    sheetId: {
      default: '1BxDpBCkWfAXdMxmWWRiPKns4Y8mxci9Mc_DTN3rDjdM'
    },
    tableId: {
      default: 2
    },
    fields: {
      default: () => ['timestamp', 'meetingname', 'starttime', 'endtime', 'location']
    },
    hideBg: {
      type: Boolean,
      default: false
    }
  },
  components: { TvTable },
  computed: {
    meetings () {
      var meetings = this.instances.map(x => new Meeting(x))
      return orderBy(meetings, ['startTime'], ['asc'])
    },
    todaysMeetings () {
      return this.meetings.filter(x => x.isUpcoming() && x.isToday())
    },
    upcomingMeetings () {
      return this.meetings.filter(x => x.isUpcoming() && !x.isToday())
    }
  }
}
</script>
