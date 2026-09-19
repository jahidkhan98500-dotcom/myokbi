/* =========================================================
   OKB PUBLIC WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     CURRENT YEAR
  ======================================================== */

  const yearElement =
    document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }


  /* =======================================================
     MOBILE MENU
  ======================================================== */

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileNav =
    document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

      mobileNav.classList.toggle("open");

    });


    const mobileLinks =
      mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

      link.addEventListener("click", () => {

        mobileNav.classList.remove("open");

      });

    });

  }


  /* =======================================================
     PHONE BALANCE ANIMATION
     This creates the "video-like" financial dashboard
     animation without requiring an MP4.
  ======================================================== */

  const balanceElement =
    document.getElementById("phoneBalance");

  if (balanceElement) {

    const startBalance = 12580;

    const targetBalance = 13840;

    let currentBalance = startBalance;

    let direction = 1;

    function animateBalance() {

      currentBalance += direction * 23;

      if (currentBalance >= targetBalance) {

        currentBalance = targetBalance;

        direction = -1;

      }

      if (currentBalance <= startBalance) {

        currentBalance = startBalance;

        direction = 1;

      }

      balanceElement.textContent =
        Math.round(currentBalance)
          .toLocaleString("en-US");

    }

    setInterval(
      animateBalance,
      95
    );

  }


  /* =======================================================
     SCROLL REVEAL
  ======================================================== */

  const revealElements =
    document.querySelectorAll(
      ".feature-card, .step-card, .glass-dashboard, .image-card"
    );

  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "revealed"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(24px)";

    element.style.transition =
      "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

  });


  /* =======================================================
     REVEAL CLASS
  ======================================================== */

  const style =
    document.createElement("style");

  style.textContent = `

    .revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

  `;

  document.head.appendChild(style);


  /* =======================================================
     HERO PHONE PARALLAX
  ======================================================== */

  const phone =
    document.querySelector(".phone-frame");

  if (phone && window.innerWidth > 800) {

    document.addEventListener(
      "mousemove",
      event => {

        const x =
          (event.clientX /
            window.innerWidth) - .5;

        const y =
          (event.clientY /
            window.innerHeight) - .5;

        phone.style.transform =
          `
          rotateY(${x * 5}deg)
          rotateX(${y * -5}deg)
          `;
      }
    );

  }


  /* =======================================================
     15 SECOND SHOWCASE CYCLE
  ======================================================== */

  const phoneScreen =
    document.querySelector(".phone-screen");

  if (phoneScreen) {

    let cycle = 0;

    setInterval(() => {

      cycle++;

      phoneScreen.classList.remove(
        "screen-pulse"
      );

      void phoneScreen.offsetWidth;

      phoneScreen.classList.add(
        "screen-pulse"
      );

    }, 15000);

  }


  /* =======================================================
     SMOOTH INTERNAL LINKS
  ======================================================== */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(anchor => {

      anchor.addEventListener(
        "click",
        event => {

          const id =
            anchor.getAttribute("href");

          const target =
            document.querySelector(id);

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* =======================================================
     PREVENT EMPTY HASH LINKS FROM JUMPING
  ======================================================== */

  document
    .querySelectorAll(
      'a[href="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {
          event.preventDefault();
        }
      );

    });

});