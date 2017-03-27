$(function(){

  $('form').submit(conjugator);

  function conjugator(event) {
    event.preventDefault();
    var verb = $('#verbname').val();
    var tense = $('#tenseselecta').val();
    $('#Translation-Definition').empty();
    $('.results').empty();
    $('.results').css('background-color: red;')

    if(verb === "go"){
      $('#Translation-Definition').append('<footer class="footer">In Neapolitan the infinitive for the verb "to go" can be pronounced three different ways: "ji", "ghi", or "annare".<p>The song <a class=links href="https://www.youtube.com/watch?v=XW0W7j04iRQ" target="_blank">Funiculi, Funicula</a> has a great example of the present tense "we" or "nuje" prounciation of the verb ji.</p> <p>Listen at 1:33 in the link provided.</p></footer>');
    } if(verb === "go" && tense === "present"){
      $('.results').append('<div class="conjbox"><ul><li>io</li><li>tu</li><li>isso/essa</li><li>nuje</li><li>vuje</li><li>isse/loro</li></ul><ul class="boxtwo"><li>vaco</li><li>vaje</li><li>va</li><li>jammo</li><li>jate</li><li>vanno</li></ul></div></div>');
    } if(verb === "go" && tense === "imperfect"){
      $('.results').append('<div class="conjbox"><ul><li>io</li><li>tu</li><li>isso/essa</li><li>nuje</li><li>vuje</li><li>isse/loro</li></ul><ul class="boxtwo"><li>jevo</li><li>jive</li><li>jeva</li><li>jevemo</li><li>jiveve</li><li>jeveno</li></ul></div></div>');
    } if(verb === "have" && tense === "present") {
      $('.results').append('<div class="conjbox"><ul><li>io</li><li>tu</li><li>isso/essa</li><li>nuje</li><li>vuje</li><li>isse/loro</li></ul><ul class="boxtwo"><li>aggio</li><li>he</li><li>ha</li><li>avimo</li><li>avite</li><li>aveno</li></ul></div></div>');
    } if(verb === "be" && tense === "present") {
      $('.results').append('<div class="conjbox"><ul><li>io</li><li>tu</li><li>isso/essa</li><li>nuje</li><li>vuje</li><li>isse/loro</li></ul><ul class="boxtwo"><li>songo (so)</li><li>si</li><li>e</li><li>simmo</li><li>site</li><li>songo (so)</li></ul></div></div>');
    } if (verb === "run" && tense === "present") {
      $('.results').append('<div class="conjbox"><ul><li>io</li><li>tu</li><li>isso/essa</li><li>nuje</li><li>vuje</li><li>isse/loro</li></ul><ul class="boxtwo"><li>corro</li><li>curre</li><li>corre</li><li>currimmo</li><li>currite</li><li>correne</li></ul></div></div>');
    }

  }

  // $('.results').hover(
  //   function() {
  //     $('.boxtwo li').css('font-family: 'Ultra', serif;');
  //   // }, function() {
  //   //   $('.lowmiddle').find("div:last").remove();
  //   }
  // );



  // $('.results').hover(
  //   function() {
  //     $('.lowmiddle').append($("<div>The Neapolitan infinitive of the verb <span>BLANK</span> is BLANK</div>"));
  //   }, function() {
  //     $('.lowmiddle').find("div:last").remove();
  //   }
  // );


});