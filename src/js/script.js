document.getElementById("btn_open").addEventListener("click", open_close_menu);


var menu_side = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");


function open_close_menu() {
    body.classList.toggle("body_move");
    menu_side.classList.toggle("menu__side_move")
}