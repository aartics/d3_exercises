$(document).ready(function(){
    // Check Radio-box
    $(".rating input:radio").attr("checked", false);

    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
      function(){
        var userRating = this.value;
        console.log(userRating);
    }); 
});

// document.getElementById("str5").addEventListener('click', function(event) {
//     console.log(event.target)
//     document.getElementById("str5").checked = true;
// })