function createTOC(){
  var i = 1;
  $('.toc ul').empty();
  $('.poem .title').each(function(index, t){
    if($(this).closest('.poem').is(':visible')){
      $(this).attr('id', 'poem' + i);
      $('.toc ul').append('<li><a href="#poem' + i + '">' + $(this).text() + '</a>' +
        '<span>' + $(this).closest('.poem').find('.author').text() + '</span></li>');
    }
    i += 1;
  });
}

var readingTable;

loadReading = function(d){
  $('.spinner').remove();
  $('#reading thead').append('<tr><th>title</th><th>author</th>' +
    '<th>date</th><th>rating</th><th>lname</th><th>language</th></tr>');
  function padDate(pad, num){
    num = "" + num;
    return pad.substring(0, pad.length - num.length) + num;
  }
  d.forEach(function(b){
    if (typeof b.title === 'undefined'){ return; }
    var book = $('<tr></tr>');
    book.append('<td>' + b.title + '</td>');
    book.append('<td>' + b.author + '</td>');
    book.append('<td>' + b.date + '</td>');
    book.append('<td>' + '&#9733'.repeat(b.rating.length) + '</td>');
    book.append('<td>' + b.lname + '</td>');
    book.append('<td>' + b.language + '</td>');
    $('#reading tbody').append(book);
  });
  readingTable = $('#reading').dataTable({
    "sort": true,
    "order": [[ 2, "desc" ]],
    "paging": false,
    "scrollY": 500,
    "oLanguage": {
      "sInfoFiltered": ""
    },
    "columnDefs": [
      {
        "targets": [ 4, 5],
        "visible": false
      },
      {
        "aTargets": [ 1 ],
        "iDataSort": 4 ,
      }],
    "dom": "ift"
  });
}

$(document).ready(function(){
  $('.footer-nav li').on('click', 'a', function(e){
    //if ($('#reading').length){
      e.preventDefault();
    //}
    if ($(this).closest('li').hasClass('active')){
      // pass
    } else {
      $('.footer-nav li').removeClass('active');
      $(this).closest('li').addClass('active');
      var lang = $(this).text().toLowerCase();
      if ($('#reading').length){ // page is reading
        if (lang == 'all'){
          readingTable.fnFilter('', 5);
        } else {
          readingTable.fnFilter(lang, 5);
        }
      } else {
        if (lang == 'all'){
          $('.poem').fadeIn();
        } else {
          $('.poem').hide();
          $('.poem.' + lang).fadeIn();
        }
      }
    }
    createTOC();
  });

  if ($('.poem').length){
    createTOC();
  }

  // initialize reading datatables
  if ($('#reading').length){
    // get data
    Papa.parse('{{ site.baseurl }}/public/data/reading.csv',{
      download: true,
      header: true,
      encoding: "UTF-8",
      dynamicTyping: true,
      complete: function(results) {
        loadReading(results.data);
      }
    });
  }

  // poetry links
  $('div.content').on('click', '.poem span.link', function(){
    var link = $(this).data('link');
    var $els = $('.poem span.link[data-link="' + link + '"]:visible');
    var index = $els.index($(this));
    if ($els.length < 2){
      return;
    }
    if ($els.length > index + 1){
      scrollToElement($els.eq(index + 1));
    } else {
      scrollToElement($els.eq(0));
    }
  });

  if ($('.poem').length){
    var lines = 0;
    var $poems = $('.poem .text');
    $poems.each(function(el, i){
      lines += $(this).data('lines');
    });
    console.log('poems: ', $poems.length);
    console.log('lines: ', lines);
  }
});

function scrollToElement($el){
  $('html,body').animate({scrollTop: $el.offset().top - 200}, 1000);
}
