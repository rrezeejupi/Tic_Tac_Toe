document.addEventListener("DOMContentLoaded", function () {

    const boxes = this.querySelectorAll(".box");
    const turnImg = document.querySelector(".turn img");
    let isXturn = true;
    let isXturnImg = true;



    boxes.forEach(box => {
        box.addEventListener("click", function () {

            if (!box.hasChildNodes()) {
                const img = document.createElement("img");


                img.src = isXturn ? "Photos/X-icon.png" : "Photos/O-icon.png";
                img.alt = isXturn ? "X" : "O";
                img.style.width = "100%";
                img.style.height = "100%";
                isXturnImg = !isXturnImg;


                box.appendChild(img);
                turnImg.src = isXturnImg ? "Photos/Xs-turn.png" : "Photos/Os-turn.png";
                turnImg.alt = isXturnImg ? "X" : "O";

                isXturn = !isXturn;

                checkWinner();
            }
        })
    })

    const checkWinner = () => {
        let hasWin = false;

        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        let boxes = document.querySelectorAll(".box");

        for (let pattern of winPatterns) {
            let post1img = boxes[pattern[0]].querySelector("img");
            let post2img = boxes[pattern[1]].querySelector("img");
            let post3img = boxes[pattern[2]].querySelector("img");

            if (post1img !== null && post2img !== null && post3img !== null) {
                if (post1img.src === post2img.src && post2img.src === post3img.src) {
                    setTimeout(function() {alert("WINNER IS someone");},200);;
                    return;
                }
            }
    
            if ([...boxes].every(box => box.querySelector("img"))) {
                alert("It's a draw!");
            }
        }

        

    };
})