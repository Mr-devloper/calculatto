 const status = "connected"
{
        
        let string = "";
        let buttons =
        document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            
            string = eval(string);
            document.querySelector('input').value = string;
            lastResult = document.querySelector('input').value;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;

        } 
        else if(e.target.innerHTML == 'X'){
            string = string + '*';
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == '%'){
            string = string + '/100*';
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == 'D'){
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;

        }

        else {
            console.log(e.target.innerHTML)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            
        }
    })
})
}