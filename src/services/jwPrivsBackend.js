const month = 'Februar';

const privileges = [
  {
    date: 'So 04.02.2018 15:30',
    privileges: [
      {
        servant: 'M Cassola',
        privilegeType: 1,
      },
      {
        servant: 'M Kraußer',
        privilegeType: 2,
      },
      {
        servant: 'E Forsvall',
        privilegeType: 3,
      },
      {
        servant: 'M Cassola',
        privilegeType: 4,
      },
      {
        servant: 'B Herbert',
        privilegeType: 5,
      },
      {
        servant: 'M Cassola',
        privilegeType: 6,
      },
      {
        servant: 'M Cassola',
        privilegeType: 7,
      },
    ],
  },
  {
    date: 'So 11.02.2018 15:30',
    privileges: [
      {
        servant: 'M Cassola',
        privilegeType: 1,
      },
      {
        servant: 'M Kraußer',
        privilegeType: 2,
      },
      {
        servant: 'E Forsvall',
        privilegeType: 3,
      },
      {
        servant: 'M Cassola',
        privilegeType: 4,
      },
      {
        servant: 'M Cassola',
        privilegeType: 5,
      },
      {
        servant: 'M Cassola',
        privilegeType: 6,
      },
      {
        servant: 'M Cassola',
        privilegeType: 7,
      },
    ],
  },
  {
    date: 'So 18.02.2018 15:30',
    privileges: [
      {
        servant: 'M Cassola',
        privilegeType: 1,
      },
      {
        servant: 'M Kraußer',
        privilegeType: 2,
      },
      {
        servant: 'E Forsvall',
        privilegeType: 3,
      },
      {
        servant: 'M Cassola',
        privilegeType: 4,
      },
      {
        servant: 'M Cassola',
        privilegeType: 5,
      },
      {
        servant: 'M Cassola',
        privilegeType: 6,
      },
      {
        servant: 'M Cassola',
        privilegeType: 7,
      },
    ],
  },
  {
    date: 'So 25.02.2018 15:30',
    privileges: [
      {
        servant: 'M Cassola',
        privilegeType: 1,
      },
      {
        servant: 'M Kraußer',
        privilegeType: 2,
      },
      {
        servant: 'E Forsvall',
        privilegeType: 3,
      },
      {
        servant: 'M Cassola',
        privilegeType: 4,
      },
      {
        servant: 'M Cassola',
        privilegeType: 5,
      },
      {
        servant: 'M Cassola',
        privilegeType: 6,
      },
      {
        servant: 'M Cassola',
        privilegeType: 7,
      },
    ],
  },
];

const fieldservice = [
  {
    date: 'Do 01.02.2018 09:30',
    servant: 'D Jiménez',
  },
  {
    date: 'Sa 03.02.2018 09:30',
    servant: 'M Cassola',
  },
  {
    date: 'Do 08.02.2018 09:30',
    servant: 'W Behr',
  },
  {
    date: 'Sa 10.02.2018 09:30',
    servant: 'A Behr',
  },
  {
    date: 'Do 15.02.2018 09:30',
    servant: 'D Jiménez',
  },
  {
    date: 'Sa 17.02.2018 09:30',
    servant: 'M Cassola',
  },
  {
    date: 'Do 22.02.2018 09:30',
    servant: 'W Behr',
  },
  {
    date: 'Sa 24.02.2018 09:30',
    servant: 'A Behr',
  },
];

export default {

  getMonth() {
    return month;
  },

  getPrivilegesTitles() {
    return ['Bühne', 'Lesen', 'Mikro1', 'Mikro2', 'Mischpult', 'Ordner', 'Vorsitz'];
  },

  getPrivileges() {
    return privileges;
  },

  getFieldService() {
    return fieldservice;
  },

  getAvailableServantsForPrivilegeType(privilegeType) {
    return {
      1: ['M Cassola', 'M Kraußer', 'B labla', 'Z ugenau'],
      2: ['M Kraußer', 'A bc', 'E Forsvall'],
      3: ['E Forsvall', 'F Forsvall', 'G Forsvall'],
      4: ['M Cassola', 'M Kraußer', 'B labla', 'Z ugenau'],
      5: ['M Kraußer', 'A bc', 'E Forsvall'],
      6: ['E Forsvall', 'F Forsvall', 'G Forsvall'],
      7: ['M Cassola', 'M Kraußer', 'B labla', 'Z ugenau'],
    }[privilegeType];
  },

  getAvailableServantsFieldService() {
    return ['M Cassola', 'A Behr', 'W Behr', 'D Jiménez'];
  },

  setServantMeeting(servant, rowIndex, privilegeType) {
    privileges[rowIndex].privileges[privilegeType - 1].servant = servant;
  },

  setServantFieldService(servant, rowIndex) {
    fieldservice[rowIndex].servant = servant;
  }
};
