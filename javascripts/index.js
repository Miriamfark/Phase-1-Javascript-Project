const dishes = [
  {
    id: 1,
    name: "Chicken",
    description: "yummy",
    image: "https://www.kosher.com/resized/recipe_list_item/t/a/Tamarind_chicken_W.jpg"
  },
  {
    id: 2,
    name: "Shnitzel",
    description: "crunchy",
    image: "https://www.kosher.com/resized/recipe_list_item/c/o/Cohen,Yaniv._Smoked_Paprika_Schnitzel_crop.jpg"
  }
]

//NODE GETTERS
const shnitzelButton = () => document.getElementById('main-button')
const ideaButton = () => document.getElementById('side-button')
const mainContainer = () => document.getElementById('main-container')
const stars = () => document.querySelectorAll(".star")
const submitButton = () => document.getElementById("form-button")

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

const createForm = () => {

  const formWrapper = document.createElement('div')
  const form = document.createElement('form')
  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  const nameLabel = document.createElement('label')
  const input = document.createElement('label')
  const li2 = document.createElement('li')
  const ideaLabel = document.createElement('label')
  const textArea = document.createElement('textarea')
  const li3 = document.createElement('li')
  const button = document.createElement('button')

  // nameLabel.createAttribute('for')
  // att.value = "name"
  nameLabel.innerText = "Name:"
  input.innerHTML = "<input type='text' id='name' name='user_name'>"
  ideaLabel.innerText = "Type Your Shnitzel Ideas Here:"
  formWrapper.className = "form-wrapper"
  li3.className = "button"
  button.innerText = "Submit"
  button.id = "form-button"
  textArea.id = "idea-text"
  
  //textArea.innerHTML = "<textarea id='msg' name='user_message'></textarea>"

  form.appendChild(ul)
  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)
  li1.appendChild(nameLabel)
  li1.appendChild(input)
  li2.appendChild(ideaLabel)
  li2.appendChild(textArea)
  li3.appendChild(button)
  formWrapper.appendChild(form)
  mainContainer().appendChild(formWrapper)

 // return form

//   <form action="/my-handling-form-page" method="post">
//  <ul>
//   <li>
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="user_name">
//   </li>
//   <li>
//     <label for="msg">Message:</label>
//     <textarea id="msg" name="user_message"></textarea>
//   </li>
{/* <li class="button">
  <button type="submit">Send your message</button>
</li> */}
//  </ul>
// </form>

}


//EVENT HANDLERS
const renderShnitzelToPage = (e) => {
    e.preventDefault()
    resetMainContainer()

    const h2 = document.createElement("h2")
    h2.innerText = "Shnitzel"
    mainContainer().appendChild(h2)

    addCards()
}

const renderFormToPage = (e) => {
  e.preventDefault()
  resetMainContainer()

  const h2 = document.createElement("h2")
  h2.innerText = "Some more great shnitzels coming soon..."
  mainContainer().appendChild(h2)
  //mainContainer().appendChild(form)

   createForm()
}

const renderIdeasToPage = (e) => {
  e.preventDefault()
  const ideas = e.target.querySelector('#idea-text').value
  console.log(ideas)

  const p = document.createElement('p')
  const ideaDiv = document.createElement('div')
  p.textContent = ideas
  ideaDiv.appendChild(p)
  event.target.reset()
}


//EVENT LISTENERS
const attachShnitzelLinkEvent = () => {
    shnitzelButton().addEventListener('click', renderShnitzelToPage)
}

const attachIdeaLinkEvent = () => {
    ideaButton().addEventListener('click', renderFormToPage)
}



document.addEventListener("DOMContentLoaded", () => {
    attachShnitzelLinkEvent()
    attachIdeaLinkEvent()
    
}) 

const submitForm = () => {
  submitButton().addEventListener('submit', renderIdeasToPage)
}
