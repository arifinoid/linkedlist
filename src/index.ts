import NumberCollection from './NumberCollection';
import CharacterCollection from './CharacterCollection';
import LinkedList from './LinkedList';

/*
  Hint: Please follow some basic Software Engineering Principles like DRY, SOLID and so on.
 */


/*
  Given collection of numbers: [5, 12, -3, -45, 0, 7, -12, 288]

  Create ascending() to order from smallest number to largest.
  Expected output: [-45, -12, -3, 0, 5, 7, 12, 288]

  Create descending() to order from largest number to smallest.
  Expected output: [288, 12, 7, 5, 0, -3, -12, -45]
 */
const givenNumberCollection = [5, 12, -3, -45, 0, 7, -12, 288];
console.group("Numbers");
  const numberCollection = new NumberCollection(givenNumberCollection);
  numberCollection.ascending();
  console.group("ascending():");
    console.log(numberCollection.collection); // [-45, -12, -3, 0, 5, 7, 12, 288]
  console.groupEnd();
  numberCollection.descending();
  console.group("descending():");
    console.log(numberCollection.collection); // [288, 12, 7, 5, 0, -3, -12, -45]
  console.groupEnd();
console.groupEnd();


/*
  Given character string: "gHjtbAjazZ"

  Create ascending() to order characters based on character set.
  Expected output: "AHZabgjjtz"

  Create descending() to order characters based on character set.
  Expected output: "ztjjgbaZHA"
 */
const givenCharacterString = 'gHjtbAjazZ';
console.group("Character String");
  const characterCollection = new CharacterCollection(givenCharacterString);
  characterCollection.ascending();
  console.group("ascending():");
    console.log(characterCollection.collection); // AHZabgjjtz
  console.groupEnd();
  characterCollection.descending();
  console.group("descending():");
    console.log(characterCollection.collection); // ztjjgbaZHA
  console.groupEnd();
console.groupEnd();


/*
  Given linked list: 23 -> 32 -> -5 -> 0 -> 322 -> 8

  Create ascending() to order from smallest number to largest.
  Expected output: -5 -> 0 -> 8 -> 23 -> 32 -> 322

  Create descending() to order from largest number to smallest.
  Expected output: 322 -> 32 -> 23 -> 8 -> 0 -> -5
 */
const givenLinkedList = new LinkedList();
givenLinkedList.add(23);
givenLinkedList.add(32);
givenLinkedList.add(-5);
givenLinkedList.add(0);
givenLinkedList.add(322);
givenLinkedList.add(8);
console.group("LinkedList");
  console.group("ascending():");
    givenLinkedList.ascending();
    givenLinkedList.print(); // -5 -> 0 -> 8 -> 23 -> 32 -> 322
  console.groupEnd();
  console.group("descending():");
    givenLinkedList.descending();
    givenLinkedList.print(); // 322 -> 32 -> 23 -> 8 -> 0 -> -5
  console.groupEnd();
console.groupEnd();
