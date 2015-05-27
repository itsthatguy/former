/* global $ */
'use strict';

$('body').on('click', '.former-overlay .button', function() {
  $('[ng-model="formData.first_name"]').val('Bob');
  $('[ng-model="formData.last_name"]').val('Villa');
  $('[ng-model="formData.email"], input[type="email"').val('admin@example.com');
  $('[ng-model="formData.expirationDate"], input[type="tel"').val('5551234567');
  $('[ng-model="formData.expirationDate"]').val('12/15');
  $('[ng-model="formData.cardNumber"]').val('4111111111111111');
});

$('body').append(
  '<div class="former-overlay"><a class="button">Fill out forms</a></div>'
);

$('.former-overlay').css({
  position: 'fixed',
  top: 10,
  right: 10
});

