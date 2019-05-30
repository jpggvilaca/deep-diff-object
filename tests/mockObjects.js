/** 
 * Objects with only one level
 */

const OneLevel_1 = {
  name: "Donnie Darko",
  age: 3,
  changeAges: function(ages) {
    this.ages = ages * 1;
  }
};

const OneLevel_1_Copy = {
  name: "Donnie Darko",
  age: 3
};

const OneLevel_1_Different = {
  name: "Donnie Darko",
  age: 5,
  changeCenas: function(cenas) {
    this.ages = cenas * 3;
  },
};

const OneLevel_2 = {
  name: "Fight Club",
  age: 4,
  changeAges: function(ages) {
    this.ages = ages * 1;
  },
  score: 10.4,
  description: "yo"
};

const OneLevel_3 = {
  name: "Donnie Darko",
  age: 3,
  changeName: function(name) {
    this.name = name;
  },
  score: 6.4,
  description: "",
  request: {}
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
  OneLevel_3,
  TwoLevels_1,
  TwoLevels_1_Copy,
  TwoLevels_1_Different,
};
