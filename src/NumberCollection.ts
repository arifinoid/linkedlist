import OrderBy from './OrderBy';

class NumberCollection extends OrderBy {
  public collection: number[];
  public length: number;

  constructor(data: number[]) {
    super();
    this.collection = data;
    this.length = data.length;
  }

  // TODO
  public ascending(): void {
    this.collection = this.collection.sort((a: number, b: number) => a - b);
  }

  public descending(): void {
    this.collection = this.collection.sort((a: number, b: number) => b - a);
  }
}

export default NumberCollection;
