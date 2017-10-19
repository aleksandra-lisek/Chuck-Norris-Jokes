document.addEventListener('DOMContentLoaded', function() {

    console.log("tralalala");



    const myBox = document.querySelector(".this");
    const logo = document.querySelector(".image");

window.addEventListener("scroll", showLogo);

    function showLogo (){
            const topPos = myBox.getBoundingClientRect().top;
            const bottomPos = myBox.getBoundingClientRect().top + myBox.clientWidth;



        if (document.body.scrollTop >= topPos && document.body.scrollTop <= bottomPos) {
            logo.classList = 'show';
        }else{
            logo.classList = 'image';
        }

    }



});
