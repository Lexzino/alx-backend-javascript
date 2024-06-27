export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter and setter for 'size' attribute
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = value;
  }

  // Getter and setter for 'location' attribute
  get location() {
    return this._location;
  }
  set location(value) {
    this._location = value;
  }

  // Cast to Number returns the size
  valueOf() {
    return this._size;
  }

  // Cast to String returns the location
  toString() {
    return this._location;
  }
}
