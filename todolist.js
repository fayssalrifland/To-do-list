
var input=document.getElementById("task");


//create button to take task from todolist 
var btn =document.createElement("button");


// function for button add that add text of button Add 
function add(){
 if(input.value ==''){
     alert("please enter something")  
 }else{
    //  create a div elemnt for add p elemnt and span button inside him 
    var div = document.createElement("div");
    // give a class name for div
    div.setAttribute("class","t")
    // create an elemnt p 
     var para = document.createElement("p");
     para.innerHTML =input.value;
     //create button to take task from todolist 
    var btn =document.createElement("button");
    // set a text for butto
    btn.textContent="Close";
    // set a click event button for delete an elemnt that have done with task .
    btn.onclick = function (e) {
               // event : e
        // we need to get a button from event using target 
        var button = e.target;
        // from button we need to get the parent that have a class name task
        button.closest(".t").remove();
         
    }
   
    
    // create span to put button inside him
    var spn=document.createElement("span");
    spn.appendChild(btn);

    var element = document.getElementById("todotask");
    element.appendChild(div);
    div.appendChild(para);
    spn.appendChild(checkbox);
    div.appendChild(spn);
 }    
}
