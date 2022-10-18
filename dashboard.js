
function next(){
   document.getElementById('slide2').src = "./image/slide1.jpg";


}

function back(){
    document.getElementById('slide2').src = "./image/gify.gif";
}

/*================SLIDE SHOW IMAGE ===============*/
var i = 0;
var images = [];
var time = 2000;


images[0] = './image/1.jpg';
images[1] = './image/2.jpg';
images[2] = './image/3.jpg';
images[3] = './image/4.webp';
images[4] = './image/5.jpg';
images[5] = './image/6.jpg';
images[6] = './image/7.jpg';
images[7] = './image/8.jfif';
images[8] = './image/9.jpg';



function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

    window.onload = changeImg;