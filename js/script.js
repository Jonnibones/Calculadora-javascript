
//Recebe os elementos
let btns = document.getElementsByClassName("button");
let display = document.getElementById("display");

//Laço para a quantidade de botões    
for (let i = 0; i < btns.length; i++) 
{
    //Recebe o valor de 1 botão
    const btn = btns[i];

    //Função responsável 
    function show() 
    {
        //Display da calculadora recebe o valor dos botões e imprimi no html
        display.innerHTML = display.innerHTML + btn.innerHTML;
        
        //Passar a string para um array
        expression =  display.innerHTML; 
        let caracteres = expression.split("")
         
        //Separa os números dos sinais
        for (let index = 0; index < caracteres.length; index++) {

            var num1 ;
            var num2 ; 
            var op; 

            const element = caracteres[index];

            if(op != null && op.length > 0)
            {
                if (isNaN(element) == false) 
                {
                    num1 = element;
                }else
                {
                    op = element;
                }
            }else
            {
                num2 = element;
            }

           
        }

        console.log(num1);
        console.log(op);
        console.log(num2);
             
    }

    
    btn.addEventListener("click", show);

}



        

