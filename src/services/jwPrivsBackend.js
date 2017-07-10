const privileges = [
  {
    date: '11.07.2017',
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
    ],
  },
  {
    date: '18.07.2017',
    privileges: [
      {
        servant: 'M Kraußer',
        privilegeType: 1,
      },
      {
        servant: 'B labla',
        privilegeType: 2,
      },
      {
        servant: 'G Forsvall',
        privilegeType: 3,
      },
    ],
  },
];

export default {
  getPrivilegesTitles() {
    return ['Mikro', 'Anlage', 'Bühne'];
  },

  getPrivileges() {
    return privileges;
  },

  getAvailableServantsForPrivilegeType(privilegeType) {
    return {
      1: ['M Cassola', 'M Kraußer', 'B labla', 'Z ugenau'],
      2: ['M Kraußer', 'A bc', 'E Forsvall'],
      3: ['E Forsvall', 'F Forsvall', 'G Forsvall'],
    }[privilegeType];
  },

  setServant(servant, rowIndex, columnIndex) {
    privileges[rowIndex][columnIndex].servant = servant;
  },
};
