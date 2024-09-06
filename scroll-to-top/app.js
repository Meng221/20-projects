const topBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener('scroll', showbtn);

topBtn.addEventListener('click', scrollToTop);

function showbtn() {
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    if (rootEl.scrollTop / scrollTotal > 0.3) {
        topBtn.classList.add("show-btn");
    }else {
        topBtn.classList.remove("show-btn");
    }
}

function scrollToTop() {
    rootEl.scrollTo({
        top:0,
        behavior: "smooth"
    })
}