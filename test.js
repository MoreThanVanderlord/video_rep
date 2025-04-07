
<script>

$(document).ready(function() {

var width = $(window).width();

var height = $(window).height();

$(".videoBackground")

.width(width)

.height(height);

});

$(window).resize(t_throttle(function() {

var width = $(window).width();

var height = $(window).height();

$(".videoBackground")

.width(width)

.height(height);

}));

</script>
