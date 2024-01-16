
function add(){
    // document.body.innerhtml="";
    let array = document.body.children;
    if(!array){
        console.log("inga element");
        return;
    }
        
    for (let i = 0; i < array.length; i++) {
        console.log("tar bort "+array[i]);
        array[i].remove();   
    }

    let h1 = document.createElement("h1");
    h1.textContent="Lurad!!!!!"
    let p = document.createElement("h1");
    p.textContent="Detta är ett \'dåligt\' bibliotek";
    document.body.appendChild(h1);
    document.body.appendChild(p);
    document.body.style.backgroundColor = "red";

}