const buttonFilterGroup = document.querySelectorAll(".filter-btn")
const carsContainer = document.querySelector(".cars-container")
buttonFilterGroup.forEach((button) => {
    button.addEventListener("click", function () {
        buttonFilterGroup.forEach(item => {
            item.classList.remove("filter-active")
        });
        this.classList.add("filter-active")

        let listCars = document.querySelectorAll(".cars-item")

        listCars.forEach(cars => {
            cars.classList.remove("d-none")
            if (this.getAttribute("data-filter") == "*") {
                cars.classList.remove("d-none")
            } else if (!cars.classList.contains(this.getAttribute("data-filter"))) {
                cars.classList.add("d-none")
            }
        });
    })
})


const identitasInput = document.querySelector("#identitas")
const noIdentitas = document.querySelector("#no-identitas")
const lampiranIdentitas = document.querySelector("#lampiran-identitas")
identitasInput.addEventListener("input", function () {
    noIdentitas.removeAttribute("disabled")
    noIdentitas.value = ""

    lampiranIdentitas.removeAttribute("disabled")
})