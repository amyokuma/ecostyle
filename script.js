// Random Fact Generator
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const facts = [
  'Fashion is the second biggest polluter in the world.',
  '85% of the clothing Americans consume is sent to landfills, which can take over 200 years to decompose.',
  'The biggest ocean polluter is synthetic material found in many fast fashion garments.',
  'One in three young women, the biggest segment of consumers, consider garments worn once or twice to be old.',
  'The fashion industry is responsible for 8% of carbon emissions.',
  'The average American throws away around 81 pounds of clothing yearly.',
  'Washing, solvents, and dyes used in manufacturing are responsible for one-fifth of industrial water pollution.',
  'More than 50% of fast fashion clothes will be discarded within one year of purchase thanks to fast-moving trends.',
  'More than $500 billion of value is lost every year due to clothing underutilization and the lack of recycling.',
  'Fast fashion chains make 1 million garments daily.',
  '85% of factories violate labor laws in LA.'
];

if (btn) {
  btn.addEventListener('click', function () {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    output.innerHTML = randomFact;
  });
}

// Navigation Bar Animation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease-in-out forwards ${index / 7 + 1.5}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();
