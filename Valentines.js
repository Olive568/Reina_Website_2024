function showRadioButtons() {
    document.getElementById("mainContent").style.display = "none"; // Hide main content
    document.getElementById("radioButtons").style.display = "block"; // Show radio buttons
    document.getElementById("obey").style.display = "none"
    document.getElementById("begging").style.display = "none"
}
function hideCurrentPage(element) {
    element.style.display = "none";
}
function submitReasons() {
    document.getElementById("radioButtons").style.display = "none";
    document.getElementById("dates").style.display = "block";
}
function backtostart(button){
    document.getElementById("radioButtons").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}
function backtostartmenu(button){
    hideCurrentPage(button.parentElement);
    document.getElementById("mainContent").style.display = "block";
}
function imagemenu(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("image_menu").style.display = "block";
}


function showYesPopup()
{
    document.getElementById("sorry").style.display = "none";
    document.getElementById("please").style.display = "block"
}
function skip(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("menu").style.display = "block";
}
function submitDate()
{
    document.getElementById("dates").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
function goback(button){
    hideCurrentPage(button.parentElement);
        document.getElementById("menu").style.display = "block";
}
function menuletters(button, letterNumber) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_" + letterNumber).style.display = "block";
}

function begging(button)
{
    hideCurrentPage(button.parentElement);
    document.getElementById("begging").style.display = "block";
}