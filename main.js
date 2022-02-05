const input = document.querySelector('.theme-switcher input')
const button = document.querySelector('.btn')

input.addEventListener('change', themSwitcher)



function themSwitcher(e){
    if(e.target.checked){
        document.body.setAttribute('data-theme', 'dark')
    }else{
        document.body.setAttribute('data-theme', 'light')
    }
}