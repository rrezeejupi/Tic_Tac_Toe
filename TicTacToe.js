document.addEventListener("DOMContentLoaded", function(){

    const boxes = this.querySelectorAll(".box");
    let isXturn = true;

    boxes.forEach(box=>{
        box.addEventListener("click", function(){
        
        if(!box.hasChildNodes()){
            const img = document.createElement("img");

            img.src = isXturn ? "Photos/X-icon.png" : "Photos/O-icon.png";
            img.alt = isXturn ? "X" : "O";
            img.style.width = "100%";
            img.style.height = "100%"; 


            box.appendChild(img);
            isXturn = !isXturn;
        }
        })
    })
})