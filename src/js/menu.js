const departmentLinks = document.querySelectorAll(".department-link");

departmentLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    departmentLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");

    const department = this.getAttribute("data-department");

    document.querySelectorAll(".department-categories").forEach((cat) => {
      cat.classList.remove("active");
    });

    document
      .querySelector(`.department-categories.${department}`)
      .classList.add("active");
  });
});

document
  .querySelector(".categories-dropdown")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });
