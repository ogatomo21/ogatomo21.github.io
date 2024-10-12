document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const nowYear = now.getFullYear();
    document.getElementById("nowYear").innerText = nowYear;
})