let currency = document.getElementById("Currency Conversion");
let inputCurrency = document.getElementById("Currency Input");
let outputCurrency = document.getElementById("Currency Output");
let currencySymbol1 = document.getElementById("currency symbol 1");
let currencySymbol2 = document.getElementById("currency symbol 2");

function CurrencyConversion(){
    let currencyType = currency.selectedIndex; 
    if(currencyType == 0){
    outputCurrency.value = inputCurrency.value * 0.74;
    }
    else if(currencyType == 1){
    outputCurrency.value = inputCurrency.value * 1.35;
    }
    console.log(currencyType);
}

function CurrencyType(){
    let currencyType = currency.selectedIndex; 
    inputCurrency.value = "";
    outputCurrency.value = "";
    if(currencyType == 0){
    currencySymbol1.textContent = "$";
    currencySymbol2.textContent = "£";
    }
    else if(currencyType == 1){
    currencySymbol1.textContent = "£";
    currencySymbol2.textContent = "$";
    }
    console.log(currencyType);
}

inputCurrency.addEventListener('blur', CurrencyConversion);
currency.addEventListener('change', CurrencyType);
