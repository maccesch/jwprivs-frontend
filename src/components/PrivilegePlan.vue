<template>
  <div class="planPrivilege">
    <h3>Vorrechte <span id="headline">Monat: {{ month }}</span></h3>
    <table class="meeting">
      <thead>
        <tr >
          <th>Datum</th>
          <th v-for="headline in privilegeTitle">{{ headline }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rowMeeting, index) in rowsMeeting">
          <td>
            {{ rowMeeting.date }}
          </td>
          <td class="btn" v-for="cell in rowMeeting.privileges">
            <app-schedule-Entry
              :name="cell.servant"
              :privilegeType="cell.privilegeType"
              :rowIndex="index">
            </app-schedule-Entry>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="meetingFieldService">
      <thead>
      <tr >
        <th>Datum</th>
        <th>Treffpunkt</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(rowFiedService, index) in rowsFieldService">
        <td>
          {{ rowFiedService.date }}
        </td>
        <td class="btn">
          <app-schedule-entry
            :name="rowFiedService.servant"
            :privilegeType=8
            :rowIndex="index">
          </app-schedule-entry>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import backend from '../services/jwPrivsBackend';
  import ScheduleEntry from './ScheduleEntry.vue';

  export default {

    name: 'planPrivilege',
    data() {
      return {
        cell: {
          servant: '',
          privilegeType: 0
        },
        rowsMeeting: backend.getPrivileges().slice(),
        rowsFieldService: backend.getFieldService().slice(),
        month: backend.getMonth().slice(),
        documentClick: false
      };
    },
    computed: {
      privilegeTitle() {
        return backend.getPrivilegesTitles();
      }
    },
    components: {
      appScheduleEntry: ScheduleEntry
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  #headline {
    font-size: 12px;
    font-weight: normal;
  }
  table {
    border-bottom: black;
    border-top: black;
    border-spacing: 1px;
  }

  th {
    font-size: 12px;
    padding-right: 20px;
    text-align: left;
  }

  tbody {
    background-color: #e7e7e7;
    border: black;
  }

  td {
    font-size: 10px;
    padding: 5px 20px 5px 2px;
    color: black;
  }

  .btn {
    cursor: pointer;
  }

  .meetingFieldService {
    margin-top: 30px;
  }

</style>
