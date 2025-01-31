$(document).ready(function () {
    $("#deleteBrButton").click(function() { 
        $("br").remove();
    });
    $("#animateButton").click(function() {
        console.log("hello");
        $("#blueBlock")
            .css("background-color", "lightblue")
            .css("width", "100px")
            .css("height", "100px")
            .animate({marginTop: 200}, 1000)
            .animate({width: 75, height: 75}, 500, function() {
                $("#blueBlock")
                .css("background-color", "blue")
                .animate({marginTop: 0}, 1000)
                .animate({width: 50, height: 50}, 500, function() {
                    $("#blueBlock") .css("background-color", "black")
                })

            })
    });
    $("#check").change(function() {
        $("#hiddenInput").css("display", this.checked ? "inline-block" : "none")
    })
    $("#check").trigger("change");
    $("input[name='pizza']").on("change", function(){
        let value =  $(this).filter(':checked').val();
        $("#ownVariant").prop("disabled", value != 3);

    });
    $("input[name='pizza']").trigger("change");
});
