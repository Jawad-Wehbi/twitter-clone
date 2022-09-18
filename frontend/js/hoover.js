const hoover_elements = document.querySelectorAll(".hoover-element");

hoover_elements.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("onhoover")
    })
    element.addEventListener("mouseout", () => {
        element.classList.remove("onhoover")
    })
})