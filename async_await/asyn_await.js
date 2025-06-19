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
        reject("Something error occurred");
      }
    }, 2000);
  });
}

const init = async () => {
  try {
    await postUsers("New");
    getUsers();
  } catch (error) {
    console.log(error);
  }
};

init();
