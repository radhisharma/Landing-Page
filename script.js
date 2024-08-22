
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.subscribe__form');
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('btn');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
        alert('Please enter a valid email address.');
      } else {
        alert('Subscription successful!');
        form.reset(); // Clear the form
      }
    });

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav__links');

    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  });
 document.addEventListener('DOMContentLoaded', function () {
    const destinations = [
      { title: 'Santorini', subtitle: 'Greece', img: 'assets/destination-5.jpg' },
      { title: 'Kyoto', subtitle: 'Japan', img: 'assets/destination-6.jpg' },
      { title: 'Cappadocia', subtitle: 'Turkey', img: 'assets/destination-7.jpg' },
      { title: 'Bali', subtitle: 'Indonesia', img: 'assets/destination-8.jpg' },
    ];

    const leftArrow = document.querySelector('.destination__nav span:first-child');
    const rightArrow = document.querySelector('.destination__nav span:last-child');
    const destinationCards = document.querySelectorAll('.destination__card');

    let currentIndex = 0;

    rightArrow.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % destinations.length;
      updateDestinations();
    });

    leftArrow.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
      updateDestinations();
    });

    function updateDestinations() {
      destinationCards.forEach((card, index) => {
        const destination = destinations[(currentIndex + index) % destinations.length];
        card.querySelector('img').src = destination.img;
        card.querySelector('.destination__title').textContent = destination.title;
        card.querySelector('.destination__subtitle').textContent = destination.subtitle;
      });
    }
  });