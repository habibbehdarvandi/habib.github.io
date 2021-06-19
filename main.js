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

