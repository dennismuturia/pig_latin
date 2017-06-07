
$(document).ready(function() {
  $('form#pig').submit(function(event) {
      event.preventDefault()
    var vowels = ['a','e','i','o','u']
    var consonants = []
    var input_val = $('input#input_text').val()
    var array_words = input_val.split(' ')
    var newSentenceList = [];
      array_words.forEach(function(array_word){
        if (vowels.includes(array_word[0])) {
          var final = array_word + "ay";
        newSentenceList.push(final);
      }else {
        newSentenceList.push(array_word);

      }

      })
      var newSentence = newSentenceList.join(" ");
      alert(newSentence);
      })

  })
})
