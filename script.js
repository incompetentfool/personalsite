document.getElementById("email").addEventListener("click", function(){
    alert("vxiao@exeter.edu")
})
document.getElementById("phone").addEventListener("click", function(){
    alert("+1 (603) 978 8422")
})
document.getElementById("insta").addEventListener("click", function(){
    open("https://instagram.com/riboflavin_central/");
})
document.getElementById("linkedin").addEventListener("click", function(){
    open("https://www.linkedin.com/in/vincentxiao22/");
})

var learnmore = '<span>Hello! Welcome to my website. Choose one of the options above to learn more!</span>';
var bio = "<p>bio</p>";
var interests = '<ul style="list-style-type:square"><li style="padding-bottom:2em"><a href="https://youtu.be/aa6FCL3RM3U">Piano (Classical)</a></li><li style="padding-bottom:2em"><a href="https://youtu.be/9J9lsIosSRM?t=20">Guitar (Jazz + Classical)</a></li><li style="padding-bottom:2em"><a href="https://ftcvertex.com/">Robotics (Team Principal + Mechanical Captain)</a></li><li><a href="https://cad.onshape.com/documents/52338c10f54522f164ba9d84/w/5f0068031fdc8a05e0610021/e/8fd8371f63ec0250dd07d170">CAD (Computer Aided Design)</a></li></ul>';

document.getElementById("content").innerHTML = learnmore;

document.getElementById("bio").addEventListener("click", function(){
    document.getElementById("content").innerHTML = bio;
    document.getElementById("bio").id = "bioselect";
    document.getElementById("hobbiesselect").id = "hobbies";
})
document.getElementById("hobbies").addEventListener("click", function(){
    document.getElementById("content").innerHTML = interests;
    document.getElementById("hobbies").id = "hobbiesselect";
    document.getElementById("bioselect").id = "bio";
})