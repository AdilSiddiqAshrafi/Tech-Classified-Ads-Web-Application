let arr = [
    {
        name: "Quantum CPU", text: "Next-gen processing, Quantum tunneling", desc1: "20 Sep 2025", desc2: "HARDWARE",
        desc3: "Advanced computing architecture", desc4: "Silicon Valley, California, USA", img: "quantumprocessor.jpg"
    },

    {
        name: "ESP32 Dev Kit", text: "IoT, Wi-Fi, Bluetooth, Embedded", desc1: "12 Oct 2025", desc2: "EMBEDDED", desc3: "Ideal for smart device prototyping",
        desc4: "Shenzhen, Guangdong, China", img: "esp32 devkit.jpg"
    },

    {
        name: "RISC-V Board", text: "Open-source CPU, Low-power design", desc1: "05 Oct 2025", desc2: "ARCHITECTURE",
        desc3: "Great for education and research", desc4: "Zurich, Switzerland", img: "riscv.jpg"
    },
    {
        name: "NeuroMatrix A1", text: "Quantum AI chip, neural inference, ultra efficiency", desc1: "18 Nov 2025", desc2: "AI HARDWARE",
        desc3: "High‑performance core for edge AI acceleration", desc4: "Seoul, South Korea", img: "OIP22.webp"
    },
];


let loadProfiles = async (arr) => {
    // loop
    // inside loop set html to pass object data 
    // and append one by one to html
    // use asyn promises and setime for gap to function run
    return new Promise((resolve) => {
        setTimeout(() => {
            let container = document.getElementById("p-container");
            container.innerHTML = ""

            if (!arr || arr.length == 0) {
                // make div show message and append
                let div = document.createElement("div")
                div.innerHTML = `<div class="text-danger text-center"><h4>No Record Found</h4></div>`
                document.querySelector(".p-container").append(div)
            } else {
                // use foroff loop and append data
                for (const item of arr) {

                    let itemDiv = document.createElement("div");

                    itemDiv.innerHTML = `<div class="card rounded-3 bg-light d-flex flex-row align-items-center gap-3">
                      <div class="p-2 rounded-3"><a href="page1.html"><img class="ms-3"
                                  src="${item.img}" style="width: 100px; height: 160px;"
                                  alt=""></a></div>
                      <div>
                          <div class="text-green mb-3 fw-bold">${item.name} </div>
                          <p class="mt-4">${item.text}</p>
                          <div
                              class="d-flex text-sm flex-lg-row flex-column text-secondary align-items-lg-start justify-content-lg-start gap-lg-4 gap-1">
                              <div>Posted : ${item.desc1}</div>
                              <div>Category : ${item.desc2}</div>
                              <div>Type :${item.desc3}</div>
                              <div>Location :${item.desc4}</div>
                          </div>
                      </div>`;
                    //   append html in container
                    container.appendChild(itemDiv);
                }

            }
        }, 1000);
        resolve();
    })


}

let search = async (category = null, li = null) => {

    let input = document.getElementById("search");
    const handler = () => {
        let inputValue = input.value.toLowerCase();
        let filteredArr;
        if (category) {
            // If category is provided, filter by desc2 (category only)
            filteredArr = arr.filter(obj =>
                obj.desc2.toLowerCase().includes(category.toLowerCase())
            );
        }
        else if (li) {
            filteredArr = arr.filter(obj =>
                obj.desc4.toLowerCase().includes(li.toLowerCase()))
        }

        else {
            // Otherwise, filter by input field
            filteredArr = arr.filter(obj =>
                obj.name.toLowerCase().includes(inputValue) ||
                obj.text.toLowerCase().includes(inputValue) ||
                obj.desc1.toLowerCase().includes(inputValue) ||
                obj.desc2.toLowerCase().includes(inputValue) ||
                obj.desc3.toLowerCase().includes(inputValue) ||
                obj.desc4.toLowerCase().includes(inputValue)
            );
        }
        loadProfiles(filteredArr);
    };

    // Remove previous listeners to prevent stacking
    input.removeEventListener("input", handler);
    input.addEventListener("input", handler);

    // Trigger filtering right away
    handler();
};


// Array2 with name of countries and cities
let array2 = [
    {
        name: "Asia",
        cities:["Beijing","Shenzhen","Tokyo","Seoul","Bangalore","Singapore","HongKong",
        "Hanoi","Taipei","KualaLumpur"]
    },
    {
        name: "Europe",
        cities:["London","Berlin","Paris","Amsterdam","Stockholm","Helsinki","Dublin","Barcelona",
        "Munich","Zurich"]

    },
    {
        name: "USA",
        cities:["SanFrancisco","Seattle","NewYork","Austin","Boston","LosAngeles"]
    }
];

function modal() {
    let accordion = document.querySelector(".accordion");
    accordion.innerHTML = "";  // Clear the previous content

    // Loop through the array and create each accordion item
    for (let [index, item] of array2.entries()) {

        let div = document.createElement("div");
        // Use a dynamic ID for each accordion collapse section
        let collapseId = `collapse-${item.name}-${index}`;
        let headingId = `heading-${item.name}-${index}`;
        // append data with foroff lopp in html
        div.innerHTML = `
        <div class="accordion-item mb-2">
            <h2 class="accordion-header" id="${headingId}">
                <button class="accordion-button text-white fw-bold" type="button"
                    style="background-color: #1e3a8a;" data-bs-toggle="collapse"
                    data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                    ${item.name}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent=".accordion">
                <div class="accordion-body">
                    <ul style="cursor:pointer;" class="list-unstyled fs-5 px-3 py-1">
                    </ul>
                </div>
            </div>
        </div>`;

        // get ul and append citties with for in loop
        let ul = div.querySelector("ul");
        for (const itemcities of item.cities) {
            let li = document.createElement("li");
            li.classList.add("list-item");
            li.textContent = itemcities;
            ul.appendChild(li);
        }
        accordion.append(div)
    }

}
modal();
// array 3 for sidebar data
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

document.getElementById("search").addEventListener("input", search(null))

let run2 = async (category, city) => {
    await search(category, city);
}

let run = async () => {
    await bar(arr3);
    await loadProfiles(arr);
}
run();

// Attach click event to categories after rendering
document.querySelectorAll(".category").forEach(e => {
    e.addEventListener("click", (event) => {
        let category = e.innerHTML.toLowerCase();
        run2(category, null);
    });
});

// default to searching without category
document.getElementById("search").addEventListener("input", () => {
    search();
});
// Reset button when clciked inputfield is empty and all data is loaded
document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("search").value = ''
    search();
});


document.querySelectorAll(".list-item").forEach(element => {
    element.addEventListener("click", () => {
        let li = element.innerHTML.toLowerCase();
        run2(null, li);

    });
});

// hide logout btn if was not login of login then display it
let lgoutbtn = document.querySelector(".lgout-btn")
lgoutbtn.addEventListener("click", (event) => {
    event.preventDefault();
    checkLogoutButton(action = "logout");
})
checkLogoutButton();
function checkLogoutButton(action = "load") {
    if (action == "logout") {
        sessionStorage.setItem("islogin", false);
        lgoutbtn.style.display = "none";
    } else {
        let retrivedvar = sessionStorage.getItem("islogin")
        if (retrivedvar === 'true') {
            lgoutbtn.style.display = "block";
        }
    }
};


// show modal on when clcik on postnow if login if was not then redirect on lgoin page
document.querySelector(".post").addEventListener("click", (event) => {
    let userData = sessionStorage.getItem("islogin")
    console.log(userData)
    if (userData == "true") {
        event.preventDefault();
        let postModalc = new bootstrap.Modal(document.getElementById("datamodal"));
        postModalc.show();
    } else {
        window.location.href = "login.html";
        event.preventDefault();
    }

});


document.getElementById("productForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Get values from input fields
    let name = document.getElementById("name").value.trim();
    let text = document.getElementById("text").value.trim();
    let desc1 = document.getElementById("txt1").value.trim();
    let desc2 = document.getElementById("txt2").value.trim();
    let desc3 = document.getElementById("txt3").value.trim();
    let desc4 = document.getElementById("txt4").value.trim();
    let imgInput = document.getElementById("img");
    let imgFile = imgInput.files[0];

    // Convert image to Base64 string
    let reader = new FileReader();
    reader.onload = async function (e) {
        let base64Image = e.target.result;

        // Create new object with same structure as arr items
        let newItem = {
            name: name,
            text: text,
            desc1: desc1,
            desc2: desc2,
            desc3: desc3,
            desc4: desc4,
            img: base64Image
        };

        // Add new item to the array
        arr.unshift(newItem); // unshift adds to the start of array

        // Reload the profiles without refreshing the page
        await loadProfiles(arr);

        // Reset form
        document.getElementById("productForm").reset();
        document.getElementById("preview").src = "";
        document.getElementById("preview").style.display = "none";

        // Close modal if using Bootstrap modal
        let modal = bootstrap.Modal.getInstance(document.getElementById("datamodal"));
        if (modal) {
            modal.hide();
        }
    };
    reader.readAsDataURL(imgFile); // Trigger the reader
});



let imageUploader = document.getElementById("img");
let imagePreview = document.getElementById("preview");
function showImage() {
  if (imageUploader.files && imageUploader.files[0]) {
    let reader = new FileReader();

    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      imagePreview.classList.remove("d-none");
    };
    reader.readAsDataURL(imageUploader.files[0]);
  }
}
