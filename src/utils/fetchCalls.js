// import { apikey } from "./apikey";

export const fetchPicOfTheDay = async day => {
  const response = await fetch(`http://localhost:3000/api/v1/potd/${day}`);
  const data = await response.json();
  return data;
};

// export const fetchPicOfTheDay = async () => {
//   const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };
