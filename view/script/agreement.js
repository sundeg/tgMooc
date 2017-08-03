/**
 * Created by denghu on 2017/8/1.
 */
function leftScroll() {
    left = document.getElementById("long").style.left = "-360px";
}
function rightScroll() {
    document.getElementById("long").style.left = "11px";
}
function changeColor1(n) {
    var leave = (-1140 * n);
    var art = document.getElementsByClassName("art");
    var text = document.getElementsByClassName("text-scroll");
    text[0].style.left = leave + "px";
}
function smallIssue() {
    if (isIE()) {
        document.getElementsByClassName("andWe")[0].style.top = "-35px";
    }
}
smallIssue();
function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    }
    else {
        return false;
    }

}