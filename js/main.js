// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
if(toggle){
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}