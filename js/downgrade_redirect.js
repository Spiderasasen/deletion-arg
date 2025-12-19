// downgrade_redirect.js
window.onload = function(){
    const params = new URLSearchParams(window.location.search);
    const downgrade = params.get("downgrade");

    if (downgrade){
        // redirect immediately to the downgraded system
        window.location.href = downgrade + ".html";
    }
};