$(document).ready(function() {
    let customDate = null; 

    
    function updateTime() {
        let now = customDate ? new Date(customDate) : new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        let date = now.toLocaleDateString('uk-UA');

        $("#clock").html(`${hours}:${minutes}:${seconds}<br>${date}`);
        
        if (customDate) {
            customDate.setSeconds(customDate.getSeconds() + 1); 
        }
    }

    setInterval(updateTime, 1000);
    updateTime(); 

    
    $(document).mousemove(function(event) {
        $("#clock").css({
            left: event.pageX + 10 + "px",
            top: event.pageY + 10 + "px",
            transform: "translate(-50%, -50%)"
        });
    });

    
    window.setCustomTime = function() {
        let userTime = prompt("Введіть час у форматі HH:MM:SS", "12:00:00");
        let userDate = prompt("Введіть дату у форматі DD.MM.YYYY", "01.01.2024");

        if (userTime && userDate) {
            let timeParts = userTime.split(":");
            let dateParts = userDate.split(".");

            if (timeParts.length === 3 && dateParts.length === 3) {
                customDate = new Date(
                    dateParts[2], dateParts[1] - 1, dateParts[0], 
                    timeParts[0], timeParts[1], timeParts[2]
                );
                updateTime();
            } else {
                alert("Некоректний формат. Спробуйте ще раз.");
            }
        }
    };
});
