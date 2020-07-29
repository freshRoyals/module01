$(document).ready(function() {
    // document ready, code here
    // validate form b4 submission, by attaching an event handler to the form submission

    $('#sign-btn').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });


    $('#contact form').on('submit', function(e) {
        e.preventDefault();

        var $form = $(e.currentTarget),
            $email = $form.find('#contact-email'),
            $button = $form.find('button[type=submit]');

        if ($email.val().indexOf('@') == -1) {
            vaca = $email.closest('form-group')
            $email.closest('.form-group').addClass('has-error');
        } else {
            $form.find('.form-group').addClass('has-success').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span> Message sent. We will contact you soon.</span>');
        }
    });
});