var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

$(function() {
  $("buttons").on({
    mouseover: function() {
      $(this).css({
        left: (Math.random() * 200) + "px",
        top: (Math.random() * 200) + "px",
      });
    }
  });
});