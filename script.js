Subscribe = document.getElementById("Subscribe");
Subscribed = false;

Subscribe.addEventListener("click", function(){
    if(Subscribed == false){
        Subscribe.innerHTML = "Subscribed";
        Subscribe.style.backgroundColor = "#f3f2f3";
        Subscribe.style.color = "#0f0f0f";
        Subscribed = true;
    }
    else{
        Subscribe.innerHTML = "Subscribe";
        Subscribe.style.backgroundColor = "#0f0f0f";
        Subscribe.style.color = "white";
        Subscribed = false;
    };
});