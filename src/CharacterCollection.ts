import OrderBy from './OrderBy';

class CharacterCollection extends OrderBy {
  public collection: string;
  public length: number;

  constructor(data: string) {
    super();
    this.collection = data;
    this.length = data.length;
  }

  // TODO
  public ascending() {
    this.collection = this.collection.split('').sort().join('')
  }

  public descending() {
    this.collection = this.collection.split('').sort().reverse().join('')
  }
}

export default CharacterCollection;
