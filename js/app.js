let sections = document.querySelectorAll(".section");

function createNav(array) {
    const docFrag = document.createDocumentFragment();

    for (let index = 1; index <= array.length; index++) {
        const newLi = document.createElement("li");
        const sectionHeader = array[index - 1].querySelector("h2").innerHTML;

        newLi.id = "n" + index;
        newLi.className = "nav-item";
        newLi.innerHTML = sectionHeader;

        docFrag.appendChild(newLi);
    }

    document.querySelector(".navbar ul").append(docFrag);

};

function makeActive() {
    for (const sec of sections) {
        const value = 150;
        const box = sec.getBoundingClientRect();

        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= value && box.bottom >= value) {
            const navItem = document.getElementById("n"+ sec.id);
            //apply active state on current section and corresponding Nav link
            console.log(sec);
            // sec.classList.toggle("nav-item-active");
            navItem.classList.toggle("nav-item-active");
        } else {
            //Remove active state from other section and corresponding Nav link
        }
    }
}

addEventListener("DOMContentLoaded", (event) => { createNav(sections) });


// tested mutations on main

// // Select the node that will be observed for mutations
// const targetNode = document.querySelector("main");

// // Options for the observer (which mutations to observe)
// const config = { attributes: false, childList: true, subtree: false };

// // Callback function to execute when mutations are observed
// const callback = (mutationList, observer) => {
//   for (const mutation of mutationList) {
//     if (mutation.type === "childList") {
//       console.log("A child node has been added or removed.");
//       console.log(mutation);
//     //   sections = document.querySelectorAll(".section");
//       updateNav(document.querySelectorAll(".section"));
//     }
//   }
// };

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);