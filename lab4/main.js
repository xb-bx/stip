$(document).ready(function () {
    let cardAttempts = 3; 
    $("#regexString").keyup(function(){
        let re = /a[a-z]+a/g;
        let results = $("#regexString").val().matchAll(re).toArray();
        $("#regexResult").empty();
        results.forEach(res => {
            let p = document.createElement("p");
            p.innerText = res[0];
            $("#regexResult").append(p);
        }); 
    });

    $("#registrationForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;
        if( $("#name").val() == "" || $("#surname").val() == "" || $("#organization").val() == "" || $("cardNumber").val() == "" || $("#phone").val() == "" || $("#email").val() == "") {
            console.log(1);
            $("#generalError").text("Заповніть усі поля").show();
            return;
        } else {
            $("#generalError").hide();
        }

        
        let name = $("#name").val().trim();
        let surname = $("#surname").val().trim();
        let nameRegex = /^[А-Яа-яІіЇїЄєҐґA-Za-z]+$/;
        if (!nameRegex.test(name)) {
            $("#nameError").show();
            isValid = false;
        } else {
            $("#nameError").hide();
        }
        if (!nameRegex.test(surname)) {
            $("#surnameError").show();
            isValid = false;
        } else {
            $("#surnameError").hide();
        }

        
        if ($("#organization").val().trim() === "") {
            $("#organizationError").show();
            isValid = false;
        } else {
            $("#organizationError").hide();
        }

        
        let cardNumber = $("#cardNumber").val().trim();
        let cardRegex = /^[0-9]{16}$/;
        if (!cardRegex.test(cardNumber)) {
            cardAttempts--;
            $("#cardError").text(`Номер карти повинен містити 16 цифр. Залишилося спроб: ${cardAttempts}`).show();
            isValid = false;
            if (cardAttempts === 0) {
                $("#cardNumber").prop("disabled", true);
                $("#cardError").text("Ліміт спроб вичерпано.").css("color", "red");
            }
        } else {
            $("#cardError").hide();
        }

        
        let phone = $("#phone").val().trim();
        let phoneRegex = /^\+380\d{9}$/;
        if (!phoneRegex.test(phone)) {
            $("#phoneError").show();
            isValid = false;
        } else {
            $("#phoneError").hide();
        }

        
        let email = $("#email").val().trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#emailError").show();
            isValid = false;
        } else {
            $("#emailError").hide();
        }

        if (isValid) {
            alert("Форма успішно надіслана!");
        }
    });

    $("#clearForm").click(function () {
        $("#registrationForm")[0].reset();
        $(".error").hide();
        cardAttempts = 3;
        $("#cardNumber").prop("disabled", false);
    });
    $("#regexString").trigger("keyup");
});
