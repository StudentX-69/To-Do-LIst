const sidebar = document.querySelector("aside");
const menuBtn = document.getElementById("menu-bar");
const projectsToggle = document.getElementById("dropdown_btn");
const personalToggle = document.getElementById("dropdown");
const projectsIcon = projectsToggle.previousElementSibling;
const personalIcon = document.getElementById("dropdown-items");
const projectItems = document.querySelectorAll(".projects");
const lightModeBtn = document.querySelector(".lightmode");
const darkModeBtn = document.querySelector(".darkmode");
const release = document.querySelector('#focus1')

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

const focusBtn = document.querySelector('#focus');
const stopBtn = document.querySelector('#focus1');

let timer;
let seconds = 0;
let isRunning = false;

// Hide stop button initially
stopBtn.style.display = 'none';

focusBtn.addEventListener('click', () => {
    // Prevent multiple intervals
    if (isRunning) return;

    isRunning = true;
    stopBtn.style.display = 'inline-block';

    timer = setInterval(() => {
        seconds++;

        focusBtn.innerHTML = `
         ${seconds}s
        `;
    }, 1000);
});

stopBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    clearInterval(timer);

    seconds = 0;
    isRunning = false;

    stopBtn.style.display = 'none';

    focusBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
    </svg>
    Focus Mode
    `;
});
function Release(){
    return release.style.opacity = 1;
}
Release();
