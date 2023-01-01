
import readline from "readline-sync";
import color from "cli-color"

let a;
let b;
let r;


function main() {
  const red = color.xterm(1);
  const blue = color.xterm(31);
  const yellow = color.xterm(191);
  const green = color.xterm(79);
  const orange = color.xterm(5);



  console.clear();
  console.log(green("*************************"));
  console.log(red("   PERSONAL CALCULATOR"));
  console.log(green("*************************"));
  function aska() {
   a = readline.questionInt(blue("Enter the value of a: "));
    if (Number(a)) {
      askb()
    } else {
      aska()
    }
  }
  aska()



  function askb() {

     b = readline.question(blue("Enter the value of b: "));
    if (Number(b)) {
      operations()
    } else {
      askb()
    }
  }
  askb()


  function operations() {

    console.log(yellow(" *************\n", "Enter   for\n", "*************\n", "+      Sum\n", "-      Subtraction\n", "*      Multiplication\n", "/      Division\n", "%      Reminder\n"))
    function error() {
      r = readline.question(red("Select the operation : "));

      switch (r) {
        case "+":
          console.log(Number(a) + Number(b));
          break;
        case "-":
          console.log(green(a - b));
          break;
        case "*":
          console.log(green(a * b));
          break;
        case "/":
          console.log(green(a / b));
          break;
        case "%":
          console.log(green(a % b));
          break;
        default:
          error()

      }
    }
    error()
  }
  operations()



}



main();