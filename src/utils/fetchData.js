// from Api
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": 'exercisedb.p.rapidapi.com',
    // this will take the key from the .env file which is private
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": '993ee7ea0cmshfcb7039a9131e5fp1f3ba3jsnba0f30c76089',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  // extract the data
  const data = await response.json();
  console.log(data);
  return data;
};
