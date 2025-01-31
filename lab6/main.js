$(document).ready(function() {
    $("#animateButton").click(function() {
        $("#brownSquare").fadeOut(500, function() {
            $(this).css("left", "+=50px").fadeIn(500, function() {
                $(this).animate({ width: "100px", height: "100px" }, 500, function() {
                    $(this).animate({ top: "+=100px" }, 500, function() {
                        $(this).css("background-color", "red");
                        $(this).fadeOut(1000);
                    });
                });
            });
        });
    });
});
