const fetchUser = async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  const result = await response.json()

  console.log(result);
};

const main = async() => {
    const result = await fetchUser(1);
    console.log(result);
}

main()

