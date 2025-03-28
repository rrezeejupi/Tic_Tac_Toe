let isXturn = true;
let isXturnImg = true;
let winner = null;
const turnImg = document.querySelector(".turn img");


document.addEventListener("DOMContentLoaded", function () {

    const boxes = this.querySelectorAll(".box");




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
                    winner = !isXturn ? "X" : "O";
                    setTimeout(function () { showPopup(`WINNER IS ${winner}`); }, 200);;
                    return;
                }
            }

            if ([...boxes].every(box => box.querySelector("img"))) {
                showPopup("It's a draw!");
            }
        }



    };



    function showPopup(message) {
        const popup = document.getElementById("popup");
        const overlay = document.querySelector(".overlay");

        popup.classList.remove("hide");
        overlay.classList.remove("hide");


        const popupImg = document.getElementById("popupimg");
            if (winner == "X") {
                popupImg.src = "Photos/X-wins.png";
        winner = null; 


            } else if (winner == "O") {

                popupImg.src = "Photos/O-wins.png";
        winner = null; 

            } else if (winner == null){

                popupImg.src = "Photos/Draw.png";
        winner = null; 

            }
    }

})


function closeFn() {
    document.getElementById("popup").classList.add("hide");
    document.querySelector(".overlay").classList.add("hide");

    const closeBtn = document.querySelector(".close-btn");


        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
            box.innerHTML = "";  // This clears all child nodes inside the box, including images
        });

        isXturn = true;
        isXturnImg = true;
        turnImg.src = "Photos/Xs-turn.png";

};


