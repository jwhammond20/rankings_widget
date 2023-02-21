fetch("https://ranks.dynastynerds.com/top10")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
