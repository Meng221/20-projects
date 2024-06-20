let coupon = document.querySelector('.coupon');
let btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    coupon.select();
    coupon.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(coupon.value);
    btn.textContent = "Copied";
    setTimeout(()=>{
        btn.textContent = "Copy";
    }, 3000)
    
})