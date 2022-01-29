var vid2 = document.getElementById("MyVid1");
var vid=document.getElementById("MyVid2");
vid2.style.display="none";
let c=-1;
vid.addEventListener("timeupdate", function(){
// Check you time here and

if(vid.currentTime >=15 && c<=0)  // CurrentTime
{
vid.style.display = "none";
vid2.style.display="block";
c++;
vid.pause();// Stop the Video
vid2.play();

}
});
vid2.addEventListener("timeupdate",function(){
if(vid2.currentTime>=5)
{
  
    vid.style.display="block";
    vid2.style.display="none";
    vid2.pause();
    vid2.currentTime=1;
    vid.play();
    
}
});