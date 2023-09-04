

class Animal   {
  constructor(props) {
   
    this.props = props;
  }
}

let animal = new Animal({
  name: "Leone",
  race: "Tiger",
  age: 5,
  country: "Russia",
});
console.log(animal);
