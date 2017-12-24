$(document).ready(function(){
    $(".btn-submit").click(function (e) {
        //console.log('insite submit');
        post = $('.status-box').data('markdown').parseContent();
        alert('Html Blog:'+post);
        //console.log(post);
    });
});
