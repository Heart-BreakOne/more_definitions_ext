const observer = new MutationObserver(() => {
    
    //document.querySelectorAll('.S8ee5.CwbYXd.wHYlTd.vk_arc').forEach(el => {
        document.querySelectorAll('.S8ee5.CwbYXd.vk_arc').forEach(el => {
        if (el.innerText.trim() === "More definitions" && !el.disabled && el.offsetParent !== null) {
            el.click();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
