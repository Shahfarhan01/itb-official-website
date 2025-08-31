  document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu functionality
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
            const mobileNavLinks = document.querySelectorAll('#mobile-menu a');

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-0');
                mobileMenu.classList.remove('translate-x-full');
            });

            closeMobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
            });

            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('translate-x-full');
                    mobileMenu.classList.remove('translate-x-0');
                });
            });

            // Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: "0px",
                threshold: 0.2
            });

            document.querySelectorAll('.scroll-animate').forEach(element => {
                observer.observe(element);
            });

            // FAQ Toggle Functionality
            function toggleFaq(header) {
                const content = header.nextElementSibling;
                const icon = header.querySelector('.faq-item-icon');

                // Toggle the 'active' class on the header
                header.classList.toggle('active');

                // Toggle the content's visibility with a max-height transition
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.style.padding = '0 1.5rem';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.padding = '1rem 1.5rem';
                }

                // Close other open FAQ items
                const allFaqs = document.querySelectorAll('.faq-item-header');
                allFaqs.forEach(faq => {
                    if (faq !== header && faq.classList.contains('active')) {
                        faq.classList.remove('active');
                        faq.nextElementSibling.style.maxHeight = null;
                        faq.nextElementSibling.style.padding = '0 1.5rem';
                    }
                });
            }
            window.toggleFaq = toggleFaq;

            // Modal functionality for TEAM SFG
            const teamLink = document.getElementById('team-sfg-link');
            const teamModal = document.getElementById('team-modal');
            const closeModalBtn = document.getElementById('close-modal');

            teamLink.addEventListener('click', (e) => {
                e.preventDefault();
                teamModal.classList.add('open');
            });

            closeModalBtn.addEventListener('click', () => {
                teamModal.classList.remove('open');
            });

            teamModal.addEventListener('click', (e) => {
                if (e.target === teamModal) {
                    teamModal.classList.remove('open');
                }
            });
        });