<template>
  <div class="btn">
    <button @click.stop="changeServant()">{{ name }}</button>
    <ul class="dropdownContent" v-if="selectionVisible" v-click-outsideDdMenu="closeDdMenu">
      <li v-for="availableServant in availableServants">
        <a href="#" @click="setServant(availableServant)">{{ availableServant }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import backend from '../services/jwPrivsBackend';
  import { dropdownMenuIsVisible } from '../main';

  export default {
    props: {
      name: String,
      privilegeType: Number,
      rowIndex: Number,
      documentClick: Boolean
    },
    data() {
      return {
        availableServants: [],
        selectionVisible: false
      };
    },
    methods: {
      changeServant() {
        if (this.selectionVisible === false) {
          dropdownMenuIsVisible.$emit('ddMenuIsVisible', this.selectionVisible);
          dropdownMenuIsVisible.$emit('availableServants', this.availableServants);
          if (this.privilegeType === 8) {
            this.availableServants = backend.getAvailableServantsFieldService();
            this.selectionVisible = true;
          } else {
            this.availableServants = backend.getAvailableServantsForPrivilegeType(this.privilegeType);
            this.selectionVisible = true;
          }
        }
      },
      setServant(servant) {
        if (this.privilegeType === 8) {
          backend.setServantFieldService(servant, this.rowIndex);
          this.availableServants = [];
          this.selectionVisible = false;
        } else {
          backend.setServantMeeting(servant, this.rowIndex, this.privilegeType);
          this.availableServants = [];
          this.selectionVisible = false;
        }
      },
      closeDdMenu(event) {
        this.selectionVisible = false;
      }
    },
    created() {
      dropdownMenuIsVisible.$on('ddMenuIsVisible', (ddMenuIsVisible) => {
        this.selectionVisible = ddMenuIsVisible;
      });
      dropdownMenuIsVisible.$on('availableServants', (availableServants) => {
        this.availableServants = availableServants;
      });
    }
  };
</script>

<style scoped>

  button {
    background-color: #e7e7e7;
    border: none;
    font-size: 10px;
    font-weight: normal;
    font-family: 'Avenir', 'Helvetica, Arial', 'sans-serif';
    padding: 0;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  .dropdownContent {
    position: absolute;
    padding: 0;
    font-size: 10px;
    list-style-type: none;
    background-color: white;
    text-decoration: none;
    z-index: 1;
  }

  .dropdownContent a {
    padding: 2px 5px;
    color: black;
    text-decoration: none;
    display: block;
  }

  .dropdownContent a:hover {
    background-color: #e7e7e7
  }
</style>
