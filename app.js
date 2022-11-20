


// $("button").addEventListener("click",   fetchData);
document.getElementById("btn").addEventListener("click", getQuestion);

var correctAnswer;



listeners();

function getQuestion(){

 $(".btn-options").css("background-color","#ff6f3c")
 $(".btn-options").css("visibility","visible")



    let xhr = new XMLHttpRequest()

    xhr.open("get", "https://opentdb.com/api.php?amount=1&type=multiple", true)

    xhr.onload = function(){
        if(xhr.status == 200){

            const obj = JSON.parse(this.response)
            //console.log(obj);
            const question = obj.results[0].question
           
            $("p").text(" \""+question+"\" ");
            $("p").css({"font-style":"italic"})
            var options = [];
            options.push(obj.results[0].correct_answer);
            options.push(obj.results[0].incorrect_answers[0]);
            options.push(obj.results[0].incorrect_answers[1]);
            options.push(obj.results[0].incorrect_answers[2]);
            shuffleArray(options);
           // console.log(options);

            correctAnswer = obj.results[0].correct_answer;

            console.log("correct answer is: " + correctAnswer)

            for (let i = 0; i<5; i++){
                $("#"+(i+1)).text(options[i]);
            }
        }
        
    }
    xhr.send()
}


function listeners(){
    const btns = document.getElementsByClassName("btn-options");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", checkAnswer);
    }
}

function checkAnswer(){
console.log(this.innerHTML);
console.log(correctAnswer)

if (this.innerHTML === correctAnswer){

    const btn_list = document.querySelectorAll(".btn-options");
  
    for (let i = 0; i < btn_list.length ;i++){
        console.log(btn_list[i])
        
        if (btn_list[i].innerHTML === correctAnswer){
           // $(this).css("background-color", "hsl(92, 76%, 65%)")
            btn_list[i].style.backgroundColor = "hsl(92, 76%, 65%)";
        }else{
            btn_list[i].style.backgroundColor = "#ff703c80";
        }
        
    }


    console.log(this)
    //$(this).css("background-color", "hsl(92, 76%, 65%)")


} else {
    console.log("no!")

}

}


// Array shuffle method found online....

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


