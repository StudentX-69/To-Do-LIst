const sidebar = document.querySelector("aside");
const menuBtn = document.getElementById("menu-bar");
const projectsToggle = document.getElementById("dropdown_btn");
const personalToggle = document.getElementById("dropdown");
const projectsIcon = projectsToggle.previousElementSibling;
const personalIcon = document.getElementById("dropdown-items");
const projectItems = document.querySelectorAll(".projects");
const lightModeBtn = document.querySelector(".lightmode");
const darkModeBtn = document.querySelector(".darkmode");

function closeSidebar() {
    sidebar.classList.add("hide");
    menuBtn.style.display = "block";
}

function openSidebar() {
    sidebar.classList.remove("hide");
    menuBtn.style.display = "none";
}

function Sidebar() {
    closeSidebar();
}

function toggleSidebar() {
    if (sidebar.classList.contains("hide")) {
        openSidebar();
    } else {
        closeSidebar();
    }
}

function dropdown_btn() {
    const isOpen = projectsIcon.textContent.trim() === "keyboard_arrow_down";

    projectItems.forEach((item) => {
        item.classList.toggle("hide-projects");
    });
    projectsIcon.textContent = isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down";
}

function dropdown() {
    const isOpen = personalIcon.textContent.trim() === "keyboard_arrow_down";

    personalToggle.classList.toggle("is-open");
    personalIcon.textContent = isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down";
}

function setTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-theme", isDark);
    lightModeBtn.classList.toggle("active", !isDark);
    darkModeBtn.classList.toggle("active", isDark);
}

closeSidebar();
