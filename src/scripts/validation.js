$("#forms").submit(function (e) {
  e.preventDefault();
  // submitButton
  console.log("submissão");

  console.log(e.item.value);
  // validateRazaoSocial();
  console.log(e);
  return false;
  // validateUsername();
  // validatePassword();
  // validateConfirmPassword();
  // validateEmail();
  // if (
  //   usernameError == true &&
  //   passwordError == true &&
  //   confirmPasswordError == true &&
  //   emailError == true
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
});

function validateRazaoSocial() {
  let usernameValue = $("#razao_social").val();

  console.log($("#razao_social").offsetParent()[0]);

  console.log({ usernameValue });
  if (usernameValue.length == "") {
    $("#usercheck").show();
    usernameError = false;
    return false;
  } else if (usernameValue.length < 3 || usernameValue.length > 10) {
    $("#usercheck").show();
    $("#usercheck").html("**length of username must be between 3 and 10");
    usernameError = false;
    return false;
  } else {
    $("#usercheck").hide();
  }
}
