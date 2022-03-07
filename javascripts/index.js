let dishes = []

//NODE GETTERS
const shnitzelButton = () => document.getElementById('main-button')
const ideaButton = () => document.getElementById('side-button')
const mainContainer = () => document.getElementById('main-container')
const submitButton = () => document.getElementById("form-button")

//HELPER FUNCTIONS
const fetchDishes = () => {
  fetch('http://localhost:3000/dishes')
  .then(resp => resp.json())
  .then(data => {
    dishes = data
  })
}

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
  const star1 = document.createElement('a')
  const star2 = document.createElement('a')
  const star3 = document.createElement('a')
  const star4 = document.createElement('a')
  const star5 = document.createElement('a')

  divCard.className = "card";
  divImage.className = "card-image"
  span.className = "card-title";
  divCardContent.className = "card-content"
  divCardAction.className = "card-action"
  divStarWrapper.className = "stars"
  
  image.setAttribute("src", dish.image);
  span.innerText = dish.name;
  pDescription.innerText = dish.description
  link1.setAttribute("href", "#")
  link1.innerText = "Rate this"
  star1.innerText = "★"
  star2.innerText = "★"
  star3.innerText = "★"
  star4.innerText = "★"
  star5.innerText = "★"
  
  divImage.appendChild(image);
  divImage.appendChild(span);
  divCardContent.appendChild(pDescription)
  divCardAction.appendChild(link1)
  divCardAction.appendChild(divStarWrapper)
  divStarWrapper.appendChild(star1)
  divStarWrapper.appendChild(star2)
  divStarWrapper.appendChild(star3)
  divStarWrapper.appendChild(star4)
  divStarWrapper.appendChild(star5)
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

const input = document.createElement('label')
const createForm = () => {
  
  const nameLabel = document.createElement('label')
  const formWrapper = document.createElement('div')
  const form = document.createElement('form')
  const ul = document.createElement('ul')
  const li1 = document.createElement('li')
  const li2 = document.createElement('li')
  const ideaLabel = document.createElement('label')
  const textArea = document.createElement('textarea')
  const li3 = document.createElement('li')
  const button = document.createElement('button')

  form.addEventListener('submit', renderIdeasToPage)

  nameLabel.innerText = "Name:"
  input.innerHTML = "<input type='text' id='name' name='user_name'>"
  ideaLabel.innerText = "Type Your Shnitzel Ideas Here:"
  formWrapper.className = "form-wrapper"
  li3.className = "button"
  button.innerText = "Submit"
  button.id = "form-button"
  textArea.id = "idea-text"

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
   //submitForm()
}

const renderIdeasToPage = (event) => {
  
  event.preventDefault()
  console.log(event)
  
  const ideas = event.target.querySelector('#idea-text').value
  console.log(ideas)

  const name = document.getElementById('name').value
  console.log(name)

  const p = document.createElement('p')
  const ideaDiv = document.createElement('div')
  p.textContent = `${name} says ${ideas}`
  ideaDiv.appendChild(p)
  mainContainer().appendChild(ideaDiv)
  console.log(p)
  event.target.reset()
}


const rateEvent = (event) => {
  console.log(event)
  const ratingStars = [...document.getElementsByClassName("star")]
  executeRating(ratingStars)
}

  // if (event.target.innerText === fullStar) {
  //   event.target.innerText = emptyStar
  //   event.target.classList.remove("active")
  // } else if (event.target.innerText === emptyStar) {
  //   event.target.innerText = fullStar
  //   event.target.classList.add("active")
  // }

  const executeRating = (stars) => {

    stars.map((star)=> {
    
      let i = stars.indexOf(star)
      console.log(i)

      if (star.className === "inactive") {
        for (i; i >=0; --i) stars[i].classList.add("active")
        } else {
        for (i; i < stars.length; ++i) stars[i].classList.remove("active")
        }
      })
    }
  
  

 // const ratingStars = [...document.getElementsByClassName("rating__star")];

// function executeRating(stars) {
//   const starClassActive = "rating__star fas fa-star";
//   const starClassInactive = "rating__star far fa-star";
//   const starsLength = stars.length;
//   let i;
//   stars.map((star) => {
//     star.onclick = () => {
//       i = stars.indexOf(star);

//       if (star.className===starClassInactive) {
//         for (i; i >= 0; --i) stars[i].className = starClassActive;
//       } else {
//         for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
//       }
//     };
//   });
// }
// executeRating(ratingStars);
 
  

//EVENT LISTENERS
const attachShnitzelLinkEvent = () => {
    shnitzelButton().addEventListener('click', renderShnitzelToPage)
}

const attachIdeaLinkEvent = () => {
    ideaButton().addEventListener('click', renderFormToPage)
}



document.addEventListener("DOMContentLoaded", () => {
  fetchDishes()  
  attachShnitzelLinkEvent()
    attachIdeaLinkEvent()
    
    
}) 

