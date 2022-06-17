// Active Class JS
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}

// 
$(document).ready(function () {
  $('.teb-holder button').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.teb-holder button').removeClass('active');
    $('.tab-main').removeClass('active');
    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
  });
});