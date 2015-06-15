'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}





$(function() {


  $('.main-slider').detcoraSlider({
    customBullets: true,
    bulletsId: '#secondBullets',
    autoPlay: true,
    autoSpeed: 2000,
    created: function () {
      //console.log(this);
    }
  });

  // accordion
  //-----------------------------------------------------------------------------




    var accordionItems = $('.accordion-item');
    var topNavItems = $('.top-nav ul').children();




    // local storage get active
    //-----------------------------------------------------------------------------

    var activeIndex = localStorage.getItem('activeSlide');

    topNavItems.eq(activeIndex).addClass('active');
    accordionItems.eq(activeIndex).addClass('current');

    function accordionSvitchActive(index) {
        accordionItems
            .removeClass('current')
            .eq(index).addClass('current');
        topNavItems
            .removeClass('active')
            .eq(index).addClass('active');


        // local storage rewrite index
        //-----------------------------------------------------------------------------

        activeIndex = localStorage.setItem("activeSlide", index);
    }


    $('.accordion-item header').on('click', function () {
        var thisIndex = $(this).closest('.accordion-item').index();
        accordionSvitchActive(thisIndex);
    });

    $('[data-accordion]').on('click', function(evt){
        evt.preventDefault();
        var $thisIndex = $(this).closest('li').index();
        accordionSvitchActive($thisIndex);
    });

    $('.top-nav li li').on('click', function () {
        var $thisIndex = $(this).closest('ul').siblings('a').closest('li').index();
        accordionSvitchActive($thisIndex);
    });


  // form validation
  //-----------------------------------------------------------------------------
  (function () {

    var app = {

      init: function () {
        this.setUpListeners();
      },

      setUpListeners: function () {
        $('form').on('submit', app.submitForm);
        $('form').on('keydown', 'input', app.removeError);
      },

      submitForm: function (e) {
        e.preventDefault();

        var $form = $(this);

        if( app.validateForm($form) === false ) {
          alert('Error!');
          return false;
        }

        alert('Succes!');
      },



      validateForm: function ($form){
          var inputs = $form.find('input:not(:checkbox)'),
              rules = {
                  username: /^[A-Za-z0-9 ]{1,10}$/,
                  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                  date: /^(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?(((19)|(20))?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$/
              },
              valid = true;

          var showValidationError = function(elem) {

              var formField = elem.closest('.form-field'),
                  labelText = formField.find('label').text().toLowerCase(),
                  errorBlock = '<div class="col-xs-12 col-sm-4 validation-block">* Please enter a valid ' + labelText +'</div>';


              formField.addClass('has-error').removeClass('has-success');
              formField.append(errorBlock);

              valid = false;
          };



          inputs.closest('.form-field').find('.validation-block').remove();

          $.each(inputs, function(index, elem) {
              if(!rules[$(elem).attr('name')].test($(elem).val())) {
                  showValidationError($(elem));
              }
          });

          return valid;
      },

      removeError: function () {
        var $formFiesld = $(this).closest('.form-field');
        $formFiesld.addClass('has-success').removeClass('has-error').find('.validation-block').remove();
      },



    };

    app.init();


  })();

});
