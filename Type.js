const textDisplay = document.getElementById('text')
const phrases = ['of your offerings', 'of your tithes', 'or shekels to give']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  // isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()


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
   

    
