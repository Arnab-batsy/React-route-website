import React, { useEffect, useState } from "react";
//Doing API call to get GitHub followers

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Arnab-batsy")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  //Whenever the component loads, function gets triggered. Np Dependency Array
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Github Image" width={200}/>
    </div>
  );
}
