document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(
    '#darkmode-switch input[type="checkbox"]'
  );
  const rootElement = document.documentElement;

  // Function to switch themes
  function switchTheme(e) {
    if (e.target.checked) {
      rootElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark"); //
    } else {
      rootElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light"); // 
    }
  }

  // Add event listener to the toggle switch
  toggleSwitch.addEventListener("change", switchTheme);

  // Check the saved theme on page load
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    rootElement.setAttribute("data-bs-theme", "dark");
  } else {
    toggleSwitch.checked = false;
    rootElement.setAttribute("data-bs-theme", "light");
  }
});
