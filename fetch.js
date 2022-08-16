//const URL = "https://api.agify.io?name=michael";


fetch('https://api.agify.io?name=michael')

  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

