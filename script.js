var checkExist = setInterval(function() {
    let serviceColorMap = [
    {
        tag: '[PP]',
        fullName: 'Platform Portal',
        color: '#00AAFF'
    },
    {
        tag: '[AP]',
        fullName: 'Admin Portal',
        color: '#AAFF00'
    },
    {
        tag: '[FI]',
        fullName: 'Federation Issuer',
        color: '#FF00AA'
    },
    {
        tag: '[SS]',
        fullName: 'Subscription Services',
        color: '#FFAA00'
    },
    {
        tag: '[Released]',
        fullName: 'Released items',
        color: '#000'
    }];
 
   if ($('.item-card').length) {
      $.each($('.item-card'), function(ind, val){
          let title = $(val).find('h1').text();
          let $header = $(val).find('header');
           
          $.each( serviceColorMap, function( index, value ){
                setColors(value, $header, title);
          });
      });
       
      var $actions = $('.actions');
       $.each( serviceColorMap, function( index, value ){
                setLegend($actions, value);
          });
         
      clearInterval(checkExist);
   }
}, 100);
 
var setColors = function(service, $header, title){
     if(title.indexOf(service.tag) >= 0) {
          $('<span style="font-size: 2em;color:' + service.color +';line-height: 12px;">&#9632;</span>').prependTo($header);
      }
};
 
var setLegend = function($actionBar, service){
     $('<span style="font-size: 3em;color:' + service.color + ';line-height: 12px;">&#9632;</span>')
        .attr('title', service.tag + ' ' + service.fullName)
        .css('cursor', 'pointer')
        .appendTo($actionBar);
};
