
 function calculer_err(){
    x1 = document.getElementById("point").value;
    if(x1 == ""){
        document.getElementById("err-point").innerHTML="empty";
        return 0; 
    }else if(isNaN(x1)){
        document.getElementById("err-point").innerHTML="EROUR493"; 
        return 0;
    }else{
        document.getElementById("err-point").innerHTML="";
       return 1;

    }
 }
function calculer(){
    if(calculer_err()){
        let val=0,a=0,b=0,c=0;
        val=x1;
        c=x1;
        x1*=4.83;
        document.getElementById("brut").value=x1;
        a=x1*0.13;
        b+=a;
        document.getElementById("prime").value=a;
        a+=x1;
        a*=0.06;
        document.getElementById("retrait").value=a;
       x1=(x1+b)*0.025;
         document.getElementById("meturelle").value=x1;
         val=IR(val); 
         document.getElementById("impot").value=val;
         let net=0;
         net=c*4.83+c*4.83*0.13-val-x1-a;
         document.getElementById("net").value=net;
    }
}
function IR(salair){
let num=0;
num=(salair*(4.83)+salair*(4.83)*0.13)*12;

if(num<=28000){
    return 0;
}
else if(num>28000 && num<=40000){
    return ((num*0.12)-3360)/12;
}
else if(num>40000 && num<=50000){
return ((num*0.24)-8160)/12;
}
else if(num>50000 && num<=60000){
return ((num*0.34)-13160)/12;
}
else if(num>60000 && num<=150000){
return ((num*0.38)-15560)/12;
}else{
return ((num*0.40)-18560)/12;
}
}
function vide(){
    let T=["point","brut","prime","retrait","meturelle","impot","net","err-brut","err-point"];
    T.forEach(element => {
        document.getElementById(element).value="";
        if( document.getElementById(element).nodeName!="<input>"){
            document.getElementById(element).innerHTML="";
        }
    });      
}
//omar didicas
function fermer(){
    if(confirm("are you sure")){
        window.close();
    }else{
        
    }
}