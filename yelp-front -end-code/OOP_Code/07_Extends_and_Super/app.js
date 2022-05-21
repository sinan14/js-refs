class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR!");
    this.name = name;
    this.age = age;
    this.jumb = "thumba jump";
  }
  eat() {
    return `${this.name} is eating!`;
  }
  run() {
    return `${this.name} is running`;
  }
  jumbV() {
    return this.jumb;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!!";
  }
}
const toby = new Cat("toby", 2);

class Dog extends Pet {
  constructor(owner) {
    this.owner = owner;
  }
  bark() {
    return "WOOOF!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
  sayOwnerName() {
    return `${this.owner} owns this dog`;
  }
}
const jimmy = new Dog("jimmy", 2, "jackiechan");
/**
 * ! above code in line 42 will show an error see console to see that error and understand the use of super keyword
 */
