const dishes = [
  {
    id: 1,
    name: "chicken",
    description: "yummy",
    image: "https://www.kosher.com/resized/recipe_list_item/t/a/Tamarind_chicken_W.jpg"
  },
  {
    id: 2,
    name: "shnitzel",
    description: "crunchy",
    image: "#"
  }
]

//NODE GETTERS
const mainButton = () => document.getElementById('main-button')
const sideButton = () => document.getElementById('side-button')
const vegetableButton = () => document.getElementById('vegetable-button')
const mainContainer = () => document.getElementById('main-container')
const stars = () => document.querySelectorAll(".star")

//HELPER FUNCTIONS
const resetMainContainer = () => {
    mainContainer().innerHTML = ""
}

const createCard = (dish) => {

  const divCard = document.createElement('div');
  const divImage = document.createElement('div');
  const image = document.createElement("IMG")
  const span = document.createElement('span')
  const divCardContent = document.createElement('div')
  const pDescription = document.createElement("p");
  const divCardAction = document.createElement('div');
  const link1 = document.createElement("a")
  const divStarWrapper = document.createElement('div')
  const star1 = document.createElement('div')
  const star2 = document.createElement('div')
  const star3 = document.createElement('div')
  const star4 = document.createElement('div')
  const star5 = document.createElement('div')

  divCard.className = "card";
  divImage.className = "card-image"
  span.className = "card-title";
  divCardContent.className = "card-content"
  divCardAction.className = "card-action"
  divStarWrapper.className = "star-wrapper"
  star1.className = "star"
  star2.className = "star"
  star3.className = "star"
  star4.className = "star"
  star5.className = "star"


  image.setAttribute("src", dish.image);
  span.innerText = dish.name;
  pDescription.innerText = dish.description
  link1.setAttribute("href", "#")
  link1.innerText = "Rate this"
  star1.innerText = "⭐"
  star2.innerText = "⭐"
  star3.innerText = "⭐"
  star4.innerText = "⭐"
  star5.innerText = "⭐"

  divImage.appendChild(image);
  divImage.appendChild(span);
  divCardContent.appendChild(pDescription)
  divCardAction.appendChild(link1)
  divCardAction.appendChild(star1)
  divCardAction.appendChild(star2)
  divCardAction.appendChild(star3)
  divCardAction.appendChild(star4)
  divCardAction.appendChild(star5)
  divCard.appendChild(divImage)
  divCard.appendChild(divCardContent)
  divCard.appendChild(divCardAction)

  return divCard
}

const addCards = () => {
  const row = document.createElement("row")
  row.className = "row"
  dishes.forEach(dish => {
    const column = addCard(dish)

    row.appendChild(column)

    mainContainer().appendChild(row)
  })
}

const addCard = (dish) => {

  const column = document.createElement("div");
  column.className = "col s12 m4"

  column.appendChild(createCard(dish))

 return column
}

//EVENT HANDLERS
const renderMainsToPage = (e) => {
    e.preventDefault()
    resetMainContainer()

    const h2 = document.createElement("h2")
    h2.innerText = "Main Dishes"
    mainContainer().appendChild(h2)

    addCards()
}

const renderSidesToPage = (e) => {
    e.preventDefault()
    resetMainContainer()

    const h2 = document.createElement("h2")
    h2.innerText = "Side Dishes"
    mainContainer().appendChild(h2)

    addCards()
}

const renderVegetablesToPage = (e) => {
    e.preventDefault()
    resetMainContainer()

    const h2 = document.createElement("h2")
    h2.innerText = "Vegetables, Soups, and Salads"
    mainContainer().appendChild(h2)

    addCards()
}

//EVENT LISTENERS
const attachMainLinkEvent = () => {
    mainButton().addEventListener('click', renderMainsToPage)
}

const attachSideLinkEvent = () => {
    sideButton().addEventListener('click', renderSidesToPage)
}

const attachVegetableLinkEvent = () => {
    vegetableButton().addEventListener('click', renderVegetablesToPage)
}


document.addEventListener("DOMContentLoaded", () => {
    attachMainLinkEvent()
    attachSideLinkEvent()
    attachVegetableLinkEvent()
}) 

document.addEventListener
