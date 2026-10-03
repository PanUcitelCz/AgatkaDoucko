// Starý způsob získání elementu pomocí metody document.getElementById()
// Získání elementu s id "output"
// Pokud to chceš mít mimo funkci, musíš mít v html u scriptu defer
const input1 = document.getElementById("input"); 
const output = document.getElementById("output");

// value = hodnota z inputu (pro nepárový tag input) - získání hodnoty z inputu
console.log(input1.value); // Získání hodnoty z inputu a její vypsání do konzole

// innerHTML = obsah elementu (pro párový tag p) - získání obsahu z elementu output
console.log(output.innerHTML); // Získání elementu output a jeho vypsání do konzole

function Add1(){
    output.innerHTML = input1.value; // Přidání hodnoty z inputu a obsahu z elementu output do inputu
   // console.log("Ted je funkce Add()"); // Vypsání do konzole, že byla spuštěna funkce Add()
    j = 1;
}


function Add2(){
    output.innerHTML += "<br>" + input1.value + ", "; // Přidání hodnoty z inputu a obsahu z elementu output do inputu
    j = 1;
}

let i = 1;
function Add3(){
    //let i = 1; // let je lokální proměnná (ona existuje jen ve svém zapouzdřením {})
    output.innerHTML += "<br>" + i + ". "  + input1.value + ", "; // Přidání hodnoty z inputu a obsahu z elementu output do inputu
    i++;
    j = 1;
}

let j = 1;
function Add4(){
    if( j < 2){
        output.innerHTML = j + ". "  + input1.value + ", "; 
    }
    else{
        output.innerHTML += "<br>" + j + ". "  + input1.value + ", "; // Přidání hodnoty z inputu a obsahu z elementu output do inputu
    }
    j++;
}

// Del(a) - a je zde parametr funkce.
// Parametr této funkce jsme si nadefinovali prázdným stringem ''.
// Prázdný string '' jsme museli použit, pokud příkaz již je jednou v ""
// Přesněji řečeno uvnitř "" píšeme jednoduché '' 
function Del(a){
    output.innerHTML = a;
    j = 1;
}

function Pust(){
    console.log("Ted je funkce Pust()"); // Vypsání do konzole, že byla spuštěna funkce Pust()
}