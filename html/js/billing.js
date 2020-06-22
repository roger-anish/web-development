function billingFunction(){
   if(document.getElementById("same").checked){
       var shipname = document.getElementById("shippingName");
       var shipzip = document.getElementById("shippingZip");
       document.getElementById("billingName").setAttribute("value",shipname.value);
       document.getElementById("billingZip").setAttribute("value",shipzip.value);
   }
   else{
       document.getElementById("billingName").removeAttribute("value"," ");
       document.getElementById("billingZip").removeAttribute("value"," ");
   }
}