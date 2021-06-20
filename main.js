const menuToggleBtn = document.querySelectorAll('.toggle-menu');
const navigation = document.querySelector('nav');

menuToggleBtn.forEach(e => {
    e.addEventListener('click',toggleMenu);
});

function toggleMenu(){
    navigation.classList.toggle('nav-hidden');
}


const toggleTheme = document.querySelector('.toggle-theme')
const themeIcon = document.querySelector('.theme-icon')
const body = document.querySelector('body')

/* <i class='bx bxs-moon'></i>    <i class='bx bx-sun' ></i> */

toggleTheme.addEventListener('click',()=>{
    if( !body.classList.contains('dark') ){
        body.classList.toggle('dark')
        themeIcon.innerHTML = "";
        themeIcon.innerHTML = `<i class='bx bx-moon'></i>`;
    }else{
        body.classList.toggle('dark')
        themeIcon.innerHTML = "";
        themeIcon.innerHTML = `<i class='bx bx-sun' ></i>`;
    }
})



const phoneBtn = document.querySelector('.btn-phone')
const emailBtn = document.querySelector('.btn-email')
const copyBtn = document.querySelector('.btn-copy')
const contactInput = document.querySelector('.contact-input')

var contactOption = {
    phoneNumber: '+989306688810',
    email: 'hb19.1381@gmail.com'
};

phoneBtn.addEventListener('click' , ()=>{
    contactInput.value = contactOption.phoneNumber;
    copyBtn.innerHTML = 'Copy';
})
emailBtn.addEventListener('click' , ()=>{
    contactInput.value = contactOption.email;
    copyBtn.innerHTML = 'Copy';
})

copyBtn.addEventListener('click' , ()=>{
        
        
    contactInput.select()
    document.execCommand('copy')

    contactInput.value = "";
    copyBtn.innerHTML = 'Copyed';

})

const projectImages = document.querySelectorAll('.project-image');
const modalCloseBtn = document.querySelector('.btn-toggle-modal')
const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal-title')
const modalImage = document.querySelector('.modal-image')
const closeModalBtn = document.querySelector('.btn-toggle-modal')
const modalSite = document.querySelector('.modal-site')

projectImages.forEach(e =>{
    e.addEventListener('click',(e)=>{
        e.preventDefault()
        var item = e.target;

        createModal(item.innerText,item.getAttribute('href'))

    })
})


function createModal(title,imageSrc){
    modalTitle.innerHTML = title;
    var image = imageSrc;
    modalImage.setAttribute('src',image)
    modalSite.setAttribute('href',image)
    
    modal.classList.toggle('modal-hidden')

}
closeModalBtn.addEventListener('click',()=>{
    modal.classList.toggle('modal-hidden')
})