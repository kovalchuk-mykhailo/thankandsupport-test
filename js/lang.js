import ua from "../locals/ua.json" assert { type: "json" };
import en from "../locals/en.json" assert { type: "json" };
// import { initMenu } from "./menu";

const initMenu = () => {
  const burgerBtnRef = document.querySelector(".burger-btn");
  const mobileMenuRef = document.querySelector(".menu");

  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("nav-link") ||
      e.target.classList.contains("support-btn")
    ) {
      burgerBtnRef.classList.toggle("open");
      mobileMenuRef.classList.toggle("is-hidden");
    }
  });

  burgerBtnRef.addEventListener("click", () => {
    burgerBtnRef.classList.toggle("open");
    mobileMenuRef.classList.toggle("is-hidden");
  });
};

let currentLang = ua;
console.log("Init script");

window.addEventListener("load", (event) => {
  initMenu();

  console.log("resources ARE LOADED!");

  const switchLang = document.getElementById("language-switcher");
  const langText = document.querySelectorAll("[data-lang]");

  alert(`switchLang: ${switchLang}; langText(q-ty): ${langText.length}`);

  const translate = (lang) => {
    localStorage.setItem("lang", lang);
    const source = lang === "ua" ? ua : en;
    langText.forEach((el) => {
      el.innerText = source[el.dataset.lang];
    });

    console.log(source);

    currentLang = lang;
  };

  switchLang.addEventListener("change", (e) => {
    alert(
      `Click.target: ${e.target.value} ;
       Click.currentTarget: ${e?.currentTarget?.value}`
    );

    console.log();
    translate(e.target.value);
  });

  window.addEventListener("load", () => {
    const lang = localStorage.getItem("lang");

    if (lang) {
      translate(lang);
      switchLang.value = lang;
    }
  });
});
