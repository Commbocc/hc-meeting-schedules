<template lang="html">
  <table class="table table-bordered table-striped">

    <thead class="text-center">
      <tr class="bg-secondary text-light">
        <th width="33%">Name</th>
        <th width="33%">Time</th>
        <th width="33%">Location</th>
      </tr>
    </thead>

    <tbody class="text-center">
      <tr v-for="meeting in meetings">
        <td>
          {{ meeting.name }}
        </td>
        <td>
          {{ meeting.timeRange() }}
        </td>
        <td>
          {{ meeting.location }}
        </td>
      </tr>
    </tbody>

  </table>
</template>

<script>
export default {
  props: ['meetings']
}
</script>
