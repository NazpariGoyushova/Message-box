const form = document.querySelector("#forum");
form.addEventListener('click',function(e){
  e.preventDefault()
 
  const message=document.querySelector("#message");
 const submit=document.querySelector("#submitBtn");
 const content=document.querySelector(".message-content");
 const feedback=document.querySelector(".feedback");
 


   if(message.value === ""){
  feedback.classList.add("active");
  setTimeout( function() {
    feedback.classList.remove("active");
  }, 4000);
 
 }
 else{
   content.textContent=message.value;
   message.value="";
 }})