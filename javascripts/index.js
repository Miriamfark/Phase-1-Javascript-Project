//NODE GETTERS
const mainButton = () => document.getElementById('main-button')
const sideButton = () => document.getElementById('side-button')
const vegetableButton = () => document.getElementById('vegetable-button')

//EVENT HANDLERS
const renderMainsToPage = (e) => {
    e.preventDefault()
    alert("Meals button works!")
}

const renderSidesToPage = (e) => {
    e.preventDefault()
    alert("Side button works!")
}

const renderVegetablesToPage = (e) => {
    e.preventDefault()
    alert("Vegetables button works")
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
