/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 3. Use the live search functionality to make the dropdown searchable
 *
 * 4. Add the user glyphicons next to each student in the list
 *
 * 6. Add a menu header to the dropdown
 *
 * 7. Customize further with anything you find intersting
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

 (function(){

   $(function(){

     $('#employeeId').selectpicker({
       style: 'btn-info',
       size: 10,
       liveSearch: true,
       header: 'Select a student'
     });

     $("#updateStudentForm").validate({
     errorClass: "alert alert-danger",
     rules: {
      first_name: {
         required: true,
         minlength: 2
      },
      last_name: {
         required: true,
         minlength: 2
      },
      start_date: {
         required: true,
         dateISO: true
      }
     },
     messages: {
      first_name: {
         required: "Please enter your first namezzz",
         minlength: jQuery.validator.format("At least {0} characters required!")
      },
      last_name: {
         required: "Please enter your last name",
         minlength: jQuery.validator.format("At least {0} characters required!")
      },
      start_date: {
         required: "Please enter a start date",
         dateISO: "Please add a date in yyyy-mm-dd format"
      },
     }
     });
      //alternativley
      $("#updateStudentForm :input").prop('disabled', true);
      //$(".form-control").prop('disabled', true);
      //$(".btn-default").prop('disabled', true);

      $("#employeeId").change(function(){
        //$(".form-control").prop('disabled', false);
        //$(".btn-default").prop('disabled', false);
        $("#updateStudentForm :input").prop('disabled', false);
        $.get("http://localhost:1337/student/" + $(this).val(), function (data) {
             // reset form values from json object
             $.each(data, function (name, val) {
                 var $el = $('[name="' + name + '"]');
                 var type = $el.attr('type');
                 $el.val(val);
              })
         });
     })


   })

 })();
