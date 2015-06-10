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


  // name for function corectly
  //-----------------------------------------------------------------------------
  function accordionMove(elem) {
    elem.siblings().find('.content-block').slideUp();
    elem.find('.content-block').slideDown();
    elem.siblings().find('header').removeClass('active');
    elem.find('header').addClass('active');
  }

  $('.accordion-item header').on('click', function () {
    var $this = $(this),
        $thisItem = $this.closest('.accordion-item'),
        thisId = $thisItem.attr('id'),
        $itemContent = $thisItem.find('.content-block');
    if(! $itemContent.is(':visible')) {
      accordionMove($thisItem);
      $('.top-nav').find('a').removeClass('active').filter('[data-accordion="#' + thisId +'"]').addClass('active');
    }
  });

  $('[data-accordion]').on('click', function(evt){
    evt.preventDefault();
    var $this = $(this),
        $thisData = $($this.data('accordion'));
    if(! $this.hasClass('active')) {
        accordionMove($thisData);
        $this.addClass('active').closest('li').siblings().find('a').removeClass('active');
    }
  });


  $('.top-nav li li').on('click', function (evt) {
    evt.preventDefault();
    var $this = $(this),
        $siblingsLink = $this.closest('ul').siblings('a');
      if(! $siblingsLink.hasClass('active')) {
        $siblingsLink.trigger('click');
      }
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

        };

        alert('Succes!');
      },



      validateForm: function ($form){
        var inputs = $form.find('input'),
            valid = true,

            // inputs
            //-----------------------------------------------------------------------------

            username = inputs.filter('[name=username]'),
            email = inputs.filter('[name=email]'),
            date = inputs.filter('[name=date]'),

            // inputs value
            //-----------------------------------------------------------------------------

            usernameVal = username.val(),
            emailVal = email.val(),
            dateVal = date.val(),

            // regExps
            //-----------------------------------------------------------------------------

            regUsername = /^[A-Za-z0-9 ]{1,10}$/,
            regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
            regDate =  /^(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?(((19)|(20))?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$/,

            // check validation
            //-----------------------------------------------------------------------------

            checkName = regUsername.test(usernameVal),
            checkEmail = regEmail.test(emailVal),
            checkDate = regDate.test(dateVal)

            ;

        // show error
        //-----------------------------------------------------------------------------

            function validationError(elem) {
              var formField = elem.closest('.form-field'),
                  labelText = formField.find('label').text().toLowerCase(),
                  errorBlock = '<div class="col-xs-12 col-sm-4 validation-block">* Please enter a valid ' + labelText +'</div>';


                  formField.addClass('has-error').removeClass('has-success');
                  formField.append(errorBlock);
                  valid = false;
            }
        // show succes
        //-----------------------------------------------------------------------------
            function validationSucces(elem){
              var formField = elem.closest('.form-field');
              formField.addClass('has-success').removeClass('has-error');
              formField.find('.validation-block').remove();
            }

        inputs.closest('.form-field').find('.validation-block').remove();


        if(checkName == false) {
          validationError(username);
        } else {
          validationSucces(username);
        }

        if(checkEmail == false) {
          validationError(email);
        } else {
          validationSucces(email);
        }

        if(checkDate == false) {
          validationError(date);
        } else {
          validationSucces(date);
        }

        return valid;
      },

      removeError: function () {
        var $formFiesld = $(this).closest('.form-field');
        $formFiesld.addClass('has-success').removeClass('has-error').find('.validation-block').remove();
      }
    };

    app.init();


  })();

});
