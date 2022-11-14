document.querySelector('#cheers').addEventListener('click', getDrink)

function getDrink(){

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

      .then(res => res.json())
      .then(data => {
      console.log(data.drinks)
      document.querySelector('#drinkName').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('#ingredients').innerText = data.drinks[0].strIngredient1
      document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
