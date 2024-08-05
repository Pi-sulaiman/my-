// function EXPbtn(){
//   const myTimeout11 = setTimeout(myGreeting11, 800);
      
//       function myGreeting11() {
//         document.getElementById("text3").style.display = "block"
//       }
//   const myTimeout = setTimeout(myGreeting, 1900);
      
//       function myGreeting() {
//         document.getElementById("text5").style.display = "block"
//       }
//                   const myTimeout1 = setTimeout(myGreeting1, 3800);
      
//       function myGreeting1() {
//         document.getElementById("text7").style.display = "block"
//       }
//                   const myTimeout2 = setTimeout(myGreeting2, 2800);
      
//       function myGreeting2() {
//         document.getElementById("text1").style.display = "block"
//       }
//                   const myTimeout3 = setTimeout(myGreeting3, 1800);
      
//       function myGreeting3() {
//         document.getElementById("text4").style.display = "block"
//       }
//                   const myTimeout4 = setTimeout(myGreeting4, 4300);
      
//       function myGreeting4() {
//         document.getElementById("text6").style.display = "block"
//       }
//                   const myTimeout5 = setTimeout(myGreeting5, 5100);
      
//       function myGreeting5() {
//         document.getElementById("text11").style.display = "block"
//       }
  
// }
// let cursor = document.getElementsByClassName("cursor")


// const Sg = document.querySelector('.workRevealWrapper .section.section--2 img')
// var projectWrapper = document.getElementsByClassName("projectWrapper");

// for(i=0;i<projectWrapper.length;i++){
//   projectWrapper[i].addEventListener('click',function(event){

//     var pn = this.getElementsByClassName("projectName")[0].innerText
//     var pn_text = 'Virtual Staff\nVirtual Staff'

//     if(pn.includes(pn_text)) {

//   Sg.setAttribute("id", "vsimg")
//   Sg.style.height = '80vh'
//   Sg.style.width = 'auto'
  
//   }else{
//     Sg.setAttribute("id", "vsimg")

//   }

//   })
// }
// var iframe = document.getElementsByClassName('iframemyimg')[0];
// var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
// iframeDoc.body.style.cursor = 'none !important';



//   function bigImg() {
//     for (i=0;i<cursor.length;i++){
//     cursor[i].style.setProperty("visibility", "hidden", "important");

//     }
//   }
  
//   function normalImg() {
//     for (i=0;i<cursor.length;i++){
//     cursor[i].style.setProperty("visibility", "visible", "important");
//   }
// }
// let elements = document.querySelectorAll(".rolling-text");

// elements.forEach((element) => {
//   let innerText = element.innerText;
//   element.innerHTML = "";

//   let textContainer = document.createElement("div");
//   textContainer.classList.add("block");

//   for (let letter of innerText) {
//     let span = document.createElement("span");
//     span.innerText = letter.trim() === "" ? "\xa0" : letter;
//     span.classList.add("letter");
//     textContainer.appendChild(span);
//   }

//   element.appendChild(textContainer);
//   element.appendChild(textContainer.cloneNode(true));
// });

// elements.forEach((element) => {
//   element.addEventListener("mouseover", () => {
//     element.classList.remove("play");
//   });
// });


// // study
// let pbtn = document.getElementsByClassName("progress--button")[0];
// pbtn.style.display = "none";
// $( document ).ready(function() {

// pbtn.style.display = "block";
// });
// // study