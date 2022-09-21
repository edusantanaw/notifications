const notifications = document.getElementsByClassName('recentely')
const qtdNew = document.getElementById('qtdNew')

qtdNew.textContent = notifications.length
const allRead = () => {
    for (let i = 0; i < notifications.length; i++) {
        notifications[i].classList.remove('recentely')
        --qtdNew.textContent
    }
    if(qtdNew.textContent == 0){
        qtdNew.style.display= 'none'
    }
}