// # Zadania - DOM

// ## Zadanie 1
// Rozwiązując kolejne punkty powinieneś z planszy usuwać kwadraty z danym numerem.
// Jeżeli dane kwadraty nie zostały usunięte, znaczy że polecenie nie zostało dobrze wykonane.


// 1. Znajdź elementy o klasie `.first-attempt` - dodaj im klasę `.active`
const firstAttempt = document.querySelectorAll(".first-attempt");
console.log(firstAttempt);
firstAttempt.forEach((el) => {
    el.classList.add("active");
});

// 2. Znajdź elementy z atrybutem `data-border` i dodaj im atrybut `data-el-active`. Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu

const dataBorder = document.querySelectorAll("[data-border]");
console.log(dataBorder);
for (let el of dataBorder) {
    console.log(el.dataset.elActive = "");
};

// 3. Znajdź elementy z klasą `.hack`. Dodaj im atrybut title ustawiony na wartość "hacking". Atrybut ten nie powinien zaczynać się od `data-`


const hack = document.querySelectorAll(".hack");
console.log(hack);

hack.forEach((el) => {
    el.setAttribute("title", "hacking");
})

// 4. Znajdź elementy o klasie `.hijack`. Usuń im atrybut `title`

const hijack = document.querySelectorAll(".hijack");
console.log(hijack);

hijack.forEach((el) => {
    el.removeAttribute("title")
});

// 5. Znajdź elementy które mają 2 klasy równocześnie: `.st1` i `.st2`. Dodaj im style: `color: red`, i `font-size na 15px`

const twoClasses = document.querySelectorAll(".st1.st2");
console.log(twoClasses);

twoClasses.forEach((el) => {
    el.style.color = "red";
    el.style.fontSize = "15px";
})


// 6. Znajdź elementy które mają klasę `.del` ale nie mają klasy `.hijack`. Dodaj im atrybut `data-hack-active`, usuń atrybut `data-hack-inactive`


const del = document.querySelectorAll(".del:not(.hijack");
console.log(del);

del.forEach((el) => {
    el.dataset.hackActive = "";
    el.removeAttribute("data-hack-inactive")
})


// 7. Znajdź elementy o klasie `.last-attempt` i ukryj (nie usuwaj) w ich wnętrzu spany

const lastAttempt = document.querySelectorAll(".last-attempt");
console.log(lastAttempt);


lastAttempt.forEach((el) => {
    el.style.display = "none"; // czy visibility: hidden też działa
})