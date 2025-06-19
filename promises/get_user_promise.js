let users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
  "Judy",
];

function getUsers() {
  setTimeout(() => {
    users.forEach((value) => {
      console.log(value);
    });
  }, 1000);
}

function postUsers(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Something error occured");
      }
    }, 2000);
  });
}

postUsers("New Useer")
  .then(getUsers)
  .catch((e) => {
    console.log(e);
  });
