/* récupération des nombres à partir du fichier html */
const finalAnswer = document.getElementById('final_answer');

const nombreZero = document.getElementById('zero');
const nombreUn = document.getElementById('one');
const nombreDeux = document.getElementById('two');
const nombreTrois = document.getElementById('three');
const nombreQuatre = document.getElementById('four');
const nombreCinq = document.getElementById('five');
const nombreSix = document.getElementById('six');
const nombreSept = document.getElementById('seven');
const nombreHuit = document.getElementById('eight');
const nombreNeuf = document.getElementById('nine');

const positif = document.getElementById('addition');
const negatif = document.getElementById('soustraction');
const division = document.getElementById('division');
const multiple = document.getElementById('multiple');
const equal = document.getElementById('equal');

let showConsole = '';
let arrayNumberMemory = [];
let numberInput = 0;

nombreZero.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "0";
    numberInput = concatNumbers(numberInput, 0);

});

nombreUn.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "1";
    numberInput = concatNumbers(numberInput, 1);

});


nombreDeux.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "2";
    numberInput = concatNumbers(numberInput, 2);

});

nombreTrois.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "3";
    numberInput = concatNumbers(numberInput, 3);

});

nombreQuatre.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "4";
    numberInput = concatNumbers(numberInput, 4);

});

nombreCinq.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "5";
    numberInput = concatNumbers(numberInput, 5);

});

nombreSix.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "6";
    numberInput = concatNumbers(numberInput, 6);

});

nombreSept.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "7";
    numberInput = concatNumbers(numberInput, 7);

});

nombreHuit.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "8";
    numberInput = concatNumbers(numberInput, 8);

});

nombreNeuf.addEventListener('click', function(){
    showConsole = finalAnswer.innerHTML = showConsole + "9";
    numberInput = concatNumbers(numberInput, 9);

});

positif.addEventListener('click', function(){
    binaryTest = verifAntiSecondSigne(showConsole);
    if(binaryTest === 1){
        showConsole = finalAnswer.innerHTML = showConsole + '+';
        arrayNumberMemory.push(numberInput);
        numberInput = 0;
        arrayNumberMemory.push('+');
    }
});

negatif.addEventListener('click', function(){
    binaryTest = verifAntiSecondSigne(showConsole);
    if(binaryTest === 1){
        showConsole = finalAnswer.innerHTML = showConsole + "-";
        arrayNumberMemory.push(numberInput);
        numberInput = 0;
        arrayNumberMemory.push('-');
    }
});

division.addEventListener('click', function(){
    binaryTest = verifAntiSecondSigne(showConsole);
    if(binaryTest === 1){
        showConsole = finalAnswer.innerHTML = showConsole + "/";
        arrayNumberMemory.push(numberInput);
        numberInput = 0;
        arrayNumberMemory.push('/');
    }
});

multiple.addEventListener('click', function(){
    binaryTest = verifAntiSecondSigne(showConsole);
    if(binaryTest === 1){
        showConsole = finalAnswer.innerHTML = showConsole + "*";
        arrayNumberMemory.push(numberInput);
        numberInput = 0;
        arrayNumberMemory.push('*');
    }
});

equal.addEventListener('click', function(){
    if(binaryTest === 1){
        arrayNumberMemory.push(numberInput);
        numberInput = 0;
        finalAnswer.innerHTML = readArray(arrayNumberMemory);
    }
});

/* Cette fonction empêche l'utilisateur d'entrer plusieurs signes 
   opérateurs à la suite. Si l'utilisateur clique sur le signe 
   égale, renvoie 2 pour afficher la réponse. */

function verifAntiSecondSigne (string){
    let lastChar = string.length - 1 ;

    if(string.substr(lastChar) === "+" || 
       string.substr(lastChar) === "-" ||
       string.substr(lastChar) === "*" ||
       string.substr(lastChar) === "/"){
           return 0 ;
       }

    else{
        return 1;
    }
};

/* Cette fonction va concaténer une unité à un chiffre */
function concatNumbers(primeNumber, inputNumber){

    if(primeNumber === 0){
        return primeNumber + inputNumber;
    }
    else{
        primeNumber*=10;
        return primeNumber += inputNumber;
    }
}

/* Cette fonction va lire le tableau à partir du dernier élément jusqu'à l'élément 0. Il va servir 
principalement à repérer les différents opérateurs. */
function readArray(inputArray){
    let leftNumber = 0;
    let rightNumber = 0;
    let operator ='';
    let result = 0;
    let finalResult = 0;

    for(let i = inputArray.length-1; i>=0; i--){
        if(inputArray[i] === '/' || inputArray[i] === '*'){
            leftNumber = inputArray[i-1];
            operator = inputArray[i];
            rightNumber = inputArray[i+1];
            result = calculTimeOrSplit(leftNumber, rightNumber, operator);
            inputArray.splice(i, 1, result);
            inputArray.splice(i+1, 1);
            inputArray.splice(i-1, 1);
            readArray(inputArray);
        }
        else if(inputArray[i] === '+'){
            leftNumber = inputArray[i-1];
            operator = inputArray[i];
            rightNumber = inputArray[i+1];
            result = calculTimeOrSplit(leftNumber, rightNumber, operator);
            inputArray.splice(i, 1, result);
            inputArray.splice(i+1, 1);
            inputArray.splice(i-1, 1);
            readArray(inputArray);
        }
        else if(inputArray[i] === '-'){
            leftNumber = inputArray[i-1];
            operator = inputArray[i];
            rightNumber = inputArray[i+1];
            result = calculTimeOrSplit(leftNumber, rightNumber, operator);
            inputArray.splice(i, 1, result);
            inputArray.splice(i+1, 1);
            inputArray.splice(i-1, 1);
            readArray(inputArray);
        }
        else if (inputArray.length === 1){
            finalResult = inputArray[0];
            return finalResult; 
        }
        else{}
    }
}

function calculTimeOrSplit(leftNumberOfArray, rightNumberOfArray, operator){
    let split = '/';
    let time = '*';
    let less = '-';
    let plus ='+';
    let leftNumber = leftNumberOfArray;
    let rightNumber = rightNumberOfArray;

    if(operator === split){
        return leftNumber / rightNumber;
    }
    else if(operator === time){
        return leftNumber * rightNumber;
    }
    else if(operator === less){
        return leftNumber - rightNumber;
    }
    else if(operator === plus){
        return leftNumber + rightNumber;
    }
}
