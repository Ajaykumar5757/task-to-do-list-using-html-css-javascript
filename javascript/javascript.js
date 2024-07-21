function add() {
    const t = document.getElementById("t1").value;
    if (t.length > 0) {
        document.getElementById("t2").innerHTML += "<div class='task' style='margin-top:10px;'>"+"<span style='border:2px solid black; background-color: white; margin-top:5px; padding:10px 50px 10px 10px;  border-radius:5px; max-width:200px;'>"+t+"</span>"+ "<button onclick='del(this)' style='background-color:rgb(37, 37, 141); color:white; padding: 10px 20px;border-radius: 10px;font-size: 15px; margin-left: 20px;'>DELETE</button></div>";
    }
    document.getElementById("t1").value = "";
}
function del(element) {
    element.parentElement.remove();
}
