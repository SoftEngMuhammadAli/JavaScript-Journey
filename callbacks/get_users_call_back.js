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
    users.forEach((element) => {
      console.log(element);
    });
  }, 1000);
}

function postUsers(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 2000);
}

postUsers("New User", getUsers);
