const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `You have ordered a meal including ${appetizer.name}, ${main.name}, and ${dessert.name} for a total of ${totalPrice}€.`
  }
};

// Adding dishes for testing
menu.addDishToCourse('appetizers', 'serrano ham', 5.00);
menu.addDishToCourse('appetizers', 'olives', 2.00);
menu.addDishToCourse('appetizers', 'cheeses', 3.00);
menu.addDishToCourse('appetizers', 'kepta duona', 2.50);
menu.addDishToCourse('mains', 'boiled potatoes', 3.00);
menu.addDishToCourse('mains', 'raw meat', 7.00);
menu.addDishToCourse('mains', 'que tomato', 5.00);
menu.addDishToCourse('mains', 'pancakes', 4.00);
menu.addDishToCourse('desserts', 'profiterols', 4.50);
menu.addDishToCourse('desserts', 'icecream', 3.50);
menu.addDishToCourse('desserts', 'cake slice', 4.50);
menu.addDishToCourse('desserts', 'jelly', 2.50);

// Testing
const randomMeal = menu.generateRandomMeal();
console.log(randomMeal);
