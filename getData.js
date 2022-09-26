import axios from "axios";

const getData = async (number) => {
  const { data: users } = await axios(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${number}`
  );

  console.log(posts);
  console.log(users);
};

export default getData;
