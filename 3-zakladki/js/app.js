// # Zadania - DOM

// ## Zadanie 1
// Po kliknięciu w link w zakładkach:
// - przełącz aktywną zakładkę (zmieniając klasę `tab-el-active`)
// - pokaż treść zakładki na którą kieruje dany link, ukryj pozostałe treści

const li = document.querySelectorAll(".tab-el");
const tabContent = document.querySelectorAll(".tab-content");
console.log(tabContent);
console.log(li);


li.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const liActive = document.querySelector(".tab-el-active");
        const tabContentActive = document.querySelector(".tab-content-active");
        liActive.classList.remove("tab-el-active");
        this.classList.add("tab-el-active");
        tabContentActive.classList.remove("tab-content-active");

    });
})


//nie wiem atm