document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navGroup = document.querySelector('.nav-group');

    if (navGroup) {
        navGroup.addEventListener('mouseenter', () => {
            navGroup.classList.add('is-hovering');
        });
        navGroup.addEventListener('mouseleave', () => {
            navGroup.classList.remove('is-hovering');
        });
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    // Handle cross-page scroll target via sessionStorage (no hash in URL)
    const scrollTargetId = sessionStorage.getItem('scrollTarget');
    if (scrollTargetId) {
        sessionStorage.removeItem('scrollTarget');
        const scrollToTarget = () => {
            const el = document.getElementById(scrollTargetId);
            if (!el) return;
            ScrollTrigger.refresh();
            requestAnimationFrame(() => {
                lenis.scrollTo(el, { offset: 0, immediate: false, duration: 1 });
            });
        };
        window.addEventListener('load', () => setTimeout(scrollToTarget, 800));
    }

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const header = document.querySelector('.header');
    const heroImg = document.querySelector('.hero-img');

    window.addEventListener('resize', () => {
        initGalleryWheel();
        ScrollTrigger.refresh();
    });

    const initGalleryWheel = () => {
        const wheel = document.querySelector('.wheel');
        if (!wheel) return;

        const cards = gsap.utils.toArray('.wheel__card');
        const totalCards = cards.length;
        const radius = wheel.offsetWidth / 2;

        if (!radius || !totalCards) return;

        cards.forEach((card, index) => {
            const angle = (index / totalCards) * 360;
            const radian = (angle * Math.PI) / 180;
            const x = radius + radius * Math.sin(radian) - card.offsetWidth / 2;
            const y = radius - radius * Math.cos(radian) - card.offsetHeight / 2;

            gsap.set(card, {
                x,
                y,
                rotation: angle,
            });
        });

        ScrollTrigger.getById('gallery-wheel-spin')?.kill();

        gsap.to(wheel, {
            rotation: 360,
            ease: 'none',
            scrollTrigger: {
                id: 'gallery-wheel-spin',
                trigger: '.gallery-section',
                start: 'top top',
                end: `+=${window.innerHeight * 4}`,
                pin: '.gallery-inner',
                pinSpacing: true,
                scrub: 1,
            },
        });
    };

    requestAnimationFrame(() => {
        requestAnimationFrame(initGalleryWheel);
    });

    // Team Slider
    const teamData = [
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/1.png',
            name: 'Mr. Alfred Vinod Antony',
            location: 'Managing Director',
            din: 'DIN: 02776734',
            email: 'alfred@progenrenewables.com',
            bio1: 'As Managing Director, Alfred steers ProGen Renewables\' strategic vision, guiding the company\'s growth across solar EPC, project development, and long-term renewable energy partnerships.',
            bio2: 'His leadership combines deep industry insight with a commitment to delivering high-performance, sustainable solar solutions for clients across India.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/4.png',
            name: 'Mrs. Veena Jose',
            location: 'CFO - Chief Financial Officer and Whole Time Director',
            din: 'DIN: 08017313',
            email: 'veena@progenrenewables.com',
            bio1: 'Veena drives day-to-day execution and corporate governance at ProGen, ensuring operational excellence across project delivery, finance, and stakeholder engagement.',
            bio2: 'Her hands-on approach and disciplined oversight have been instrumental in scaling the organisation while maintaining strong compliance and quality standards.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/6.png',
            name: 'Mr. Innocent Judejoseph Antonyjoseph',
            location: 'Independent Director',
            din: 'DIN: 10896507',
            email: 'jjinnocent78@gmail.com',
            bio1: 'Innocent brings independent perspective and seasoned business judgement to the board, supporting ProGen on governance, risk, and long-term strategy.',
            bio2: 'His experience across enterprise and infrastructure sectors strengthens the board\'s oversight of growth initiatives and shareholder interests.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/3.png',
            name: 'Mr. Karthik Veluchamy Kottur',
            location: 'Independent Director',
            din: 'DIN: 01973367',
            email: 'karthik@deccanindustries.com',
            bio1: 'Karthik contributes broad commercial and advisory expertise, helping ProGen evaluate opportunities in solar EPC, project finance, and capital markets.',
            bio2: 'As an independent director, he reinforces the board\'s focus on transparency, accountability, and disciplined value creation.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/5.png',
            name: 'Mr. Hari Basker',
            location: 'Independent Director',
            din: 'DIN: 11281446',
            email: 'r.haribhaskaran@gmail.com',
            bio1: 'Hari brings extensive industry experience to ProGen\'s board, advising on project execution standards, operational risk, and strategic partnerships.',
            bio2: 'His independent counsel supports the company\'s commitment to sound governance and sustainable, high-quality solar deployment.'
        },
        {
            img: 'assets/investorimages/BOD ENHANCED PHOTOS/8.png',
            name: 'MR. Selvakumaran Chandrasekaran',
            location: 'Director',
            din: 'DIN: 08355365',
            email: 'selvas.themechanicalengineer@gmail.com',
            bio1: 'Selvakumaran Chandrasekaran is a construction and infrastructure professional with 12+ years of experience in project execution, quality management, and renewable energy projects.',
            bio2: 'With a strong engineering background and hands-on site expertise, he contributes operational and strategic value to infrastructure and sustainable energy initiatives.'
        }
    ];

    let currentSlide = 0;
    let isAnimating = false;
    const slider = document.querySelector('.team-slider');

    const updateSlide = (index) => {
        if (!slider || isAnimating) return;
        isAnimating = true;

        slider.classList.add('animating');

        setTimeout(() => {
            const data = teamData[index];
            slider.querySelector('.team-image img').src = data.img;
            slider.querySelector('.team-name').textContent = data.name;
            slider.querySelector('.team-location').textContent = data.location;
            slider.querySelector('.team-din').textContent = data.din;
            const emailEl = slider.querySelector('.team-email');
            if (emailEl) {
                if (data.email) {
                    emailEl.style.display = '';
                    emailEl.textContent = data.email;
                    emailEl.href = 'mailto:' + data.email;
                } else {
                    emailEl.style.display = 'none';
                }
            }
            const bios = slider.querySelectorAll('.team-bio p');
            bios[0].textContent = data.bio1;
            bios[1].textContent = data.bio2;

            slider.classList.remove('animating');
            isAnimating = false;
        }, 500);
    };

    const nextBtn = document.querySelector('.team-next');
    const prevBtn = document.querySelector('.team-prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % teamData.length;
            updateSlide(currentSlide);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + teamData.length) % teamData.length;
            updateSlide(currentSlide);
        });
    }

    // About video play toggle
    const aboutVideo = document.querySelector('.about-video');
    const aboutPlay = document.querySelector('.about-play');
    if (aboutVideo && aboutPlay) {
        aboutPlay.addEventListener('click', () => {
            if (aboutVideo.paused) {
                aboutVideo.muted = false;
                aboutVideo.play();
                aboutPlay.classList.add('playing');
            } else {
                aboutVideo.pause();
                aboutPlay.classList.remove('playing');
            }
        });
    }

    // About section - image slide up animation
    gsap.from('.about-bg img, .about-bg video', {
        y: 300,
        opacity: 0,
        scale: 1.1,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 85%',
            end: 'top 10%',
            scrub: 1,
        }
    });

    // Footer SVG hover effect
    const footerSvg = document.getElementById('footerSvg');
    const revealMask = document.getElementById('revealMask');
    if (footerSvg && revealMask) {
        footerSvg.addEventListener('mousemove', (e) => {
            const rect = footerSvg.getBoundingClientRect();
            const cx = ((e.clientX - rect.left) / rect.width) * 100;
            const cy = ((e.clientY - rect.top) / rect.height) * 100;
            revealMask.setAttribute('cx', cx + '%');
            revealMask.setAttribute('cy', cy + '%');
        });
    }

    // ── Footer recent posts (also called from inline script; safe to run twice) ──
    (function renderFooterPosts() {
        const container = document.getElementById('footerRecentPosts');
        if (!container || container.children.length > 0) return; // already rendered
        if (typeof BLOG_POSTS === 'undefined') return;

        const latest = [...BLOG_POSTS]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);

        function fmt(dateStr) {
        return new Date(dateStr).toLocaleDateString('en-GB', {
            day: '2-digit', month: 'long', year: 'numeric'
        });
        }

        container.innerHTML = latest.map(post => `
        <a href="post.html?id=${encodeURIComponent(post.id)}" class="service-footer-post">
            <img src="${post.image}" alt="${post.title}">
            <span>
            <small>${fmt(post.date)}</small>
            <strong>${post.title}</strong>
            </span>
        </a>
        `).join('');
    })();
});
