var vid1 = document.getElementById("MyVid1");
var vid2 = document.getElementById("MyVid2");
vid2.style.display = "none"

vid1.onloadeddata = function() {
    vid1.currentTime = 0;
    vid1.play()
};

vid2.onloadeddata = function() {
    vid2.currentTime = 10; //Just to illusrate as begining is black screen
    vid2.pause()
};

vid1.onended = function() {
    vid2.play()
    vid1.style.display = "none"
    vid2.style.display = "block"
};
    