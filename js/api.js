const main = async () => {
  const results = await fetch('https://api.ipdata.co?api-key=44f33774a1a3e900831b3287203b99472e5ffaf187fa3f3d369ccc81');
  
  // Variable that stores the data as a Json file.
  const data = await results.json();
  // City extracted from Json file.
  const city = data.city; 
  const country = data.country;

  document.getElementById("city").innerHTML = city;
  document.getElementById("cityFooter").innerHTML = city;

}

main();
  

