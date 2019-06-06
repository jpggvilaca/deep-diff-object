/** 
 * Objects with only one level
 */

const OneLevel_1 = {
  name: "Donnie Darko",
  age: 3
};

const OneLevel_1_Copy = {
  name: "Donnie Darko",
  age: 3
};

const OneLevel_1_Different = {
  name: "Donnie Darko",
  age: 5
};

const OneLevel_2 = {
  name: "Fight Club",
  age: 4,
  changeAges: function(ages) {
    this.ages = ages * 1;
  },
  score: 10.4,
  description: "yo",
  request: {}
};

const OneLevel_2_Copy = {
  name: "Fight Club",
  age: 4,
  changeAges: function(ages) {
    this.ages = ages * 1;
  },
  score: 10.4,
  description: "yo",
  request: {}
};

const OneLevel_2_Different = {
  name: "Fight Club",
  age: 4,
  changeNames: function(names) {
    this.names = names * 1;
  },
  score: 15,
  description: "yo diff",
  request: { score: 1 }
};

const OneLevel_3 = {
  name: "Donnie Darko",
  age: 3,
  changeName: function(name) {
    this.name = name;
  },
  score: 6.4,
  description: "",
  list: [[1, 2, 3], [4, 5, 6]]
};

const OneLevel_3_Copy = {
  name: "Donnie Darko",
  age: 3,
  changeName: function(name) {
    this.name = name;
  },
  score: 6.4,
  description: "",
  list: [[1, 2, 3], [4, 5, 6]]
};

const OneLevel_3_Different = {
  name: "Donnie Darko",
  age: 3,
  changeName: function(name) {
    this.name = name;
  },
  score: 6.4,
  description: "",
  list: [[44, 33, 11], [0, 0, 0]]
};

/** 
 * Objects with more than one level
 */

const TwoLevels_1 = {
  name: "Donnie Darko",
  age: 3,
  changeAges: function(ages) {
    this.ages = ages * 1;
  },
  score: {
    home: [1, 2, 3],
    away: "cenas"
  }
};

const TwoLevels_1_Copy = {
  name: "Donnie Darko",
  age: 3,
  changeAges: function(ages) {
    this.ages = ages * 1;
  },
  score: {
    home: [1, 2, 3],
    away: "cenas"
  }
};

const TwoLevels_1_Different = {
  name: "Donnie Darko",
  age: 5,
  changeAges: function(ages) {
    this.ages = ages * 1;
  },
  score: {
    home: [4, 1, 0],
    away: "cenas 2"
  }
};

module.exports = {
  OneLevel_1,
  OneLevel_1_Copy,
  OneLevel_1_Different,
  OneLevel_2,
  OneLevel_2_Copy,
  OneLevel_2_Different,
  OneLevel_3,
  OneLevel_3_Copy,
  OneLevel_3_Different,
  TwoLevels_1,
  TwoLevels_1_Copy,
  TwoLevels_1_Different,
};
