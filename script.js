        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };

       
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);
        });

        
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                }
            });

            
            navbar.classList.remove('active');
        };

        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });

       
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        });

        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });