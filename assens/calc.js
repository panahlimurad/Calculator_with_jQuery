$(document).ready(function () {
 
    let firstNumber = ""
    let secondNumber = ""
    let operator = ""


    function printButton() {
        let btn = $(this)
        let text = $(this).text()
        
      if (btn.hasClass("operator")) {
            operator = text
          $(".show-calc").html(firstNumber + operator + secondNumber)
      } 
      else {
          if (operator === "") {
            firstNumber += text
            $(".show-calc").html(firstNumber + operator + secondNumber);            
          } else {
            secondNumber += text
            $(".show-calc").html(firstNumber + operator + secondNumber);          
          }

        }
    }
    
    function printResult() {
        let result;

        switch (operator) {
          case "+":
            result = +firstNumber + +secondNumber;
            break;
          case "-":
            result = +firstNumber - +secondNumber;
            break;
          case "×":
            result = +firstNumber * +secondNumber;
            break;
          case "÷":
            result = +firstNumber / +secondNumber;
            break;
          case "√":
            result = Math.sqrt(+firstNumber);
            break;
          case "%":
            result = (+firstNumber * +secondNumber) / 100;
            break;
          case "+/-":
            result = -1 * +firstNumber;
            break;
        }

        $(".show-result").html(result)

    }

    function removeDisplay(){
        firstNumber = "";
        secondNumber = "";
        operator = "";
        $(".show-calc").html("");
        $(".show-result").html("");
    }

    $(document).on("click", ".count", printButton);
    $(document).on("click", ".equal", printResult);
    $(document).on("click", ".remove", removeDisplay);

});