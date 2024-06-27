//eslint-disable no-underscore-dangle
export default HolbertonCourse;

class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // The name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // its length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // the students
  get students() {
    return this._students;
  }

  set students(value) {
    if (
      Array.isArray(students)
      && students.every((s) => typeof student  === 'string')
    ) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
