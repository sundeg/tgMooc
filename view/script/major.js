/**
 * Created by denghu on 2017/7/27.
 */
var userList = document.getElementById("list-head-user");
var user = document.getElementsByClassName("user-logo");
function changeList() {
    user[0].addEventListener("mouseover", function () {
        document.getElementById("user-list").className = "fa fa-caret-up";
    });
    user[0].addEventListener("mouseout", function () {
        document.getElementById("user-list").className = "fa fa-caret-down";
    });
}
changeList();
var myMovie = document.getElementsByClassName("major-movie");
var none = document.getElementsByClassName("bgColor");
// function playPause(n) {
//     if (myMovie[n-1].paused){
//         var none=document.getElementsByClassName("bgColor");
//         none[n-1].style.display="none";
//         myMovie[n-1].controls="controls";
//         myMovie[n-1].play();
//     }
//     else
//         myMovie[n-1].pause();
// }
var long = document.getElementsByClassName("long-content");
function Choice(n) {
    var index;
    index = n - 1;
    var Major = document.getElementsByClassName("box-item");
    for (var i = 0; i < Major.length; i++) {
        Major[i].style.backgroundColor = " rgb(239,244,247)";
        Major[i].style.color = "black";
    }
    Major[index].style.backgroundColor = "#56b92a";
    Major[index].style.color = "white";
    var Left = index * -798;
    long[0].style.left = Left + "px";
    backColor(index);
}
Choice(1);

function backColor(n) {
    var backColor = document.getElementsByClassName("sec1-content-left-bottom");
    backColor[n].addEventListener("mouseover", function () {
        document.getElementsByClassName("bgColor")[n].style.display = "none";
    });
    backColor[n].addEventListener("mouseout", function () {
        document.getElementsByClassName("bgColor")[n].style.display = "inline-block";
    });
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


//ie浏览器H5 video标签兼容
function compatibilityIE() {
    if (isIE()) {
        for (var x = 0; x < myMovie.length; x++) {
            myMovie[x].style.width = "798px";
            myMovie[x].style.height = "450px";
        }
    }
}
compatibilityIE();

function page() {
    var pageBody = document.getElementById("page-btn-all");
    var itemCount = document.getElementsByClassName("course-item").length;
    for (var x = 1; x <= parseInt(itemCount / 20); x++) {
        var span = document.createElement("span");
        span.setAttribute("class", "page-button");
        span.innerHTML = x;
        pageBody.appendChild(span);
    }
}
page();
function addBtn() {
    var pageBtn = document.getElementsByClassName("page-button");
    // alert(pageBtn.length);
    for (var a = 0; a < pageBtn.length; a++) {
        var b = a + 1;
        pageBtn[a].addEventListener("click", nextTo);
    }
}
addBtn();
document.getElementsByClassName("page-button")[0].style.backgroundColor = 'rgb(86,185,42)';
document.getElementsByClassName("page-button")[0].style.color = "white";

function nextTo(n) {
    var clickCount = this.innerHTML;
    // alert(clickCount);
    var courseDetails = document.getElementsByClassName("course-details");
    var distance = -1256;
    var pageBtn1 = document.getElementsByClassName("page-button");
    // alert(courseDetails.length);
    courseDetails[0].style.top = (clickCount - 1) * distance + "px";
    for (var num = 0; num < pageBtn1.length; num++) {
        pageBtn1[num].style.backgroundColor = 'rgb(237,244,249)';
        pageBtn1[num].style.color = "black";
    }
    pageBtn1[clickCount - 1].style.backgroundColor = 'rgb(86,185,42)';
    pageBtn1[clickCount - 1].style.color = "white";


}
function nextPage() {
    var courseDetails2 = document.getElementsByClassName("course-details");
    var Top = courseDetails2[0].style.top;
    var top1;
    if (Top.length > 8) {
        top1 = 1 * Top.substring(0, 6);
    }
    else if (Top.length < 4) {
        top1 = Top.substring(0, 1);
    }
    else {
        top1 = Top.substring(0, 5);
    }
    // alert(top1);
    var nowData;
    var now = document.getElementsByClassName("page-button");
    for (var num1 = 0; num1 < now.length; num1++) {
        // alert(now[num1].style.color);
        if (now[num1].style.color == "white") {
            nowData = now[num1].innerHTML;
            break;
        }
        else {
            nowData = 1;
        }
    }
    // alert(nowData);
    if (nowData < now.length) {
        for (var num2 = 0; num2 < now.length; num2++) {
            now[num2].style.backgroundColor = 'rgb(237,244,249)';
            now[num2].style.color = "black";
        }
        now[nowData].style.backgroundColor = 'rgb(86,185,42)';
        now[nowData].style.color = "white";
        // alert(top1+(-1255)+"px");
        courseDetails2[0].style.top = top1 - 1256 + "px";
    }
    else {
        alert("已到达最后一页!");
    }
}







function page1() {
    var pageBody1 = document.getElementById("page-btn-all2");
    var itemCount1 = document.getElementsByClassName("career-item").length;
    for (var x1 = 1; x1 <= parseInt(itemCount1 /12); x1++) {
        var span = document.createElement("span");
        span.setAttribute("class", "page-button1");
        span.innerHTML = x1;
        pageBody1.appendChild(span);
    }
}
page1();
function addBtn1() {
    var pageBtn1 = document.getElementsByClassName("page-button1");
    // alert(pageBtn.length);
    for (var a1 = 0; a1 < pageBtn1.length; a1++) {
        var b1 = a1 + 1;
        pageBtn1[a1].addEventListener("click", nextTo1);
    }
}
addBtn1();
document.getElementsByClassName("page-button1")[0].style.backgroundColor = 'rgb(86,185,42)';
document.getElementsByClassName("page-button1")[0].style.color = "white";

function nextTo1(n) {
    var clickCount1 = this.innerHTML;
    // alert(clickCount);
    var careerDetails = document.getElementsByClassName("career-details");
    var distance1 = -942;
    var pageBtn2 = document.getElementsByClassName("page-button1");
    // alert(courseDetails.length);
    careerDetails[0].style.top = (clickCount1 - 1) * distance1 + "px";
    for (var num3 = 0; num3 < pageBtn2.length; num3++) {
        pageBtn2[num3].style.backgroundColor = 'rgb(237,244,249)';
        pageBtn2[num3].style.color = "black";
    }
    pageBtn2[clickCount1 - 1].style.backgroundColor = 'rgb(86,185,42)';
    pageBtn2[clickCount1 - 1].style.color = "white";


}
function nextPage1() {
    var careerDetails2 = document.getElementsByClassName("career-details");
    var Top1 = careerDetails2[0].style.top;//-1844px
    // alert(Top1);
    // alert(Top1.length);

    var top2;
    if (Top1.length ==6) {
        top2 = 1 * Top1.substring(0, 4);
    }
    else if (Top1.length ==4) {
        top2 = Top1.substring(0, 1);
    }
    else if (Top1.length ==7) {
        top2 = Top1.substring(0, 5);
    }
    else{
        top2 = 0;
    }
    // alert(top2);
    var nowData1;
    var now1 = document.getElementsByClassName("page-button1");
    for (var num4 = 0; num4 < now1.length; num4++) {
        // alert(now[num1].style.color);
        if (now1[num4].style.color == "white") {
            nowData1 = now1[num4].innerHTML;
            break;
        }
        else {
            nowData1 = 1;
        }
    }
     // alert(nowData1);
    if (nowData1 < now1.length) {
        for (var num5 = 0; num5 < now1.length; num5++) {
            now1[num5].style.backgroundColor = 'rgb(237,244,249)';
            now1[num5].style.color = "black";
        }
        now1[nowData1].style.backgroundColor = 'rgb(86,185,42)';
        now1[nowData1].style.color = "white";
        // alert(top1+(-1255)+"px");
        careerDetails2[0].style.top = top2 -942 + "px";
    }
    else {
        alert("已到达最后一页!");
    }
}

function scroll() {
  if(document.body.scrollTop>0){
      alert(document.body.scrollTop );
  }
    alert(document.body.scrollTop );
}
scroll();













function contentScroll(n) {
    var content = document.getElementById("container-scroll");
    if (n==1) {
        document.getElementById("career-page").style.color = "black";
        document.getElementById("question-bank").style.color = "black";
        document.getElementById("micro-class").style.color = "#55b932";
        content.style.left = "-100%";
        content.style.height = "auto";
    }
    else if(n==0) {
        content.style.left = "0";
        content.style.height = "1230px";
        document.getElementById("micro-class").style.color = "black";
        document.getElementById("career-page").style.color = "#55b932";
        document.getElementById("question-bank").style.color = "black";
    }
    else if(n==2){
        document.getElementById("micro-class").style.color = "black";
        document.getElementById("career-page").style.color = "black";
        document.getElementById("question-bank").style.color = "#55b932";
        content.style.left = "-200%";
        content.style.height = "auto";
    }
}
contentScroll(0);



function leftScroll() {
    document.getElementById("long").style.left = "-360px";
}
function rightScroll() {
    document.getElementById("long").style.left = "11px";
}

