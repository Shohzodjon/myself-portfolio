//  DOM selections
let gridBox = document.querySelector(".project__grid");
let btn = document.querySelector(".toggle");
let sunIcon = document.querySelector(".weather__icon");
let hiddenElements = document.querySelectorAll(".hidden");
let stackitems = document.querySelectorAll(".hidden2");
let responseNav = document.querySelector(".response__navbar");
let menuIcon = document.querySelector(".nav__menu");
let blur = document.querySelector(".blur__effect");
let closeBtn = document.querySelector(".close__btn");
let responseLink = document.querySelectorAll(".respon__link");
let headerFlex = document.querySelector(".header__flex");
let avatarImg = document.querySelector(".avatar__img");

window.addEventListener("scroll", function () {
  let topVal = window.pageYOffset;
  let nav = document.querySelector("nav");
  if (topVal > 100) {
    nav.classList.add("active__nav");
  } else {
    nav.classList.remove("active__nav");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((hidden) => observer.observe(hidden));

const stackObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

stackitems.forEach((item) => stackObserver.observe(item));

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  btn.classList.toggle("dark__btn");
});

menuIcon.addEventListener("click", function () {
  blur.classList.toggle("active__blur");
  responseNav.classList.add("active__navbar");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  blur.classList.toggle("active__blur");
  responseNav.classList.toggle("active__navbar");
  document.body.style.overflow = "auto";
});

responseLink.forEach((item) => {
  item.addEventListener("click", function () {
    blur.classList.toggle("active__blur");
    responseNav.classList.toggle("active__navbar");
    document.body.style.overflow = "auto";
  });
});

//  paralax effect
headerFlex.addEventListener("mouseover", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  avatarImg.style.transform = `translate(${(x / 100) * 8}px, ${
    (y / 100) * 8
  }px)`;
});

let card = "";

const projects = [
  {
    title: "One-net portal",
    desc: "This site has a single portal. Provides telecommunication news in Uzbekistan",
    imgUrl: "./assets/images/one-net.png",
    tools: "HTML5 , Tailwindcss , Vue3, Pinia, StoryBook",
    demo: "https://one-net.uz/",
    git: "https://github.com/Shohzodjon/one-net-project",
  },
  {
    title: "Mini ecommerce",
    desc: "On this site, the user can buy the product he likes. The function of deleting products has also been added.",
    imgUrl: "./assets/images/mini.png",
    tools: "HTML5 , CSS3, React , Context API",
    demo: "ttps://mini-ecommer-site.netlify.app/",
    git: "https://github.com/Shohzodjon/new-project",
  },
  {
    title: "Artificial Intelligence",
    desc: "Landing page website, full responsive design",
    imgUrl: "./assets/images/AI.png",
    tools: "HTML5 , CSS3, React ",
    demo: "https://steady-caramel-6e94f8.netlify.app",
    git: "https://github.com/Shohzodjon/albison-academy",
  },
  {
    title: "Asia University",
    desc: "Full responsive design website",
    imgUrl: "./assets/images/samuni.png",
    tools: "HTML5 , Tailwindcss, Vuex, Vue3 ",
    demo: "https://sam-university.netlify.app",
    git: "https://github.com/Shohzodjon/samUniversity",
  },
  {
    title: "ZTY , electric car charging station",
    desc: "This site lists electric vehicle charging locations, showing the closest charging station to your location.",
    imgUrl: "./assets/images/zty.png",
    tools: "HTML5 , Tailwindcss, Vuex, Vue3 ",
    demo: "https://zty-charged.netlify.app",
    git: "https://github.com/Shohzodjon/landingPage",
  },
  {
    title: "Ice cream website",
    desc: "This website make custom scroll animation , I use pure javascript as interSectionObserver() function ",
    imgUrl: "./assets/images/ice.png",
    tools: "HTML5, Sass, Javascript",
    demo: "https://observation-project.netlify.app",
    git: "https://github.com/Shohzodjon/Portfolio-Ice-cream",
  },
  {
    title: "Ali express clone website",
    desc: "On this site, the user can buy the product he likes. The function of deleting products has also been added.",
    imgUrl: "./assets/images/aliexpress.png",
    tools: "HTML5, CSS3, React, Context API",
    demo: "https://aliexpress-clone22.netlify.app",
    git: "https://github.com/Shohzodjon/e-commerce",
  },

  {
    title: "UIC Group company  website",
    desc: "Full, real website. ",
    imgUrl: "./assets/images/uic.png",
    tools: "HTML5,Tailwindcss, Vue3 , Pinia, Typescript, StoryBook, Gsap",
    demo: "https://uic.group/",
    git: "https://github.com/Shohzodjon/uic-website",
  },
];

projects.forEach((item) => {
  card = `
  <div class="grid__item">
  <div class="item__img">
    <img src="${item.imgUrl}" alt="item img" />
  </div>
  <div class="item__info">
    <h3 class="item__title">${item.title}</h3>
    <p class="item__desc">
     ${item.desc}
    </p>
    <p class="item__stack">
      <b>Tech stack</b> : ${item.tools}
    </p>
    <div class="item__footer">
      <a href="${item.demo}" target="_blank"
        ><span>
        <img src="./assets/images/link_icon.svg" alt="link icon"/>
        </span>
        Live Preview
      </a>

      <a href="${item.git}" target="_blank">
        <span>
         <img src="./assets/images/github_icon.svg" alt="github icon"/>
        </span>
        View Code
      </a>
    </div>
  </div>
</div>
  `;

  gridBox.insertAdjacentHTML("beforeend", card);
});
