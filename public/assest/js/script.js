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
  $('.u-tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.u-tabs li').removeClass('current');
    $('.tabs-call').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });
});