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

        // 📋 Copy Button Functionality
        const copyBtns = document.querySelectorAll(".copy-btn");
        for (let btn of copyBtns) {
            btn.addEventListener("click", function (e) {
                const card = e.target.closest(".card-body");
                const number = card.querySelector(".service-number").textContent;

                navigator.clipboard.writeText(number).then(function () {
                    alert("Number " + number + " copied to clipboard");
                    copyCount++;
                    copyCounter.textContent = copyCount;
                });
            });
        }

        // 📞 Call Button Functionality
        const callBtns = document.querySelectorAll(".call-btn");
        for (let btn of callBtns) {
            btn.addEventListener("click", function (e) {
                const card = e.target.closest(".card-body");
                const serviceName = card.querySelector(".service-name").textContent;
                const serviceNumber = card.querySelector(".service-number").textContent;

                if (coinCount < 20) {
                    alert("Not enough coins to make a call!");
                    return;
                }

                coinCount -= 20;
                coinCounter.textContent = coinCount;

                alert("Calling " + serviceName + " at " + serviceNumber);

                // Current Time
                const now = new Date();
                const time = now.toLocaleTimeString();

                // Add to History
                const div = document.createElement("div");
                div.className = "flex justify-between bg-[#FAFAFA] p-2 rounded";
                div.innerHTML = `
              <div>
                <p class="font-medium">${serviceName}</p>
                <p class="text-sm text-gray-900">${serviceNumber}</p>
              </div>
              <span class="text-md text-gray-900">${time}</span>
            `;
                historyList.prepend(div);
            });
        }

        // 🗑️ Clear History
        clearBtn.addEventListener("click", function () {
            historyList.innerHTML = "";
        });