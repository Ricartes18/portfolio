const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const resumeBtn = document.getElementById("resumeBtn");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// RESUME DOWNLOAD
if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "resources/Resume - Dungca.pdf";
        link.download = "Cedric_Dungca_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// ACTIVE NAV LINK
document.addEventListener("DOMContentLoaded", () => {
    const getCurrentPage = () => {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf("/") + 1) || "home.html";
        return page;
    };

    const currentPage = getCurrentPage();
    
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {
        const href = link.getAttribute("href");
        
        // Check if link matches current page
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});

const links = document.querySelectorAll(".top-nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
        }
    });
});