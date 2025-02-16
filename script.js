//counter app

document.addEventListener("Counter",init);

let count = Number(sessionStorage.getItem("count")) || 0;

function init() {
    document.getElementById("count").testContent = count;
}
function increaseCount() {
    count++;
    updateCount();
}
function decreaseCount() {
    count--;
    updateCount();
}
function resetCount() {
    count=0;
    updateCount();
}
function updateCount() {
    document.getElementById("count").testContent = count;
    sessionStorage.setItem("count", count);
}  
