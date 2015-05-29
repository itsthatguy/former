/* global $, angular */
'use strict';

$('body').on('click', '.former-overlay .button', function() {

  var $firstName = $('[ng-model="formData.first_name"]');
  var $lastName = $('[ng-model="formData.last_name"]');
  var $email = $('[ng-model="formData.email"], input[type="email"]');
  var $phone = $('[ng-model="formData.phone"], input[type="tel"]');
  var $expData = $('[ng-model="formData.expirationDate"]');
  var $cardNumber = $('[ng-model="formData.cardNumber"]');

  $firstName.val('Bob');
  $lastName.val('Villa');
  $email.val('admin@example.com');
  $phone.val('5551234567');
  $expData.val('12/15');
  $cardNumber.val('4111111111111111');

  if (angular) {
    angular.element($firstName).triggerHandler('input');
    angular.element($lastName).triggerHandler('input');
    angular.element($email).triggerHandler('input');
    angular.element($phone).triggerHandler('input');
    angular.element($expData).triggerHandler('input');
    angular.element($cardNumber).triggerHandler('input');
  }
});

$('body').append(
  '<div class="former-overlay"><a class="button">Fill out forms</a></div>'
);

$('.former-overlay').css({
  position: 'fixed',
  top: 10,
  right: 10
});

