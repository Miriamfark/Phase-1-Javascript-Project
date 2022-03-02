//NODE GETTERS
const mainButton = () => document.getElementById('main-button')
const sideButton = () => document.getElementById('side-button')
const vegetableButton = () => document.getElementById('vegetable-button')
const mainWrapper = () => document.getElementById('main-container')

//HELPER FUNCTIONS
const resetMainWrapper = () => {
    mainWrapper().innerHTML = ""
}

const createCard = () => {
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
}

const addCards = () => {

}

//EVENT HANDLERS
const renderMainsToPage = (e) => {
    e.preventDefault()
    resetMainWrapper()

    const h2 = document.createElement("h2")
    h2.innerText = "Main Dishes"
    mainWrapper().appendChild(h2)
}

const renderSidesToPage = (e) => {
    e.preventDefault()
    resetMainWrapper()

    const h2 = document.createElement("h2")
    h2.innerText = "Side Dishes"
    mainWrapper().appendChild(h2)

    addCards()
}

const renderVegetablesToPage = (e) => {
    e.preventDefault()
    resetMainWrapper()

    const h2 = document.createElement("h2")
    h2.innerText = "Vegetables, Soups, and Salads"
    mainWrapper().appendChild(h2)
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
