const hamburgerMenu = document.getElementById('hamburgerMenu')
const dropdownContainer = document.getElementById('dropdownContainer')

hamburgerMenu.addEventListener('click', () => {
    dropdownContainer.classList.toggle('active')
})