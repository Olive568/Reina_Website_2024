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
    /*var reasons = document.querySelectorAll('input[name="reason"]:checked');
    var selectedReasons = [];
    reasons.forEach(function(checkbox) {
        selectedReasons.push(checkbox.value);
    });
    
    var emailBody = "Selected reasons:\n" + selectedReasons.join("\n");

    var mailtoLink = "mailto:luislabapis@gmail.com?subject=Valentine's Day Reasons&body=" + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;*/
    document.getElementById("radioButtons").style.display = "none";
    document.getElementById("dates").style.display = "block";
}
function showNoPopup() {
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("sorry").style.display = "block";
}
function showNoPopup2()
{
    document.getElementById("sorry").style.display = "none";
    document.getElementById("obey").style.display = "block"
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
function menu1(button) {
        hideCurrentPage(button.parentElement);
        document.getElementById("letter_1").style.display = "block";
}
function goback(button){
    hideCurrentPage(button.parentElement);
        document.getElementById("menu").style.display = "block";
}
function menu2(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_2").style.display = "block";
}
function menu3(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_3").style.display = "block";
}
function menu4(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_4").style.display = "block";
}
function menu5(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_5").style.display = "block";
}
function menu6(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_6").style.display = "block";
}
function menu7(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_7").style.display = "block";
}
function menu8(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_8").style.display = "block";
}
function menu9(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_9").style.display = "block";
}
function menu10(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_10").style.display = "block";
}
function menu11(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_11").style.display = "block";
}
function menu12(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_12").style.display = "block";
}
function menu13(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_13").style.display = "block";
}
function menu14(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_14").style.display = "block";
}
function menu15(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_15").style.display = "block";
}
function menu16(button) {
    hideCurrentPage(button.parentElement);
    document.getElementById("letter_16").style.display = "block";
}
function begging(button)
{
    hideCurrentPage(button.parentElement);
    document.getElementById("begging").style.display = "block";
}