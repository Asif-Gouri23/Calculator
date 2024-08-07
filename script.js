/*
let input = document.querySelector('inputbox');*/
let buttons = document.querySelectorAll('button');

let string ="";

let arr= Array.from(buttons);
  const seriesContainer =    document.getElementById('series-container');
        seriesContainer.innerHTML = '0';
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
      
        if(e.target.innerHTML == '='){
            string= eval(string);
            seriesContainer.innerHTML = string;

        }
        else if(e.target.innerHTML == 'AC'){    
            string ="";
            seriesContainer.innerHTML = string+0;
        }
        else if(e.target.innerHTML == 'DEL'){ 
            string = string.substring(0,string.length-1);
            seriesContainer.innerHTML = string;
            if (string == "") {
                seriesContainer.innerHTML = string+0;

            }
        }else{
            string += e.target.innerHTML;
            seriesContainer.innerHTML = string;
        }
    

        
    })

})

