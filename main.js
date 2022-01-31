// function names(len, results){
//     let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     let array = [];
//     let allResults = [];

//     for(let i=0; i < results; i++){
//         for(let j = 0; j < len ; j++){
//             array.push(letters[Math.round(Math.random() * letters.length)]);
//         }
//         allResults.push(
//             array.toString().split(",").join("").toUpperCase()
//             )

//         array = []
//     }
//     console.log(allResults)
// }

// names(5, 100)

function namesVocals(len, results){
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let vocals = ['a','e','i','o','u'];
    let array = [];
    let allResults = [];

    for(let i=0; i < results; i++){
        if(i % 2 === 0){
            for(let j = 0; j < len ; j++){
                if(j % 2 == 0){
                    array.push(consonants[Math.floor(Math.random() * consonants.length)]);
                }else{
                    array.push(vocals[Math.floor(Math.random() * vocals.length)]);
                }
            }
        }else{
            for(let j = 0; j < len ; j++){
                if(j % 2 == 0){
                    array.push(vocals[Math.floor(Math.random() * vocals.length)]);
                }else{
                    array.push(consonants[Math.floor(Math.random() * consonants.length)]);
                }
            }
        }
        allResults.push(
            array.toString().split(",").join("").toUpperCase()
            )

        array = []
    }
    let result = allResults.sort();
    return result;
}

function createMenuItem(name){
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}

let mostrar = document.getElementById("mostrar");
let items = document.getElementById("resultItems");

mostrar.addEventListener('click', () => {
    items.innerHTML = "";
    let len = document.getElementById("len").value;
    let amount = document.getElementById("amount").value;
    console.log(len, amount);

    let names = namesVocals(len, amount);


    names.forEach(el => {
        items.appendChild(createMenuItem(el))
    });
})


