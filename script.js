$(document).ready(function () {

    let randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber)

    $("#formUser").on("submit", function (e) {
        e.preventDefault()
        let input = $("input[type=text]")


        let userValue = parseInt(input.val())
        if (randomNumber !== userValue) {
            input.val("")
            input.addClass("error animated bounce")

            setTimeout(function () {
                input.removeClass("error animated bounce")
            }, 1000)

        }

        if (randomNumber === userValue) {
            console.log("Bien Joué !")
            $(".fa-check-circle").show()
        }







    })


})