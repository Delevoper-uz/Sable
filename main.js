const title = document.querySelector("#title");
const input = document.querySelector("#nameInput");
const button = document.querySelector("#btn");

button.addEventListener("click", function() {
    const name = input.value;
    title.textContent = "Salom, " + name + "!";
});

const exploreBtn = document.querySelector("#exploreBtn");
const interactiveBox = document.querySelector("#interactiveBox");

exploreBtn.addEventListener("click", function() {
    interactiveBox.classList.toggle("show");
    if (interactiveBox.classList.contains("show")) {
        interactiveBox.scrollIntoView({ behavior: "smooth" });
    }
});

const headerBtn = document.querySelector("#headerBtn");
headerBtn.addEventListener("click", function() {
    alert("Akkauntga kirish bo'limi");
}); 

const infoModal = document.querySelector("#infoModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalClose = document.querySelector("#modalClose");

function showModal(title, text) {
    modalTitle.textContent = title;
    modalDescription.textContent = text;
    infoModal.classList.add("active");
}

if (modalClose) {
    modalClose.addEventListener("click", function() {
        infoModal.classList.remove("active");
    });
}

if (infoModal) {
    infoModal.addEventListener("click", function(e) {
        if (e.target === infoModal) {
            infoModal.classList.remove("active");
        }
    });
}

const feature1 = document.querySelector("#feature1");
if (feature1) {
    feature1.addEventListener("click", function() {
        showModal("Secured Credit Card", "Kredit tarixi va tekshiruvlarsiz 5 daqiqada karta va bank hisobiga ega bo'ling.");
    });
}

const feature2 = document.querySelector("#feature2");
if (feature2) {
    feature2.addEventListener("click", function() {
        showModal("Premium Card", "Sevimli brendlaringizdan 2% cheksiz keshbek va birinchi yilda ikki baravar bonuslar oling.");
    });
}

const feature3 = document.querySelector("#feature3");
if (feature3) {
    feature3.addEventListener("click", function() {
        showModal("Build U.S. Credit", "AQShda ishonchli kredit tarixini oson va tez shakllantiring.");
    });
}

const feature4 = document.querySelector("#feature4");
if (feature4) {
    feature4.addEventListener("click", function() {
        showModal("Global Citizen", "Mamlakatga kelmasdan turib pasport va viza orqali hisob oching.");
    });
}

const addMoneyBtn = document.querySelector("#addMoneyBtn");
if (addMoneyBtn) {
    addMoneyBtn.addEventListener("click", function() {
        showModal("Add Money", "Hisobni to'ldirish bo'limi.");
    });
}

const sendMoneyBtn = document.querySelector("#sendMoneyBtn");
if (sendMoneyBtn) {
    sendMoneyBtn.addEventListener("click", function() {
        showModal("Send Money", "Pul o'tkazmalari bo'limi.");
    });
}

const benefitItems = document.querySelectorAll(".benefit-item");

benefitItems.forEach(function(item) {
    item.addEventListener("click", function() {
        benefitItems.forEach(function(el) {
            el.classList.remove("active");
        });
        this.classList.add("active");
    });
});

const compareButtons = document.querySelectorAll(".cta-pill-btn");

compareButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        const cardType = this.textContent.trim();
        showModal(cardType, "Siz " + cardType + " kartasiga ariza topshirish bo'limini tanladingiz.");
    });
});