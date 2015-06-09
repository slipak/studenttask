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
      console.log(this);
    }
  }).addClass('Woo');

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();



  // accordion
  //-----------------------------------------------------------------------------

  $('.accordion-item header').on('click', function (evt) {
    evt.preventDefault();
    var $this = $(this),
        $thisItem = $this.closest('.accordion-item'),
        $itemSiblings = $this.closest('.accordion-item').siblings(),
        thisId = $this.closest('.accordion-item').attr('id'),
        $itemSiblingsContent = $this.closest('.accordion-item').siblings().find('.content-block'),
        $itemContent = $thisItem.find('.content-block');
    if(! $itemContent.is('visible')) {
      $itemSiblings.find('header').removeClass('active');
      $this.addClass('active');
      $itemSiblingsContent.slideUp();
      $itemContent.slideDown();
      $('.top-nav').find('a').removeClass('active');
      $('.top-nav').find('[data-accordion="#' + thisId +'"]').addClass('active');
    }
  });

  $('[data-accordion]').on('click', function(evt){
    evt.preventDefault();
    var $this = $(this),
        $thisData = $($this.data('accordion')),
        $thisDataContent = $thisData.find('.content-block');
//    console.log($thisData);
    if(! $this.hasClass('active')) {
      $thisData.siblings().find('.content-block').slideUp();
      $thisDataContent.slideDown();
      $thisData.siblings().find('header').removeClass('active');
      $thisData.find('header').addClass('active');
      $thisDataContent.slideDown();
      $this.closest('li').siblings().find('a').removeClass('active');
      $this.addClass('active');
    }
  });


  $('.top-nav li li').on('click', function (evt) {
    evt.preventDefault();
    var $this = $(this);
      if(! $this.closest('ul').siblings('a').hasClass('active')) {
        $this.closest('ul').siblings('a').trigger('click');
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

       var form = $(this);

       if( app.validateForm(form) === false ) {
       alert('Error!');
       return false;

       };

       alert('Succes!');
       },



       validateForm: function (form){
       var inputs = form.find('input'),
       valid = true;


       var regUsername = /^[A-Za-z0-9 ]{1,10}$/,
           validEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
           validDate =  /^(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?(((19)|(20))?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$/;


           inputs.parents('.form-field').find('.validation-block').remove();

         var username = $('input[name=username]');
         var usernameVal = username.val();
         var email = $('input[name=email]');
         var emailVal = email.val();
         var date = $('input[name=date]');
         var dateVal = date.val();
         var formField = username.closest('.form-field'),
         label = formField.find('label').text().toLowerCase(),
         textError = '* Please enter a valid ' + label;


         if(!regUsername.test(usernameVal)){
         username.closest('.form-field').addClass('has-error').removeClass('has-success');
         username.closest('.form-field').append('<div class="col-xs-12 col-sm-4 validation-block">* Please enter a valid name</div>');
         valid = false;
         } else{
         username.closest('.form-field').find('.validation-block').remove();
         username.closest('.form-field').addClass('has-success').removeClass('has-error');
         }

         if(!validEmail.test(emailVal)){
         email.closest('.form-field').addClass('has-error').removeClass('has-success');
         email.closest('.form-field').append('<div class="col-xs-12 col-sm-4 validation-block">* Please enter a valid email</div>');
         valid = false;
         } else{
         email.closest('.form-field').parents('.form-field').find('.validation-block').remove();
         email.closest('.form-field').addClass('has-success').removeClass('has-error');
         }

         if(!validDate.test(dateVal)){
         date.closest('.form-field').addClass('has-error').removeClass('has-success');
         date.closest('.form-field').append('<div class="col-xs-12 col-sm-4 validation-block">* Please enter a valid date of birth</div>');
         valid = false;
         } else{
         date.closest('.form-field').parents('.form-field').find('.validation-block').remove();
         date.closest('.form-field').addClass('has-success').removeClass('has-error');
         }

         return valid;
        },

        removeError: function () {
        $(this).parents('.form-field').addClass('has-success').removeClass('has-error')
        $(this).parents('.form-field').find('.validation-block').remove();
        }
      };

    app.init();


  })();

});
