const departmentLinks = document.querySelectorAll(".department-link");

departmentLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    departmentLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");

    const department = this.getAttribute("data-department");

    document
      .querySelectorAll(".header__department-categories")
      .forEach((cat) => {
        cat.classList.remove("active");
      });

    document
      .querySelector(
        `.header__department-categories.header__department--${department}`
      )
      .classList.add("active");
  });
});

document
  .querySelector(".header__categories-dropdown")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });
