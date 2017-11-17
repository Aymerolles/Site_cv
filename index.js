(function($) {
    $('input.round').wrap('<div class="round" />').each(function(){
      var input = $(this);
      var div = $(input.parent());
      var min = input.data('min');
      var max= input.data('max');
      var ratio = (input.val() - min) / (max - min);
      var couleur = input.data('color');



      var circle = $('<canvas width="200px" height="200px"/>');
      var color = $('<canvas width="200px" height="200px">');
      div.append(circle);
      div.append(color);
      var ctx= circle[0].getContext('2d');

      ctx.beginPath();
      ctx.arc(100,100,85,0,2*Math.PI);
      ctx.lineWidth = 20;
      ctx.strokeStyle='#FFF';
      ctx.shadowOffsetX =2;
      ctx.shadowBlur=10;
      ctx.shadowColor= "rgba(0,0,0,0.1)";
      ctx.stroke();

      console.log(ratio);

      var ctx= color[0].getContext('2d');
      ctx.arc(100,100,85,-1/2*Math.PI, 2*ratio*Math.PI - 1/2 *Math.PI);
      ctx.lineWidth = 20;
      ctx.strokeStyle= couleur;
      ctx.stroke();













    })
})(jQuery);
