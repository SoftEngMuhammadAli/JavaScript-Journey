let fruits = ["Banana", "Apple", "Mango"];

const getFruits = () => {
  setTimeout(() => {
    fruits.forEach((data) => {
      console.log(data);
    });
  }, 1000);
};

const postFruit = (fruit, callback) => {
  setTimeout(() => {
    fruits.push(fruit);
    callback();
  }, 2000);
};

postFruit("New Fruit Added", getFruits);
