// Generated by CoffeeScript 1.7.1
(function() {
  chrome.tabs.getSelected(function(tab) {
    var url;
    url = new URI(tab.url);
    console.log(tab.url);
    console.log(tab.title);
    return console.log(url.domain());
  });

  $(function() {
    console.log('DOM ready');
    $('#send-form').validate();
    return $('form').submit(function(event) {
      var JSONdata, comment, data, from, to;
      console.log('Submitting form...');
      to = $('#to').val();
      from = $('#from').val();
      comment = $('#comment').val();
      data = {
        'From': 'mallika@mkmathur.com',
        'To': to,
        'Subject': 'test',
        'TextBody': comment,
        'ReplyTo': from
      };
      JSONdata = JSON.stringify(data);
      $.ajax({
        type: 'POST',
        url: "https://api.postmarkapp.com/email",
        data: JSONdata,
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': 'POSTMARK_API_TEST'
        }
      }).done(function(data) {
        return console.log(data);
      });
      return event.preventDefault();
    });
  });

}).call(this);
