


function userClick(value){

    userinp.value += value
    
    console.log((userinp.value));

 }

function calculate(){
   
   try{
     
    if(userinp.value==""){
        console.log("Enter Value")
        output.value = "Math Error"
    }
    else{
        output.value= eval(userinp.value).toLocaleString()
        console.log(output.value)    
    }
   }
   catch(value){
   output.value = ("invalid")

   }
}

function clearAll(){
    output.value = ""
    userinp.value = ""

}



function rootnum() {
    
    // var currentVal = userinp.value;

    if (userinp.value === "") {
        output.value = "Enter Value";
    } else {
       
        //let result = Math.sqrt(eval(currentVal));
        //output.value = result;

        output.value = Math.sqrt(eval(userinp.value))

    }
}

function clearOne(){
    console.log("Work");
    userinp.value = (userinp.value.slice(0, -1));
    output.value = userinp.value;
    //userinp.innetText = userinp.value;
}


