;(function($){
  $.fn.detcoraSlider  = function (options) {

    var defaults = {
      autoSpeed: 1000,
      delaySpeed: 1000,
      autoPlay: false,
      bullets: true,
      customBullets: false,
      bulletsId: '#cust',
      created: function () {
      }
    };

    return this.each(function () {
      if(options) {
        $.extend(defaults, options);
      }

      var $this = $(this);
      $this.addClass('detcora-slider');
      $this.children().wrapAll('<div class="slider-track"/>');
      $this.append('<a href="#" class="prev">Prev</a><a href="#" class="next">Next</a>');
      $this.append("<div class='nav'/>");

      var $wrapper = $this,
          $container = $this.find('.slider-track'),
          nav = $wrapper.find('.nav'),
          slides = $container.children()
          ;

      slides.each(function(i) {
        i += 1;
        var mainLink = '<a href="#">' + i + '</a>';
        if (defaults.bullets) {
          nav.append(mainLink);
        }
      });

      var Slider = function () {

        this.slides = slides;

        this.slideCount = (this.slides.length) - 1;

        this.navPrev = $wrapper.find('a.prev');

        this.navNext = $wrapper.find('a.next');

        this.bullets = $wrapper.find('.nav a');

        this.getCurrentIndex = function(){ // Index
          return this.slides.filter(':visible').index();
        };


        this.go = function(index){
          this.slides
            .removeClass('current')
            .hide()
            .eq(index).addClass('current')
            .show();
          this.bullets
            .removeClass('current')
            .eq(index)
            .addClass('current');
        };





        this.prev = function () {
          var index = this.getCurrentIndex();
          if (index > 0) {
            this.go(index - 1);
          } else {
            this.go(this.slideCount);
          }
        };

        this.next = function () {
          var index = this.getCurrentIndex();
          if (index < this.slideCount) {
            this.go(index + 1);
          } else {
            this.go(0);
          }
        };



        this.init = function(){
          this.slides.hide().first().addClass('current').show();
          this.bullets.first().addClass('current');
          defaults.created(this.element);

        };

      };

      var slider = new Slider();
      slider.init();










      slider.navNext.click(function(e){
        e.preventDefault();
        slider.next();
      });
      slider.navPrev.click(function(e){
        e.preventDefault();
        slider.prev();
      });
      slider.bullets.click(function(e){  // Click numbered bullet
        e.preventDefault();
        slider.go($(this).index());
      });



      if (defaults.autoPlay) {

        var timer = function () {
          slider.next();
        };

        var interval = setInterval(timer, defaults.autoSpeed);

        $wrapper.hover(function () {
          clearInterval(interval);
        }, function () {
          interval = setInterval(timer, defaults.autoSpeed);
        });



      }

      if (defaults.customBullets === true) {
        $($(defaults.bulletsId)).hover(function () {
          clearInterval(interval);
        }, function () {
          interval = setInterval(timer, defaults.autoSpeed);
        });
        $($(defaults.bulletsId)).on('click', '.change-slide', function(e){
          e.preventDefault();
          slider.go($(this).index());
        });

      }

    });
  }
}(jQuery));