document.addEventListener('DOMContentLoaded', function() {
            
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.getElementById('nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
            });
            
            const navLinks = document.querySelectorAll('.nav-link, .footer-section a');
            const pageContents = document.querySelectorAll('.page-content');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetPage = this.getAttribute('data-page');
                    
                    pageContents.forEach(page => {
                        page.classList.remove('active');
                    });
                    
                    document.getElementById(targetPage).classList.add('active');
     
                    document.querySelectorAll('.nav-link').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
                    if (this.classList.contains('nav-link')) {
                        this.classList.add('active');
                    }

                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                    }
         
                    window.scrollTo(0, 0);
                });
            });
        });
