
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
        x1*=4.83;
        document.getElementById("brut").value=x1;
        let a=0;
        a=x1*0.13;
        let b=0;
        b+=a;
        document.getElementById("prime").value=a;
        a+=x1;
        a*=0.06;
        document.getElementById("retrait").value=a;
       x1=(x1+b)*0.025;
         document.getElementById("meturelle").value=x1; 
    }
}

// function IR(salair){
// return (salair*1.13)
// }




//vide function 
function vide(){
    let T=["point","brut","prime","retrait","meturelle","impot","net","err-brut","err-point"];
    T.forEach(element => {
        document.getElementById(element).value="";
        if( document.getElementById(element).nodeName!="<input>"){
            document.getElementById(element).innerHTML="";
        }
    });      
}
