const getUsers = async () => {
  const userUrl = 'https://api.github.com/search/users?q=ivan';

  const response = await fetch(userUrl);
  const info = await response.json();
  const users = info.items;
  console.log(users);
}

getUsers();