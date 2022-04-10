document.querySelector('#cheers').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      console.log(data.drinks)
      document.querySelector('#drinkName').innerText = data.drinks[3].strDrink
      document.querySelector('img').src = data.drinks[3].strDrinkThumb
      document.querySelector('#instructions').innerText = data.drinks[3].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
