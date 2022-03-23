let Result = "X";
var num;
var multiplier;
for(num =0; num<=10; num++){
  for(multiplier =0; multiplier<=10; multiplier++){
    if(num==0 && multiplier>0){
      Result +=  "(" +  multiplier  + ")" + " " ;
    }
    else if(multiplier==0 && num>0){
      Result += "(" + num + ")"  ;
    }
    else if (num>0 && multiplier>0){
      Result += (num * multiplier) + "  " ;
    }
  }
   Result += '\n'
}
console.log(Result);




        
       
       
     