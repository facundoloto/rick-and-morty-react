import { useState } from "react";

async function FetchApi(page) {
  const [response, setResponse] = useState([]);
  try {
    let arr=[];
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const character = await response.json();
    character.results.map((data) => {
      arr.push(data);
    })
    console.log(arr)
     setResponse(arr);
  } catch (err) {
    console.log(err);
  }
  return response;
};

export default FetchApi;

