// Random Fact Generator
const factsWithImages = [
  {
    fact: 'Fast fashion chains make 1 million garments daily.',
    imageSrc: 'https://www.businessoffashion.com/resizer/qn0WzQCVNbaryOqJiKC_Zu8wd1k=/arc-photo-businessoffashion/eu-central-1-prod/public/XVPAEKLRHZCI7LXJTN7OCRBJAU.JPG'
  },
  {
    fact: 'More than 50% of fast fashion clothes will be discarded within one year of purchase thanks to fast-moving trends.',
    imageSrc: 'https://www.tamborasi.com/wp-content/uploads/2020/11/negative-impacts-fast-fashion.jpeg'
  },
  {
    fact: 'The average American throws away around 81 pounds of clothing yearly.',
    imageSrc: 'https://cdn.vox-cdn.com/thumbor/xTGAKBN9fvU5WEnxwOcz-LX7IRQ=/0x0:4000x2699/1200x800/filters:focal(1680x1030:2320x1670)/cdn.vox-cdn.com/uploads/chorus_image/image/69958656/GettyImages_1229159289.0.jpg'
  },
  {
    fact: 'The fashion industry is responsible for 8% of carbon emissions.',
    imageSrc: 'https://www.billerud.com/globalassets/managed-packaging/our-offer/articles/how-to-reduce-the-carbon-footprint-of-your-supply-chain/smoke-stacks-dumping-pollution-into-the-air.jpg'
  },
  {
    fact: 'One in three young women, the biggest segment of consumers, consider garments worn once or twice to be old.',
    imageSrc: 'https://www.frugalandthriving.com.au/wp-content/uploads/2019/04/10-ways-to-save-money-on-clothes.jpeg'
  },
  {
    fact: 'The biggest ocean polluter is synthetic material found in many fast fashion garments.',
    imageSrc: 'https://www.panaprium.com/cdn/shop/articles/fast_fashion_water_pollution_1000.jpg?crop=center&v=1634096336&width=700'
  },
  {
    fact: '85% of the clothing Americans consume is sent to landfills, which can take over 200 years to decompose.',
    imageSrc: 'https://nypost.com/wp-content/uploads/sites/2/2023/02/NYPICHPDPICT000006786974.jpg'
  },
  {
    fact: 'Fashion is the second biggest polluter in the world.',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1000/0*8mBiF4yhjyMlSiVE'
  }
];

const btn = document.getElementById('btn');
const output = document.getElementById('output');

if (btn && output) {
  btn.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * factsWithImages.length);
    const randomFact = factsWithImages[randomIndex];
    
    const factContainer = document.createElement('div');
    factContainer.classList.add('fact-container');

    const image = document.createElement('img');
    image.src = randomFact.imageSrc;
    image.alt = 'Fact Image';
    
    const text = document.createElement('p');
    text.classList.add('fact-text');
    text.textContent = randomFact.fact;

    text.innerHTML = `${randomFact.fact} <a href="./resources.html">Learn More</a>`;
    
    factContainer.appendChild(image);
    factContainer.appendChild(text);
    
    // Clear the previous fact and add the new one
    output.innerHTML = '';
    output.appendChild(factContainer);
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
