let arr3 = ["Basics", "Architecture", "Hardware", "Assembly", "OS", "Storage", "Programming", "Networking", "Cybersecurity",
    "Troubleshooting", "Software", "Utilities", "Power", "Benchmarking", "Semiconductors", "Electronics", "Embedded", "FPGA",
    "Certifications", "AI", "Logic", "Cloud"];

let bar = async (arr3) => {
    document.querySelectorAll(".sidebar").forEach(ele => {
        ele.innerHTML = '';

        return new Promise((resolve) => {
            // use for off lop and append all data come form arr3 in html
            //and then append html is sidebar 
            for (const item of arr3) {
                let div = document.createElement("div");
                div.classList.add("col-lg-6")
                div.classList.add("mb-4")
                div.innerHTML = `<a href="" class="text-decoration-none text-white">
                        <div class="d-flex align-items-center gap-2">
                            <img src="electronics-circuits.jpg" alt="category"
                                class="img-responsive rounded-1" width="38px" height="38px">
                            <div class="d-flex flex-column">
                                <p class="text-uppercase category">${item}</p>
                            </div>
                        </div>
                    </a>`

                ele.appendChild(div);

            }
            // select all a in sidebar and stop reload when page referesh
            ele.querySelectorAll("a").forEach(element => {
                element.addEventListener("click", function (event) {
                    event.preventDefault();
                });
            });
            resolve();
        });
    });
}

let run = async () => {
    await bar(arr3);
}
run();