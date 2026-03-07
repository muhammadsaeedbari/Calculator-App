


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
        output.value= eval(userinp.value.replace(/\b0+(?=\d)/g, '')).toLocaleString()
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

    var slicedValue = output.value.slice(0, -1).replace(/,/g , "");
    

    var x = Number(slicedValue)

    
    userinp.value = x.toLocaleString()
    output.value = userinp.value
    if(userinp.value ==="0" && output.value === "0"){
        userinp.value = ""
        output.value = ""
    }

}



