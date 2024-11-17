function init(){
    
    const icon = document.querySelector('.header-nav-menu_icon');
    const menulist = document.querySelector('.header-menu_list');
    const contactBtn = document.querySelector('.hero-action_btn');

    window.addEventListener('resize', ()=>{
        menulist.style.transition = 'none';
        resizeTimeout = setTimeout(()=>{
            menulist.style.transition = 'transform 0.5s ease';
        }, 100)
    });

    document.addEventListener('click', (event)=>{
        const contactClasses =  document.querySelector('.hero-action-contact_details');
        if(contactBtn === event.target){
            contactClasses.classList.toggle('hide');
            return
        } 
        contactClasses.classList.add('hide');
    });
    
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const animation = entry.target.getAttribute('data-animate');
                entry.target.classList.add(animation);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.8});

    document.addEventListener('DOMContentLoaded', ()=>{
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(element=>{
            observer.observe(element);
        });
    });
    
    if(icon){
        icon.addEventListener('click', ()=>{
            const menu = document.querySelector('.header-menu_list');
            const closeBtn = document.querySelector('.close-btn');
            const openBtn = document.querySelector('.open-btn');
            menu.classList.toggle('header-menu_list-active');
            closeBtn.classList.toggle('hide');
            openBtn.classList.toggle('hide');
        })
    }   
}
init();