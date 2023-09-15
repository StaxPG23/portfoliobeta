const lazyLoading = () =>{
    const lazyImages = document.querySelectorAll('.lazy')
    const observer = new IntersectionObserver((entries,observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('loading');
                image.classList.add('loaded')
                observer.unobserve(image);
            }
        })
    })

    lazyImages.forEach((image) =>{
        observer.observe(image)
    })
} 

export default lazyLoading