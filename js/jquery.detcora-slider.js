;(function($){
  $.fn.detcoraSlider  = function (options) {

    var defaults = {
//      'width': 1098,
//      'height': 340,
      'position': 'bottom',
      'bullets': true,
      'auto': true,
      'animationSpeed' : 1000,
      'pauseAnimation' : 3000,
      'autoSpeed': 4000,
      'fadeSpeed': 1000
    };

    return this.each(function () {
      if(options) {
        $.extend(defaults, options);
      }
      $(this).addClass('detcora-slider');
      $(this).children().wrapAll('<div class="slider-container"/>');

      var wrapper = $(this),
        wrapperWidth = wrapper.width(),
        container = $(this).find('.slider-container'),
        slide = container.children();

      console.log(wrapperWidth);

      wrapper.append('<a href="#" class="prev">Prev</a><a href="#" class="next">Next</a>');

      wrapper.append("<div class='nav'/>");

      var nav = wrapper.find('.nav');

      container.children().each(function(i) {
        i += 1;
        $(this).attr("data-index", i);
        if (defaults.bullets === true) {
          nav.append('<a href="#">' + i + '</a>');
        }
      });

      var Slider = function(){

//        var currentSlide = 1;
        this.slidesContainer = container;

        this.slides = container.find('div');

        this.slideCount = (this.slides.length) - 1;

        this.slideCurrentIndex = this.slides.index();

        this.navPrev = wrapper.find('a.prev');

        this.navNext = wrapper.find('a.next');

        this.bullets = wrapper.find('.nav a');

//        console.log('slideCount='+this.slideCount);
//        console.log('slideIndex='+this.slides.index());


        this.getCurrentIndex = function(){ // Index
          return this.slides.filter('.current').index();
        };

        this.calculate = function(index) {
        /*  var me = $(this),
            width = me.outerWidth(), height = me.outerHeight();

          //  Add it to the sizes list
          _.sizes[index] = [width, height];

          //  Set the max values
          if(width > _.max[0]) _.max[0] = width;
          if(height > _.max[1]) _.max[1] = height;
        */
        };

        this.go = function(index){ // Rotate images

          if(!this.slides.eq(index).length) index = 0;
          if(index < 0) index = (this.slides.length - 1);
          var target = this.slides.eq(index);
          this.slides
            .removeClass('current')
//            .fadeOut(defaults.fadeSpeed)

            .eq(index)
//            .fadeIn(defaults.fadeSpeed)
            .addClass('current');
          this.bullets
            .removeClass('current')
            .eq(index)
            .addClass('current');

        };

        this.next = function(){
          var index = this.getCurrentIndex();
          if(index === this.slideCount) {
            this.slidesContainer.animate({'margin-left': '0'}, 1000);
          } else {
            this.slidesContainer.animate({'margin-left': '-='+wrapperWidth}, 1000);
          }
          if (index < this.slideCount) {
            this.go(index + 1); // Go next
          } else {
            this.go(0); // If last go first
          }
        };

        this.prev = function(){
          var index = this.getCurrentIndex();
          if(index === 0) {
            this.slidesContainer.animate({'margin-left': '-='+wrapperWidth*this.slideCount}, 1000);
          } else {
            this.slidesContainer.animate({'margin-left': '+='+wrapperWidth}, 1000);
          }
          if (index > 0) {
            this.go(index - 1); // Go previous
          } else {
            this.go(this.slideCount); // If first go last
          }
        };


        this.pagerNav = function(){
          var index = this.getCurrentIndex();
          console.log(index);
          /*if(index === 0) {
            this.slidesContainer.animate({'margin-left': '0'}, 1000);
          } else {

            this.slidesContainer.animate({'margin-left': '-='+wrapperWidth*index}, 1000);
          }
          if (index === 0) {
            this.go(index - 1); // Go previous
          } else {
             // If first go last
          }*/
        };

        this.init = function(){


          var slideWidth = wrapper.width();
//          console.log(slideWidth);

          /*container
            .width(defaults.width)
            .height(defaults.height);*/

            slide.width(wrapperWidth);
//          this.slides.hide().first().addClass('current').show();

          this.slides.first().addClass('current');
          this.bullets.first().addClass('current');

        };

      };

      var slider = new Slider();
      slider.init();

//      slider

      slider.navNext.click(function(e){
        e.preventDefault();
        slider.next();
      });
      slider.navPrev.click(function(e){
        e.preventDefault();
        slider.prev();
      });
      slider.bullets.click(function(e){
        e.preventDefault();
//        slider.go($(this).index());
        var index = $(this).index();
        console.log(index);
        if(index === 0) {
          container.css({'margin-left': 0});
        } else {
          container.css('margin-left',0);
          container.css({'margin-left': '-='+wrapperWidth*index});
        }
      });

    });
  }
}(jQuery));