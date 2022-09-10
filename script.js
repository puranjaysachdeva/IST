function validate()
{
 var name1=document.getElementById("name").value;
 var phone1=document.getElementById("phone").value;
 var email1=document.getElementById("email").value;
 var message1=document.getElementById("message").value;

 if (name1.length<3)
 {
        Text="please enter full name";
        success.innerHTML=Text;
        return false;
 }
if(isNaN(phone1)|| phone1.length!=10){ 
 Text="please enter valid Phone number";
        success.innerHTML=Text;
        return false;
}
if(email1.indexOf("@")==-1||email1.length<8){
 Text="please enter valid email;"
        success.innerHTML=Text;
        return false;
}
if (message1.length<=20) {
 Text="please enter more that 20 characters";
        success.innerHTML=Text;
        return false; 
    }
  }