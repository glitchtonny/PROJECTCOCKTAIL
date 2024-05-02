function fetchDrinks(){
    fetch("http://localhost:3000/cocktail")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach((drink) => addDrink(drink))
    })
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
  button.innerText = "Like"
  button.addEventListener('click',(e) => {
  //  console.log("event", e)
    e.preventDefault()
    increment(e)}
    )

}


function increment(e) {
  
    let count = parseInt(e.target.previousElementSibling.innerText) + 1;
  
  
    fetch(`http://localhost:3000/cocktail/${e.target.id}`, {
      method: "PATCH",
      
      body: JSON.stringify({
        likes: count,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      
  }

  function addNewToy() {
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
  addNewToy()