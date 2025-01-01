let sections = document.querySelectorAll(".section");

function createNav(array) {
    const t0 = performance.now()
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
    const t1 = performance.now();
    console.log(`createNav() did take ${t1 - t0} milliseconds`);
};

function setActive(obj, boolean) {
    const t0 = performance.now();
    const objClassList = obj.classList;
    const navItem = document.getElementById("n" + obj.id);
    let alreadyActive;

    objClassList.forEach(element => {
        if (element.includes("active")) {
            alreadyActive = true;
        } else {
            alreadyActive = false;
        }
    });

    if (boolean && !alreadyActive) {
        navItem.classList.add("nav-item-active");
        obj.classList.add("section-active");

        const t1 = performance.now();
        console.log(`setActive(true) did take ${t1 - t0} milliseconds`);
    } else if (!boolean && alreadyActive) {
        navItem.classList.remove("nav-item-active");
        obj.classList.remove("section-active");

        const t1 = performance.now();
        console.log(`setActive(false) did take ${t1 - t0} milliseconds`);
    }
}

function makeActive() {
    for (const sec of sections) {
        const value = 150;
        const box = sec.getBoundingClientRect();

        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= value && box.bottom >= value) {
            setActive(sec, true);
        } else {
            setActive(sec, false);
        }
    }
}

addEventListener("DOMContentLoaded", function () {
    createNav(sections);
    window.addEventListener("scroll", makeActive);
    setActive(sections[0], true);;
})



// _____________________________________________
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
// ________________________________________________