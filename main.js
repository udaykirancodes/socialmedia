const profileImg = document.querySelector('nav .profile-photo'); 
const options = document.querySelector('.profile-options'); 
profileImg.addEventListener('click',()=> {
    if(options.classList.contains('show')){
        options.classList.remove('show');
        return 
    }
    options.classList.add('show');

})

const notificationPopup = document.querySelector('.notifications-popup'); 
const notificationRef = document.querySelector('.Notify');
notificationRef.addEventListener('click',()=> {
    notificationPopup.classList.toggle('show'); 
})
