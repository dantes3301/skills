"use strict";var forms_change_password_modal=document.querySelectorAll("#form-change-password-modal");forms_change_password_modal.forEach(function(e){var a=e.querySelector("#old_password"),s=e.querySelector("#new_password"),r=e.querySelector("#repeat_new_password"),e=e.querySelector("#change-password-btn");a.addEventListener("input",function(){a.value.length<8?(a.classList.remove("validate-success"),a.classList.add("validate-error")):(a.classList.add("validate-success"),a.classList.remove("validate-error"))}),s.addEventListener("input",function(){s.value.length<8?(s.classList.remove("validate-success"),s.classList.add("validate-error")):(s.classList.add("validate-success"),s.classList.remove("validate-error"))}),r.addEventListener("input",function(){r.value.length<8||s.value!==r.value?(r.classList.remove("validate-success"),r.classList.add("validate-error")):(r.classList.add("validate-success"),r.classList.remove("validate-error"))}),e.addEventListener("click",function(e){a.value<8?a.classList.add("validate-error"):a.classList.remove("validate-error"),s.value<8?s.classList.add("validate-error"):s.classList.remove("validate-error"),r.value<8||s.value!==r.value?r.classList.add("validate-error"):r.classList.remove("validate-error")})});