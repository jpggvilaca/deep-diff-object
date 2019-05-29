/** 
 * Objects with only one level
 */

const OneLevel_1 = {
  name: "Donnie Darko",
  age: 3,
  changeName: function(name) {
    this.name = name;
  },
  score: 6.4,
  description: ""
};

const OneLevel_1_Copy = {
  name: "Donnie Darko",
  age: 3,
  changeName: function(name) {
    this.name = name;
  },
  score: 6.4,
  description: ""
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

module.exports = {
  OneLevel_1,
  OneLevel_1_Copy,
  OneLevel_2,
  OneLevel_3
};
