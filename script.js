/*function fetchDrinks(){
    fetch("https://my-json-server.typicode.com/glitchtonny/fakeapi")
    .then(res => res.json())
    .then(data => {
        console.log(data)

        
        if (data.data) {
          // Access the drinks property and iterate over its values
          Object.values(data.data).forEach(drink => {
              // Assuming addDrink is a function that adds the drink to the UI
              addDrink(drink);
          });
      } else {
          console.error("No drinks found in the data");
      }
        
      
    })
    .catch(error => {
      console.error("Error fetching drinks:", error);
      
  });
}
fetchDrinks()*/

/*function addDrink(drink){
let div = document.getElementById('drink-collection')
let card = document.createElement("div")
div.appendChild(card)
card.className= "card"

let flipCardInner=document.createElement("div")
card.appendChild(flipCardInner)
flipCardInner.className = "flip-card-inner"

let flipCardFront = document.createElement("div")
flipCardInner.appendChild(flipCardFront)
flipCardFront.className = "flip-card-front"

let flipCardBack = document.createElement("div")
flipCardInner.appendChild(flipCardBack)
flipCardBack.className = "flip-card-back"


let h4 = document.createElement("h4")
  flipCardFront.appendChild(h4)
  let name = drink.name
  h4.innerText = name


  //let image = document.createElement("img")
  //flipCardFront.appendChild(image)
  //image.className ="toy-avatar"
 // let imgURL = drink.image
  //image.src = drink.image

  

  
  let p = document.createElement("p")
  p.innerText =`${drink.likes} likes` 
  flipCardFront.append(p)

  let button = document.createElement("button")
  card.append(button)
  button.className = "like-btn"
  button.id = drink.id
  button.innerText = "♥"
  button.addEventListener('click',(e) => {
  console.log("event", e)
    e.preventDefault()
    increment(e)
}
    )

}


function increment(e) {
  
  let count = parseInt(e.target.previousElementSibling.innerText) + 1;  
  
   
  
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita/${e.target.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
          },
          
          body: JSON.stringify({
            likes: count,
          })
      })
     .then((response) => response.json())
     .then((json) => console.log(json));
      
}*/
 

  /*function addNewDrink() {
    const getButton = document.querySelector(".add-drink");
  
    getButton.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const input = (document.querySelectorAll(".input-text"));
  
      const postRequest = {
        method: "POST",
        
        body: JSON.stringify({
          name: input[0].value,
          image: input[1].value,
          likes: 0,
        }),
      };
  
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", postRequest)
      .then((res) => res.json())
      .then(res => console.log(res)) 
      console.log(input[0].value);
      console.log(input[1].value);
    });
  }
  addNewDrink()*/



  /*fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    data.drinks.forEach(drink => {
      addDrink(drink)
    })
  } )
  .catch(error => console.error('Error:', error));


  function addDrink(drink){
    let div = document.getElementById('drink-collection')
    let card = document.createElement("div")
    div.appendChild(card)
    card.className= "card"
  }*/


function fetchDrinks() {
  fetch("http://localhost:3000/cocktail") 
    .then((res) => res.json())
    .then((res) => {
      console.log("response2", res);
      res.forEach((drink) => addDrink(drink));
    });
  }

  fetchDrinks()

  function addDrink(drink){
    let div = document.getElementById('drink-collection')
    let card = document.createElement("div")
    div.appendChild(card)
    card.className= "card"
    
    let flipCardInner=document.createElement("div")
    card.appendChild(flipCardInner)
    flipCardInner.className = "flip-card-inner"
    
    let flipCardFront = document.createElement("div")
    flipCardInner.appendChild(flipCardFront)
    flipCardFront.className = "flip-card-front"
    
    let flipCardBack = document.createElement("div")
    flipCardInner.appendChild(flipCardBack)
    flipCardBack.className = "flip-card-back"
    
    
    let h4 = document.createElement("h4")
      flipCardFront.appendChild(h4)
      let name = drink.name
      h4.innerText = name
    
    
      let image = document.createElement("img")
      flipCardFront.appendChild(image)
      image.className ="toy-avatar"
      let imgURL = drink.image
      image.src = drink.image
    
      
    
      
      let p = document.createElement("p")
      p.innerText =`${drink.likes} likes` 
      flipCardFront.append(p)
    
      let button = document.createElement("button")
      card.append(button)
      button.className = "like-btn"
      button.id = drink.id
      button.innerText = "♥"
      button.addEventListener('click',(e) => {
      console.log("event", e)
        e.preventDefault()
        increment(e)
    }
        )
    
    }
    
    
    function increment(e) {
      
      let count = parseInt(e.target.previousElementSibling.innerText) + 1;  
      
       
      
        fetch(`http://localhost:3000/cocktail/${e.target.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
              },
              
              body: JSON.stringify({
                likes: count,
              })
          })
         .then((response) => response.json())
         .then((json) => console.log(json));
          
    }
     
    
      function addNewDrink() {
        const getButton = document.querySelector(".add-drink");
      
        getButton.addEventListener("submit", (event) => {
          event.preventDefault();
          
          const input = (document.querySelectorAll(".input-text"));
      
          const postRequest = {
            method: "POST",
            
            body: JSON.stringify({
              name: input[0].value,
              image: input[1].value,
              likes: 0,
            }),
          };
      
          fetch("http://localhost:3000/cocktail", postRequest)
          .then((res) => res.json())
          .then(res => console.log(res)) 
          console.log(input[0].value);
          console.log(input[1].value);
        });
      }
      addNewDrink()



  





  




