const calculator = document.querySelector(".calculator")
const sonuc = document.querySelector(".sonuc")
const calculation = document.querySelector(".islem")
calculator.addEventListener("click", (e) => {
    //numbers
    // if (e.target.id == "asterix" || "minus" || "plus" || "div") {
    //     if (sonuc.innerText == "") {

    //     } else if (calculation.innerText) {
    //         sonuc.innerText = calculation.innerText + e.target.innerText
    //     } else if (calculation.innerText == "") {

    //     }
    // }



    if (e.target.className == "button") {
        const num = e.target.innerText
        //console.log(num);
        //console.log(sonuc);
        sonuc.innerText += num
        //oerations  
    } else if (e.target.id == "op") {
        const answer = sonuc.innerText
        const calculate = eval(answer)
        console.log(calculate);
        calculation.innerText = calculate
        sonuc.innerText = ""
        //ac buton
    } else if (e.target.id == "ac") {
        sonuc.innerText = ""
        calculation.innerText = ""
        console.log("ac");
        //percent butonu
    } else if (e.target.id == "percent") {
        const answer = sonuc.innerText
        const calculate = eval(answer / 100)
        if (!calculate) {
            calculation.innerText = "Error"
            sonuc.innerText = ""
            //console.log("win nan i 'if'de yakaladik");
        } else {
            calculation.innerText = calculate
            sonuc.innerText = ""
            console.log(calculate);
        }
        //+/- butonu
    } else if (e.target.id == "plus-minus") {
        const answer = sonuc.innerText
        const calculate = answer * (-1)
        console.log(calculate);
        if (sonuc.innerText == "") {
            //console.log(calculation.innerText);
            sonuc.innerText = calculation.innerText * (-1)


        } else if (!calculate) {
            sonuc.innerText = ""
            calculation.innerText = "Error"
        }
        else {
            calculation.innerText = calculate
            sonuc.innerText = ""
        }
    }

})

//EVAL
//let a = eval("2*2+2*3")
//console.log(a);