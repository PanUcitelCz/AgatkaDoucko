/* Již v jednom dokumentu mám tyto proměnné definované, takže je zde zakomentuji, aby nedošlo k chybě při spuštění skriptu.
const input1 = document.querySelector("#input"); 
const output = document.querySelector(".output_pro_querySelector");*/

// querySelector = metoda pro získání elementu pomocí selektoru (id, class, tag)
// # = id, . = class, tag = tag
const body = document.querySelector("body"); //získa pomocí nazvu tagu (elementu).

// Tohle je novější metoda pro získání elementu pomocí selektoru (id, class, tag)
// value = hodnota z inputu (pro nepárový tag input) - získání hodnoty z inputu
console.log(input1.value); // Získání hodnoty z inputu a její vypsání do konzole

// innerHTML = obsah elementu (pro párový tag p) - získání obsahu z elementu output
console.log(output.innerHTML); // Získání elementu output a jeho vypsání do konzole

function ColorBody(){
    // body.classList.toggle("Color"); // Přidání třídy .Color do elementu body
    body.classList.add("Color"); // Tím že jí přidáme, tak se barva změní na modrou
    // body.classList.remove("Color"); // Tím že jí odstraníme, tak se barva změní na defualtní barvu
}
