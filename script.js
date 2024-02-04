const inputContainer = document.querySelector('#change-theme')
const rootElement = document.documentElement
const themeIconElement = document.querySelector('#theme-icon')
const sunIcon = './assets/sun.svg'
const moonIcon = './assets/moon.svg'


const lightTheme = {
    '--background-color': '#E8E8E8',
    '--text-color': '#383d66',
    '--shadow': '0px 3px 6px 0px rgba(140, 149, 159, 0.15)',
}
const darkTheme = {
    '--background-color': '#383d66',
    '--text-color': '#E8E8E8',
    '--shadow': '0px 3px 6px 0px rgba(20, 23, 26, 0.281)',
}

inputContainer.addEventListener('change', ()=>{
    const isChecked = inputContainer.checked
    isChecked ? (changeTheme(darkTheme), changeImg(moonIcon)) : 
    (changeTheme(lightTheme), changeImg(sunIcon))
})

function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property,value)
}

function changeImg(icon) {
    themeIconElement.setAttribute('src', icon)
}