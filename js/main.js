function validateForm() {
    resetErrors();

    validateField('fullName', /^[a-zA-Z\s]+$/, 'fullNameError', 'Please enter a valid name.');
    validateField('dob', /^\d{4}-\d{2}-\d{2}$/, 'dobError', 'Please enter a valid date of birth (YYYY-MM-DD).');
    validateField('email', /^\S+@\S+\.\S+$/, 'emailError', 'Please enter a valid email address.');
    validateField('mobileNumber', /^[0-9]{10}$/, 'mobileNumberError', 'Please enter a valid 10-digit mobile number.');
    validateField('gender', /^[a-zA-Z\s]+$/, 'genderError', 'Please enter a valid gender.');
    validateField('occupation', /^[a-zA-Z\s]+$/, 'occupationError', 'Please enter about your self.');

    // validateField('idType', /^[a-zA-Z\s]+$/, 'idTypeError', 'Please enter a valid ID type.');
    // validateField('idNumber', /^[0-9]+$/, 'idNumberError', 'Please enter a valid ID number.');
   validateSelect(
     "courseSelect",
     "courseSelectError",
     "Please select a valid course."
   );


   validateField(
     "issuedState",
     /^\d+$/,
     "issuedStateError",
     "Please enter a valid numeric value for skill range."
   );
    validateField('issuedDate', /^\d{4}-\d{2}-\d{2}$/, 'issuedDateError', 'Please enter a valid issued date (YYYY-MM-DD).');
    validateField(
      "address",
      /.+/,
      "addressError",
      "Please enter a valid address."
    );

    if (!document.querySelector('.error')) {
        showSuccessMessage();
    }
}

function validateField(fieldName, regex, errorId, errorMessage) {
    const inputField = document.getElementById(fieldName);
    const value = inputField.value;
    const errorElement = inputField.parentElement.querySelector('.error');

    if (!regex.test(value)) {
        displayError(errorElement, errorMessage);
    }
}

function displayError(errorElement, errorMessage) {
    errorElement.innerText = errorMessage;
    errorElement.style.display = 'block';
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.style.display = 'none';
        element.innerText = '';
    });
}

function showSuccessMessage() {
    alert('Form submitted successfully!');
}

// Add blur event listeners for each input field
document.getElementById('fullName').addEventListener('blur', function () {
    validateField('fullName', /^[a-zA-Z\s]+$/, 'fullNameError', 'Please enter a valid name.');
});

document.getElementById('dob').addEventListener('blur', function () {
    validateField('dob', /^\d{4}-\d{2}-\d{2}$/, 'dobError', 'Please enter a valid date of birth (YYYY-MM-DD).');
});

document.getElementById('email').addEventListener('blur', function () {
    validateField('email', /^\S+@\S+\.\S+$/, 'emailError', 'Please enter a valid email address.');
});

document.getElementById('mobileNumber').addEventListener('blur', function () {
    validateField('mobileNumber', /^[0-9]{10}$/, 'mobileNumberError', 'Please enter a valid 10-digit mobile number.');
});

document.getElementById('gender').addEventListener('blur', function () {
    validateField('gender', /^[a-zA-Z\s]+$/, 'genderError', 'Please enter a valid gender.');
});

document.getElementById('occupation').addEventListener('blur', function () {
    validateField('occupation', /^[a-zA-Z\s]+$/, 'occupationError', 'Please enter a valid occupation.');
});

document.getElementById('idType').addEventListener('blur', function () {
    validateField('idType', /^[a-zA-Z\s]+$/, 'idTypeError', 'Please enter a valid ID type.');
});

// document.getElementById('idNumber').addEventListener('blur', function () {
//     validateField('idNumber', /^[0-9]+$/, 'idNumberError', 'Please enter a valid ID number.');
// });

// document.getElementById('issuedAuthority').addEventListener('blur', function () {
//     validateField('issuedAuthority', /^[a-zA-Z\s]+$/, 'issuedAuthorityError', 'Please enter a valid issued authority.');
// });

document.getElementById("issuedState").addEventListener("input", function () {
  validateField(
    "issuedState",
    /^\d+$/,
    "issuedStateError",
    "Please enter a valid numeric value for skill range."
  );
});

document.getElementById('issuedDate').addEventListener('blur', function () {
    validateField('issuedDate', /^\d{4}-\d{2}-\d{2}$/, 'issuedDateError', 'Please enter a valid issued date (YYYY-MM-DD).');
});

document.getElementById("address").addEventListener("blur", function () {
  validateField(
    "address",
    /.+/,
    "addressError",
    "Please enter a valid address."
  );
});