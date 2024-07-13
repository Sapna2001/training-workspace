const fetchUserPromise = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((userInfo) => {
      console.log(userInfo);
    })
    .catch((reason) => console.log(reason))
    .finally(() => console.log("done"));
};

fetchUserPromise(1);
