    const textDisplay = document.getElementById('text')
    const phrases = ["of your offerings", "or your tithes", "or the shekels you have to pay"]

    function loop () {

        if (i < phrases.length) {
            console.log(phrases[i])
            if (j < phrases[i].length)
            console.log(phrases[i][j])
        }
    }

        function myFunction() {
            var Gender = document.getElementById("gender").value;

            var Age = document.getElementById("age").value;


            if (Gender == "Male" && (Age >= 1 && Age < 5)) {
                swal('Offering is 5 shekels of silver')

            }
            else if (Gender == "Female" && (Age >= 1 && Age < 5)) {
                swal("Offerring is 3 Shekels of Silver");
            }
            else if (Gender == "Male" && (Age >= 5 && Age < 20)) {
                swal("Offerring is 20 Shekels of Silver");
            }
            else if (Gender == "Female" && (Age >= 5 && Age < 20)) {
                swal("Offerring is 10 Shekels of Silver");
            }
            else if (Gender == "Male" && (Age >= 20 && Age < 60)) {
                swal("Offerring is 20 Shekels of Silver");
            }
            else if (Gender == "Female" && (Age >= 20 && Age < 60)) {
                swal("Offerring is 15 Shekels of Silver");
            }
            else if (Gender == "Male" && (Age >= 60)) {
                swal("Offerring is 15 Shekels of Silver");
            }
            else if (Gender == "" || Age == "") {
                swal("Fill up that shit");
            }
            else {
                swal("Offerring is 10 Shekels of Silver");
            }

        }
   

    
