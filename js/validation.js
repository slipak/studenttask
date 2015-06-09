
// form validation
//-----------------------------------------------------------------------------


function formValidation(){

  // Make quick references to our fields
  var firstname =  document.getElementById('firstname');
  var addr =  document.getElementById('addr');
  var zip =  document.getElementById('zip');
  var state =  document.getElementById('state');
  var username =  document.getElementById('username');
  var email =  document.getElementById('email');

  //  to check empty form fields.

  */
    /*    if(username.value.length == 0){
     //      document.getElementById('head').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
     username.focus();
     return false;
     }*//*


   // Check each input in the order that it appears in the form!
   //    if(inputAlphabet(username, "* For your name please use alphabets only *")){

   if(lengthDefine(username, 1, 10)){

   if(emailValidation(email, "* Please enter a valid email address *")){

   */
    /*if(trueSelection(state, "* Please Choose any one option")){

     if(textAlphanumeric(addr, "* For Address please use numbers and letters *")){

     if(textNumeric(zip, "* Please enter a valid zip code *")){

     return true;
     }
     }
     }*//*

   }
   }
   //    }


   return false;

   }


   //  console.log(email);

   //function that checks whether input text is numeric or not.

   */
    /*  function textNumeric(inputtext, alertMsg){
     var numericExpression = /^[0-9]+$/;
     if(inputtext.value.match(numericExpression)){
     return true;
     }else{
     document.getElementById('p6').innerText = alertMsg;  //this segment displays the validation rule for zip
     inputtext.focus();
     return false;
     }
     }*//*



   //function that checks whether input text is an alphabetic character or not.

   function inputAlphabet(inputtext, alertMsg){
   var alphaExp = /^[a-zA-Z]+$/;
   if(inputtext.value.match(alphaExp)){
   return true;
   }else{
   document.getElementById('validation-2').innerText = alertMsg;  //this segment displays the validation rule for name
   //alert(alertMsg);
   inputtext.focus();
   return false;
   }
   }


   //function that checks whether input text includes alphabetic and numeric characters.

   */
    /*  function textAlphanumeric(inputtext, alertMsg){
     var alphaExp = /^[0-9a-zA-Z]+$/;
     if(inputtext.value.match(alphaExp)){
     return true;
     }else{
     document.getElementById('p5').innerText = alertMsg; //this segment displays the validation rule for address
     inputtext.focus();
     return false;
     }
     }*//*


   // Function that checks whether the input characters are restricted according to defined by user.

   function lengthDefine(inputtext, min, max){
   var uInput = inputtext.value;
   if(uInput.length >= min && uInput.length <= max){
   document.getElementById('validation-1').removeClass('error');
   return true;
   }else{
   $('#validation-1').addClass('error');
   document.getElementById('validation-1').innerText = "* Please enter between " +min+ " and " +max+ " characters *"; //this segment displays the validation rule for username
   inputtext.focus();
   return false;
   }
   }

   // Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
   */
    /*
     function trueSelection(inputtext, alertMsg){
     if(inputtext.value == "Please Choose"){
     document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for selection
     inputtext.focus();
     return false;
     }else{
     return true;
     }
     }*//*


   // Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.

   function emailValidation(inputtext, alertMsg){
   var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
   if(inputtext.value.match(emailExp)){
   return true;
   }else{
   document.getElementById('validation-2').innerText = alertMsg; //this segment displays the validation rule for email
   inputtext.focus();
   return false;
   }
   }




   $('form').on('submit', function () {
   return formValidation();
   });

   */


    /*$('.newsletter-signup input:first').on('keyup', function(){
     var valid = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(this.value) && this.value.length;
     var message = 'error';
     var validatinResult = $('<label class="validation-result">' + messages +'</label>');
     $(this)
     $('#valid').html('It\'s'+ (valid?'':' not') +' valid');
     });*/





    /*

     function validateEmail(email) {
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
     }

     function validateName(username) {
     var re = /^[A-Za-z0-9 ]{3,10}$/;
     return re.test(username);
     }

     var fieldValidate = $('<span class="validate-field"/>');

     var username = $('#username').val();

     var validMessage = 'Valid';
     var invalidMessage = '*please enter a valid name';

     $('#username').on('keyup', function () {
     var $this = $(this),
     $thisVal = $this.val();
     if(validateName(username)){
     console.log('1');
     $this.after($('<span class="validate-field"/>').addClass('valid').text(validMessage));
     } else {
     console.log('2');
     $this.after($('<span class="validate-field"/>').addClass('error').text(invalidMessage));
     }
     });


     function checkForm(form)
     {
     // validation fails if the input is blank
     if(form.inputfield.value == "") {
     alert("Error: Input is empty!");
     form.inputfield.focus();
     return false;
     }

     // regular expression to match only alphanumeric characters and spaces
     var re = /^[\w ]+$/;

     // validation fails if the input doesn't match our regular expression
     if(!re.test(form.inputfield.value)) {
     alert("Error: Input contains invalid characters!");
     form.inputfield.focus();
     return false;
     }

     // validation was successful
     return true;
     }*/




    /*function validate(){
     $("#result").text("");
     var email = $("#email").val();

     var username = $('#username').val();


     if(validateName(username)){

     }

     if (validateEmail(email)) {
     $("#result").text(email + " is valid :)");
     $("#result").css("color", "green");
     } else {
     $("#result").text(email + "is not valid :(");
     $("#result").css("color", "red");
     }
     if (validateName(username)) {
     $("#result-1").text(username + " is valid :)");
     $("#result-1").css("color", "green");
     } else {
     $("#result-1").text(username + "is not valid :(");
     $("#result-1").css("color", "red");
     }

     return false;
     }*/

//  $("form").bind("submit", validate);


    /*

     $('form').on('submit', function () {
     var valid = true,
     message = '';




     var validName = /^[A-Za-z0-9 ]{3,10}$/,
     validEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
     validDate =  'asd'
     ;

     if($(this).find('input[type=name]').val() === validName) {
     alert(1);
     } else {
     alert(2);
     }


     */
    /*
     var $this = $(this);
     console.log(validName);
     console.log($this.find('input[name=name]').val());
     console.log($this.find('input[name=name]').val() === validName);

     if($this.find('input[name=name]').val() === validName) {
     alert('1');
     }


     var valid = true,
     errorMessage = "";

     if ($('#name').val() == '' && ! $('#name').val() == validName ) {
     errorMessage  = "please enter your name \n";
     valid = false;
     }

     if ($('#address').val() == '') {
     errorMessage += "please enter your address\n";
     valid = false;
     }

     if ($('#email').val() == '') {
     errorMessage += "please enter your email\n";
     valid = false;
     }

     if( !valid && errorMessage.length > 0){
     alert(errorMessage);
     }


     $('form input').each(function() {



     var $this = $(this);

     if(!$this.val()) {
     var inputName = $this.attr('name');
     valid = false;
     message += 'Please enter your ' + inputName + '\n';
     }
     });

     if(!valid) {
     alert(message);
     }*//*

   });

   */

    // form validation
    //-----------------------------------------------------------------------------
    /*


     var validName = /^[A-Za-z0-9 ]{3,10}$/,
     validEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
     validDate =  'asd'
     ;


     function showError(container, errorMessage) {
     //    container.className = 'error';
     var msgElem = document.createElement('div');
     msgElem.className = "error-message col-xs-12 col-sm-4";
     msgElem.innerHTML = errorMessage;
     container.appendChild(msgElem);
     }



     function resetError(container) {
     //    container.className = '';
     if (container.lastChild.className == "error-message") {
     container.removeChild(container.lastChild);
     }
     }

     function validate(form) {
     var elems = form.elements;

     resetError(elems.username.parentNode.parentNode);
     if (!validName.test(elems.username.value)) {
     showError(elems.username.parentNode.parentNode, ' * Please enter a valid name');
     }

     resetError(elems.email.parentNode.parentNode);
     if (!validEmail.test(elems.email.value)) {
     showError(elems.email.parentNode.parentNode, ' * Please enter a valid email');
     }

     resetError(elems.date.parentNode.parentNode);
     if (!elems.date.value) {
     showError(elems.date.parentNode.parentNode, ' * Please enter a valid date of birth');
     }


     */
    /*

     resetError(elems.to.parentNode);
     if (!elems.to.value) {
     showError(elems.to.parentNode, ' Укажите, куда.');
     }

     resetError(elems.message.parentNode);
     if (!elems.message.value) {
     showError(elems.message.parentNode, ' Отсутствует текст.');
     }
     *//*


   }


   $('#form').on('submit', function () {
   return validate(this);






   });
   */


