class Sorter {
  constructor() {
      this.arraySorter = [];
      this.compFunc = function(a, b) {
          return a - b
      };
  }

  add(element) {
      this.arraySorter.push(element);
  }

  at(index) {
    return this.arraySorter[index];
  }

  get length() {
      return this.arraySorter.length;
  }

  toArray() {
    return this.arraySorter;
  }

  sort(indices) {

      indices.sort();
      var temporarily = [];

      this.arraySorter.forEach(function (value, index) {
        if (indices.indexOf(index) != -1){
            temporarily.push(value);
        }
      });
      temporarily.sort(this.compFunc);

      for (var i = 0; i < indices.length; i++) {
          this.arraySorter[indices[i]] = temporarily[i];
      }
  }

  setComparator(compareFunction) {
      this.compFunc = compareFunction;
  }
}

module.exports = Sorter;