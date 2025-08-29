let heartCount = 0;
        let copyCount = 0;
        let coinCount = 100;

        const heartCounter = document.getElementById("heart-count");
        const coinCounter = document.getElementById("coin-count");
        const copyCounter = document.getElementById("copy-count");
        const historyList = document.getElementById("history-list");
        const clearBtn = document.getElementById("clear-history");

        // ❤️ Heart Button Functionality
        const heartBtns = document.querySelectorAll(".heart-btn");
        for (let i = 0; i < heartBtns.length; i++) {
            heartBtns[i].addEventListener("click", function () {
                heartCount++;
                heartCounter.textContent = heartCount;
            });
        }
