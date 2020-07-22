// # Zadania - DOM

// ## Zadanie 1
// Po kliknięciu na LI przełącz klasę `.nav-li-active` z obecnie zaznaczonego elementu na element kliknięty.

// Zwróć uwagę, że klasa `.nav-li-active` jest nadawana na element LI a nie na A. Postaraj się sprawić, by podczas takiego kliku strona nie była przeładowywana.


const li = document.querySelectorAll("li");

console.log(li);


li.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const liActive = document.querySelector(".nav-el-active");
        liActive.classList.remove("nav-el-active");
        this.classList.add("nav-el-active");
    });
})