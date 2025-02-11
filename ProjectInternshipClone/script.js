document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const nestedDropdowns = document.querySelectorAll(".nested-dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      dropdown.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.querySelector(".dropdown-menu").style.display = "none";
    });
  });

  nestedDropdowns.forEach((nestedDropdown) => {
    nestedDropdown.addEventListener("mouseenter", () => {
      nestedDropdown.querySelector(".nested-dropdown-menu").style.display =
        "block";
    });

    nestedDropdown.addEventListener("mouseleave", () => {
      nestedDropdown.querySelector(".nested-dropdown-menu").style.display =
        "none";
    });
  });
});
