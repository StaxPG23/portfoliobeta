const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars')
    const mobile = document.querySelector('.mobile-nav')
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')

    let isMobile = false

    headerBtn.addEventListener('click',()=>{
        if (!isMobile){
            mobile.style.display = 'flex'
            document.body.style.overflow = 'hidden'
            isMobile = true
        }
        else {
            mobile.style.display = 'none'
            isMobile = false
            document.body.style.overflow = 'visible' 
        }
    })
    
    mobileLinks.forEach((link) =>[
        link.addEventListener('click', () =>{
            isMobile = false
            mobile.style.display = 'none'
            document.body.style.overflow = 'visible' 
        })
    ])
} 

export default mobileNav