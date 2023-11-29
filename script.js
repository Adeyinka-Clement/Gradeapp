function checkValue(){
    if (num.value != ""){
        if (num.value >= 0 && num.value < 40){
            show.innerHTML = "F9😂, Dullard go and study"
            console.log("F😂, Dullard go and study");
        }
        else if (num.value >= 40 && num.value < 45){
            show.innerHTML = "E😂, Ogbon dey play"
        }
        else if (num.value >= 45 && num.value < 45){
            show.innerHTML = "E8😂, Ogbon dey play"
        }
        else if (num.value >= 80 && num.value <= 100){
            show.innerHTML = "A1🫡, Respect"
        }
        else if (num.value > 100 ){
            show.innerHTML = "Alaye, enter a valid number🤒"
        }

    }
}

