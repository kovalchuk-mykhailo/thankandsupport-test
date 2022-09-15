// import { initMenu } from "./menu";
import ua from "../locals/ua.json" assert { type: "json" };
import en from "../locals/en.json" assert { type: "json" };

(() => {
  let currentLang = ua;
  console.log("Init script");

  window.addEventListener("DOMContentLoaded", (event) => {
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
})();
