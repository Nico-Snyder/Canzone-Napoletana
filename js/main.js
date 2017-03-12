$(function(){

  $('form').submit(conjugator);

  function conjugator(event) {
    event.preventDefault();
    var verb = $('#verbname').val();
    var tense = $('#tenseselecta').val();

    if(verb === "go" || verb === "to go"){
      $('#Translation-Definition').append('<footer class="footer">In Neapolitan the verb "to go" can be pronounced three different ways: "ji", "ghi", or "annare".<p>The song <a class=links href="https://www.youtube.com/watch?v=XW0W7j04iRQ" target="_blank">Funiculi, Funicula</a> has a great example of the present tense "we" or "nuje" prounciation of the verb ji.</p> <p>Listen at 1:33 in the link provided.</p></footer>');
    } if(verb === "go" && tense === "present"){
      $('#verbbox').append('<div class="conjbox"><ul><li>io</li><li>tu</li><li>isso/essa</li><li>nuje</li><li>vuje</li><li>isse/loro</li></ul><ul class="boxtwo"><li>vaco</li><li>vaje</li><li>va</li><li>jammo</li><li>jate</li><li>vanno</li></ul></div></div>');
      $('#resetbutton').append('<input type="submit" value="Reset" id="resetactivate">');
    } if(verb === "go" && tense === "imperfect"){
      $('#verbbox').append('<div class="conjbox"><ul><li>io</li><li>tu</li><li>isso/essa</li><li>nuje</li><li>vuje</li><li>isse/loro</li></ul><ul class="boxtwo"><li>jevo</li><li>jive</li><li>jeva</li><li>jevemo</li><li>jiveve</li><li>jeveno</li></ul></div></div>');
      $('#resetbutton').append('<input type="submit" value="Reset" id="resetactivate">');
    }
  }

  $('#resetactivate').submit(reset);

  function reset(event) {
    event.preventDefault();
    console.log('you did it')
  }



});