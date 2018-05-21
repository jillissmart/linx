<script src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>
<script>
var iframes = $('.embed-responsive iframe'),
    status = $('.status');

 $(document).ready(function() {
            // Listen for the ready event for any vimeo video players on the page
           var player = $('#player_1')[0];
            $f(player).addEvent('ready', ready);

function addEvent(element, eventName, callback) {
                if (element.addEventListener) {
                    element.addEventListener(eventName, callback, false);
                }
                else {
                    element.attachEvent(eventName, callback, false);
                }
            }

function ready(player_id) {
                console.log('ready!');
 var froogaloop = $f(player_id);

                function onPlay() {
                        froogaloop.addEvent('play', function(data) {
                            console.log('play');
$('#productCarousel').carousel('pause');
                        });
                }


                function onFinish() {
                        froogaloop.addEvent('finish', function(data) {
                            console.log('finish');
$('#productCarousel').carousel('cycle');
                        });
                }

                onPlay();
                onFinish();
            }
  });

//for thumbs and arrows
  $(document).ready(function($) {
 
$("#productCarousel").carousel({interval: 5000000});
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#productCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#productCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
});
});

</script>
<script>
$('#slider-thumbs a, .carousel-control').bind('click', function () {
    iframes.each(function() {
      var player=$f(this);
      player.api("pause");
 });



  //  return false;
});
</script>