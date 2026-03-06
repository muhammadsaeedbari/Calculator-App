


function userClick(value){
     userinp.value += value
     userinp.innerText = userinp.value
     console.log(userinp.value)
    
 }

function calculate(){
    if(userinp.value==""){
        console.log("Enter Value")
        output.value = "Math Error"
    }
    else{
        output.value= eval(userinp.value)
        console.log(output.value)

        
    }
}

function clearAll(){
    output.value = ""
    userinp.value = ""

}



function rootnum() {
    
    var currentVal = userinp.value;

    if (currentVal === "") {
        output.value = "Enter Value";
    } else {
       
        let result = Math.sqrt(eval(currentVal));
        output.value = result;
       
    }
}


