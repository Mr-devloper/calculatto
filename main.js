 const status = "connected"
{
   
function InputFocus (){
         document.querySelector('input').focus({focusVisible: true});
    }
    InputFocus();
        
        let string = "";
        let buttons =
        document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            InputFocus();
            
            string = eval(string);
            document.querySelector('input').value = string;
            lastResult = document.querySelector('input').value;
            string = lastResult;
            document.querySelector('#data').innerText = lastResult;

            InputFocus();
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
            InputFocus();

        } 
        else if(e.target.innerHTML == 'X'){
            string = string + '*';
            document.querySelector('input').value = string;
            InputFocus();

        }
        else if(e.target.innerHTML == '%'){
            string = string + '/100*';
            document.querySelector('input').value = string;
            InputFocus();

        }
        else if(e.target.innerHTML == 'D'){
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
            InputFocus();

        }

        else {
            console.log(e.target.innerHTML)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            InputFocus();
            
        }
    })
})
}