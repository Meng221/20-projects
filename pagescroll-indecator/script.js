const Progress = document.querySelector('.progress');
window.onscroll =()=>scrollProgress();

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercenttage = (scrollTop / pageHeight)*100;
    Progress.style.visibility = "visible";
    Progress.style.width = scrollPercenttage + "%";

    console.log(scrollPercenttage);
}