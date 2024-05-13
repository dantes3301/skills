const forms_change_password_modal = document.querySelectorAll('#form-change-password-modal')

forms_change_password_modal.forEach((form) => {
  const old_password = form.querySelector('#old_password')
  const new_password = form.querySelector('#new_password')
  const repeat_new_password = form.querySelector('#repeat_new_password')
  const btn_change_password_modal = form.querySelector('#change-password-btn')

  old_password.addEventListener('input', () => {
    if(!(old_password.value.length < 8)) {
      old_password.classList.add('validate-success')
      old_password.classList.remove('validate-error')
    } else {
      old_password.classList.remove('validate-success')
      old_password.classList.add('validate-error')
    }
  })

  new_password.addEventListener('input', () => {
    if(!(new_password.value.length < 8)) {
      new_password.classList.add('validate-success')
      new_password.classList.remove('validate-error')
    } else {
      new_password.classList.remove('validate-success')
      new_password.classList.add('validate-error')
    }
  })

  repeat_new_password.addEventListener('input', () => {
    if(!(repeat_new_password.value.length < 8 || new_password.value !== repeat_new_password.value)) {
      repeat_new_password.classList.add('validate-success')
      repeat_new_password.classList.remove('validate-error')
    } else {
      repeat_new_password.classList.remove('validate-success')
      repeat_new_password.classList.add('validate-error')
    }
  })

  btn_change_password_modal.addEventListener('click', (e) => {
    old_password.value < 8
      ? old_password.classList.add('validate-error')
      : old_password.classList.remove('validate-error')
    new_password.value < 8
      ? new_password.classList.add('validate-error')
      : new_password.classList.remove('validate-error')
    repeat_new_password.value < 8 || new_password.value !== repeat_new_password.value
      ? repeat_new_password.classList.add('validate-error')
      : repeat_new_password.classList.remove('validate-error')
  })
})



