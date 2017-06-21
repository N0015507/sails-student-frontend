/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd/
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function() {

  $(function() {


    $("#addStudBtn").click(function(evt){
      evt.preventDefault();
       let FN = $("#first_name").val();
       let LN = $("#last_name").val();
       let SD = $("#start_date").val();
       let GP = $("#gpa").val();
       let ST = $("#sat").val();
       let MJ = $("#major_id").val();
       let confMsg = "First Name: " + FN + "<br/>Last Name: " + LN + "<br/>Start Date: " + SD + "<br/>GPA: " + GP + "<br/>SAT: " + ST + "<br/>Major ID: " + MJ + "<br/><br/>Is that correct? <br/> Hit 'No' to correct and 'Cancel' to clear your entry."
      console.log("FN = " + confMsg);
      let dialog = $("<p>" + confMsg + "</p>").dialog({
                    title:"PLEASE VERIFY YOUR DATA",
                    buttons: {
                        "Yes": function() {
                          $("#addStudentForm").submit();
                        },
                        "No":  function() {
                          dialog.dialog('close');
                        },
                        "Cancel":  function() {
                            dialog.dialog('close');
                            $("#addStudentForm :input").val("");
                        }
                    }
                });
    })


    $("#addStudentForm").validate({
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
        gpa: {
          required: false,
          range: [0,4]
        },
        sat: {
          required: false,
          range: [0,1400]
        },
        start_date: {
          required: true,
          dateISO: true
        }
      },
      messages: {
        first_name: {
          required: "Please enter your first name",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        last_name: {
          required: "Please enter your last name",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        gpa: {
          range: "GPA must be between 0 and 4.0"
        },
        sat: {
          range: "SAT must be between 0 and 1400"
        },
        start_date: {
          required: "Please enter a start date",
          dateISO: "Please add a date in yyyy-mm-dd format"
        },
      }
    });

  })

})();
