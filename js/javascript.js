$(document).ready(function(){
  $('.video-small').slick();

  var toggler = document.getElementById('toggler');
  toggler.addEventListener('click', mainNavVisibleToggle);
  function mainNavVisibleToggle(e) {
    e.preventDefault();
    toggler.classList.toggle('toggler--close');
    document.getElementById('nav-main').classList.toggle('nav-main--visible');
  }
});