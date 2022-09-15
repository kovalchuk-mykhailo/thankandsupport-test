const en = {
  "nav-tshirt": "T-shirt",
  "nav-giftbox": "Giftbox",
  "nav-contacts": "Contacts",
  "support-btn": "Thank and support",
  "main-title": "Thank and Support Ukrainian Army!",
  "shirt-desc1":
    "We have designed exclusive T-shirt with embroidered camouflage heart so that everyone can show their gratitude and respect to Ukrainian Defenders just by putting the T-shirt on for a walk in the city.",
  "shirt-desc2":
    "100% of income will be spent to purchase the necessary equipment and gear for military unit #A4103 (ballistic helmets, drones, headphones, etc.)",
  "how-to-get-heading": "How to get a T-shirt?",
  step1: "Step 1:",
  step2: "Step 2:",
  step3: "Step 3:",
  step4: "Step 4:",
  "step1-text": "Fill the form.",
  "fill-form-btn": "To fill the form",
  "step2-text": "Donate to mono-jar more than 700uah.",
  "step3-text": "Send a screenshot of successful transaction to organizers",
  "step4-text": "Once your T-shirt will be ready, we'll send it to you",
  organizers: "The Org Team",
  "contact-us": "Happy to answer any questions you have",
  valery: "Valery",
  vlad: "Vlad",
  orysia: "Orysia",
  partners: "Our partners",
  "golka-desc": "Embroidery services for business",
  "oksana-lomaha": "Oksana Lomaha",
  "lamaha-desc": "Photographer, designer",
  "bohdan-manchur": "Bogdan Manchur",
  "manchur-desc": "Videographer",
  "giftbox-for-donate": "Giftbox for donate",
  giftbox: "Giftbox",
  "giftbox-desc":
    "For special occasions we’ve created a special gift set. By purchasing it you will not only please your loved ones, but you will also support the Armed Forces of Ukraine, speeding up our Victory!",
  "giftbox-items": "What's in there:",
  tshirt: "Embroidered T-shirt",
  flag: "Ukrainian Flag",
  postmarks: "Postmarks",
  cup: "A branded mug",
  toy: "Handmade toy",
  gingerbread: "Fortune Gingerbread cookies",
  chocolate: "Chocolate",
  "get-giftbox-heading": "How to get a giftbox?",
  "giftbox-step1": "Donate to mono-jar 1500uah.",
  "giftbox-step2":
    "Send a screenshot of successful transaction to organizers, so we could get in touch with you.",
  "giftbox-step3": "Once your giftbox will be ready, we'll send it to you.",
};

const ua = {
  "nav-tshirt": "Футболки",
  "nav-giftbox": "Подарункові набори",
  "nav-contacts": "Контакти",
  "support-btn": "Подякувати та підтримати",
  "main-title": "Подякуй та Підтримай ЗСУ!",
  "shirt-desc1":
    "Ми розробили унікальні футболки з камуфляжним, вишитим серденьком, щоб кожен міг показати свою вдячність нашим Захисникам просто одягнувши футболку на прогулянку в місто.",
  "shirt-desc2":
    "100% прибутку буде витрачено на закупку необхідної техніки та спорядження (шоломи балістичні, квадрокоптери, активні навушники) для в/ч А4103.",
  "how-to-get-heading": "Як отримати футболку?",
  step1: "Крок 1:",
  "step1-text": "Заповни форму.",
  "fill-form-btn": "Заповнити форму",
  step2: "Крок 2:",
  "step2-text": "Закинь в моно банку суму від 700грн.",
  step3: "Крок 3:",
  "step3-text": "Надішли організаторам скріншот успішного донату.",
  step4: "Крок 4:",
  "step4-text": "Як тільки буде вишито футболку - відправимо тобі поштою.",
  organizers: "Організатори",
  "contact-us": "Пишіть нам з будь-яких питань",
  valery: "Валерія",
  vlad: "Влад",
  orysia: "Орися",
  partners: "Наші партнери",
  "golka-desc": "Сервіс вишивки для бізнесу",
  "oksana-lomaha": "Оксана Ломага",
  "lamaha-desc": "Фотографка, дизайнерка",
  "bohdan-manchur": "Богдан Манчур",
  "manchur-desc": "Відеограф",
  "giftbox-for-donate": "Набір за донат",
  giftbox: "Подарунковий набір",
  "giftbox-desc":
    "Спеціально з нагоди свят ми створили особливий подарунковий набір. Отримавши його, ти не тільки потішиш себе та близьких, а й підтримаєш ЗСУ, чим ще більше наблизиш нашу Перемогу!",
  "giftbox-items": "До складу набору входять:",
  tshirt: "Футболка з вишивкою",
  flag: "Прапор України",
  postmarks: "Марки",
  cup: "Горнятко",
  toy: "Хендмейд іграшка",
  gingerbread: "Пряники з передбаченням",
  chocolate: "Чоколядка",
  "get-giftbox-heading": "Як отримати подарунковий набір?",
  "giftbox-step1": "Закинь в моно банку 1500грн.",
  "giftbox-step2":
    "Надішли організаторам скріншот успішного донату, щоб ми змогли з тобою зв'язатись для уточнення деталей.",
  "giftbox-step3":
    "Як тільки твій подарунковий набір буде готовий - відправимо тобі поштою.",
};

console.log("script LOADED");

(() => {
  let currentLang = ua;
  console.log("Script initialised");

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
