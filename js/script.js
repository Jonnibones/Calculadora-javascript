
//Recebe os elementos
var btns = document.getElementsByClassName("button");
var display = document.getElementById("display");
var btn_c = document.getElementById("btn_c");
var equal = document.getElementById("equal");
var expressao; 

//Laço para a quantidade de botões    
for (let i = 0; i < btns.length; i++) 
{
    //Recebe o valor de 1 botão
    const btn = btns[i];

    //Função responsável por exibir os valores no display
    function show() 
    {
        //Display da calculadora recebe o valor dos botões e imprimi no html
        display.innerHTML = display.innerHTML + btn.innerHTML;
        
        //Passar a string para um array 
        expressao = display.innerHTML.split("");

    }
    //Chamar a função pelo click dos botões
    btn.addEventListener("click", show);

}

var num1 = "";
var op = "";
var num2 = "";
var res = "";

//Função responsável por separar os caracteres e fazer o calculo entre eles 
function Calc()
{  
  //Para cada valor do array algumas verirficações são feitas   
  expressao.forEach(function(value)
  {
    
    if(op == "" )
    { 
        if(!isNaN(value))
        {
            num1 = num1 + value ;
            
        }else
        {
            op = value;
        }
    }
    else
    {
        if (!isNaN(value)) 
        {
            num2 = num2 + value ;
        }else
        {
            display.innerHTML = "ERROR";
        }
        
    }
  });

  //Verifica o operador e faz o calculo
  switch (op) 
  {
    case '+':
     res = parseInt(num1) + parseInt(num2);
    break;
    
    case '-':
     res = parseInt(num1) - parseInt(num2);
    break;

    case '/':
     res = parseInt(num1) / parseInt(num2);
    break;

    case '*':
     res = parseInt(num1) * parseInt(num2);
    break;
  }

  //Imprimi o resultado na tela
  switch (res) {
      case NaN:
          display.innerHTML = 'ERROR';
          break;

      case Infinity:
          display.innerHTML = 'ERROR';
          break; 
          
      default:
          display.innerHTML = res;
          break;
  }
  
  expressao = [res + ''];
  
  num1 = "";
  num2 = "";
  op = "";

}
equal.addEventListener("click", Calc); 

//Função responsável por zerar os displays e as variáveis
function Reset() 
{
    num1 = "";
    op = "";
    num2 = "";
    res = "";
    display.innerHTML = "";
}
btn_c.addEventListener("click", Reset); 


        

