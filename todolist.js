var input=document.getElementById("task");
//create button to take task from todolist 
var btn =document.createElement("button");
//set function includng the code above
btn.setAttribute('onclick', 'close()');
btn.style.width="80px";
btn.style.height="40px"
// create span to put button inside him
var spn=document.createElement("span");
spn.appendChild(btn);
function add(){
 if(input.value ==''){
     alert("please enter something")
 }else{
     var para = document.createElement("p");
     para.style.fontFamily="roboto";
     para.style.fontSize="20px";
     para.style.backgroundColor="#e3f2fd";   
     para.style.marginTop="20px";
     para.style.width="400px";
     para.style.height="40px";
    para.innerHTML =input.value;
    var spn=document.createElement("span");
    spn.appendChild(btn);
    spn.style.position="absolute";
    spn.style.marginTop="-40px";
    spn.style.marginLeft="420px";
    var element = document.getElementById("todotask");
    element.appendChild(para);
    element.appendChild(spn);
 }
    
}
