/*
$(document).ready(function(ready) {
  $('form#pig').submit(function(event) {
      var input = $('input#input_text').val()

      var new_inputs = input.split(" ")

      new_inputs.forEach(function(new_input) {
          if ((new_input[0] === 'a') || (new_input[0] === 'e') || (new_input[0] === 'i') || (new_input[0] === 'o') || (new_input[0] === 'u')) {
            new_inputs.push("ay")
          } else {
            var new_inputss = Array.from(new_input)
            new_inputss.forEach(function(brand){
              if((brand[0] !='a','e','i','o','u') || (brand[0][1] !='a','e','i','o','u') (brand[0][2] !='a','e','i','o','u')){

                alert(new_inputss)
              }
            })
          }
        })
        //console.log(new_inputs)

    //  console.log(new_inputs);

    //$('#output').text(input)

    event.preventDefault()
  })
})
*/
$(document).ready(function() {
  $('form#pig').submit(function(event) {
      event.preventDefault()
    var vowels = ['a','e','i','o','u']
    var input_val = $('input#input_text').val()
    var array_words = input_val.split(' ')
    var newSentenceList = [];
      array_words.forEach(function(array_word){
        if (vowels.includes(array_word[0])) {
          var final = array_word + "ay";
        newSentenceList.push(final);
      }else{
        newSentenceList.push(array_word);
      }

      })
      var newSentence = newSentenceList.join(" ");
      alert(newSentence);


  })
})
