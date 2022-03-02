user_name = localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("name").innerHTML = "Welcome " + user_name + "!";

function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

