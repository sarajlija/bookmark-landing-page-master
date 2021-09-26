

const sx = ` <div class="append-items">
                <div class="append-image"><img class="image-left" src="img/illustration-features-tab-1.svg">
                        <div class="back-left"></div>
                </div>
                <div class="append-text">
                    <h3 class="text-right">Bookmark in one click</h3>
                            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
                            <button class="btn-append" type="button">More Info</button>
                </div>
            </div>`;
const sy = ` <div class="append-items">
                <div class="append-image"><img class="image-left" src="img/illustration-features-tab-2.svg">
                        <div class="back-left"></div>
                </div>
                <div class="append-text">
                    <h3 class="text-right">Intelligent search</h3>
                            <p>Our powerful search feature will help you find saved sites in no time at all.
        No need to trawl through all of your bookmarks.<br>&nbsp;gives you complete control over how you manage your favorite sites.</p>
        <button class="btn-append" type="button">More Info</button>
                </div>
            </div>`;
const sz = `<div class="append-items">
                <div class="append-image"><img class="image-left" src="img/illustration-features-tab-3.svg">
                        <div class="back-left"></div>
                </div>
                <div class="append-text">
                    <h3 class="text-right">Share your bookmarks</h3>
                            <p>Easily share your bookmarks and collections with others. Create a shareable
            link that you can send at the click of a button.<br>&nbsp;gives you complete control over how you manage your favorite sites.</p>
                            <button class="btn-append" type="button">More Info</button>
                </div>
            </div>`;
///QUESTIONS////////////////////////////////////////////////////////////////////////

const questions = document.querySelectorAll(".question-btn, .title");

questions.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget.parentElement;
                question.classList.toggle("show-text");                 
    });    
});


const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (bt) {
bt.addEventListener("click", function (e) {
 const current = e.currentTarget; 

current.classList.toggle("arrow-up");
    });
});

/////////////////SLIDER/////////
window.addEventListener('DOMContentLoaded', (event) => {
    console.log(itemOne.style.borderBottom = "2px solid hsl(0, 94%, 66%)");
  ) 
});
//THIS  scrollTo METOD RETURN PAGE ON TOP AFTER SET in css file HTML {scroll-behavior:'smooth'}
 window.scrollTo({
   top: 0,
   behavior: 'smooth'
});
const appendItems = document.querySelector(".append-items")
const changeItems = document.getElementById("change-items")
const navItem = document.querySelectorAll('.nav-item2');
const itemOne=document.querySelector('.item-1');
const itemTwo=document.querySelector('.item-2');
const itemThree=document.querySelector('.item-3');
const html = document.querySelector('html');

navItem.forEach( function(list){
    list.addEventListener("click", function(e){
    e.preventDefault();
    const currentItem= e.target;
    const slides = [sx, sy, sz];
    if(currentItem.classList.contains("item-1")){
        itemOne.style.borderBottom = "2px solid hsl(0, 94%, 66%)"
        itemTwo.style.borderBottom=""
        itemThree.style.borderBottom=""
        appendItems.innerHTML = slides[0]
       
    } else if (currentItem.classList.contains("item-2")){
        itemOne.style.borderBottom=""
        itemTwo.style.borderBottom = "2px solid hsl(0, 94%, 66%)"
        itemThree.style.borderBottom=""
        appendItems.innerHTML = slides[1]
        
    } else if (currentItem.classList.contains("item-3")){
        itemOne.style.borderBottom=""
        itemTwo.style.borderBottom=""
        itemThree.style.borderBottom = "2px solid hsl(0, 94%, 66%)"
        appendItems.innerHTML = slides[2]
       
    }


    });
});

/*SIDEBAR*////////////////////////////////////////////////////

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
  
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");

});

//VALIDATE EMAIL//////////////////////////////////////////////////
let form = document.querySelector('.form')
let button = document.querySelector('.btn-contact')
button.addEventListener('click', validateemail)
function validateemail(e) {
    e.preventDefault()
    let x = document.myform.email.value;
    let atposition = x.indexOf("@");
    let dotposition = x.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {


        document.querySelector(".error").innerHTML = "whoops, make sure it's an email";
        document.querySelector(".error").style.color = "#ffffff";
        document.querySelector(".error").style.visibility = "visible";
        document.querySelector(".icon-error").style.visibility = "visible"
        document.querySelector(".form-control").style.border = "2px solid rgb(255 52 52)";
        document.querySelector(".form-control").style.marginBottom ="0"
        document.querySelector(".btn-contact").style.border = "2px solid rgb(255 52 52)";
        }

    else {

        document.querySelector(".error").innerHTML = "Thank you!";
        document.querySelector(".error").style.visibility = "visibile";
        document.querySelector(".icon-error").style.visibility = "hidden"
        document.querySelector(".form-control").style.border = "2px solid transparent";
        document.querySelector(".btn-contact").style.border = "2px solid transparent";
      
    }

}




