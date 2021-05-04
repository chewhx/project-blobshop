export class List {
  constructor(values) {
    this.values = values || {};
  }

  get length() {
    let lengthOf = 0;
    // eslint-disable-next-line no-unused-vars
    for (let key in this.values) {
      lengthOf++;
    }
    return lengthOf;
  }

  append(key, node) {
    this.values[key] = node;
  }

  remove(key) {
    delete this.values[key];
  }

  contain(key) {
    if (this.values[key]) return true;
    return false;
  }

  clear() {
    this.values = {};
  }

  update(key, node) {
    this.values[key] = node;
  }

  get all() {
    let arr = [];
    for (let key in this.values) {
      arr.push(this.values[key]);
    }
    return arr;
  }

  get(key) {
    return this.values[key];
  }

  print() {
    return this.values;
  }
}

export class Cart extends List {
  constructor(values) {
    super();
    this.values = values || {};
    this.discount = 0;
  }

  add(key, node) {
    if (this.contain(key)) this.update(key, node);
    if (!this.contain(key)) this.append(key, node);
  }

  get subTotal() {
    let sum = 0;
    for (let key in this.values) {
      const productSum = this.values[key]["price"] * this.values[key]["qty"];
      sum += productSum;
    }
    return sum;
  }

  get grandTotal() {
    return this.subTotal - this.discount;
  }
}
