//  DOM selections
let gridBox = document.querySelector(".project__grid");
let btn = document.querySelector(".toggle");
let sunIcon = document.querySelector(".weather__icon");
const hiddenElements = document.querySelectorAll(".hidden");
const stackitems = document.querySelectorAll(".hidden2");

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

let card = "";

for (let i = 0; i <= 5; i++) {
  card = `
  <div class="grid__item">
  <div class="item__img">
    <img src="./assets/images/card_img.png" alt="item img" />
  </div>
  <div class="item__info">
    <h3 class="item__title">Project Tile goes here</h3>
    <p class="item__desc">
      This is sample project description random things are here in
      description This is sample project lorem ipsum generator for
      dummy content
    </p>
    <p class="item__stack">
      <b>Tech stack</b> : HTML , JavaScript, SASS, React
    </p>
    <div class="item__footer">
      <a href="#"
        ><span>
        <img src="./assets/images/link_icon.svg" alt="link icon"/>
        </span>
        Live Preview
      </a>

      <a href="#">
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
}
