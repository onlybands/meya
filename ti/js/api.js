const main = async () => {
  const results = await fetch('https://api.ipdata.co?api-key=c456a993dce36c02fb33ba6c962a192136999fc80cd1a65cb82bc393');
  
  // Variable that stores the data as a Json file.
  const data = await results.json();
  // City extracted from Json file.
  const city = data.city; 
  const country = data.country;

  document.getElementById("city").innerHTML = city;
  document.getElementById("cityFooter").innerHTML = city;

}

main();
  

