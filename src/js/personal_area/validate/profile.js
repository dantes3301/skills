const form_profile_setting = document.querySelectorAll('#profile-setting-form')
const pattern_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form_profile_setting.forEach((form) => {
  const name = form.querySelector('#profile-setting-name')
  const secondname = form.querySelector('#profile-setting-secondname')
  const email = form.querySelector('#profile-setting-email')
  const phone = form.querySelector('#profile-setting-phone')
  const about = form.querySelector('#setting-profile-about')
  const btn_profile_setting = form.querySelector('#profile-setting-btn')

  const select_day_birth = form.querySelector('#select-day-birth__btn')

  name.addEventListener('input', () => {
    if (name.value.length > 0) {
      name.classList.add('validate-success')
      name.classList.remove('validate-error')
    } else {
      name.classList.remove('validate-success')
      name.classList.add('validate-error')
    }
  })
  secondname.addEventListener('input', () => {
    if (secondname.value.length > 0) {
      secondname.classList.add('validate-success')
      secondname.classList.remove('validate-error')
    } else {
      secondname.classList.remove('validate-success')
      secondname.classList.add('validate-error')
    }
  })
  email.addEventListener('input', () => {
    if (email.value.match(pattern_email)) {
      email.classList.add('validate-success')
      email.classList.remove('validate-error')
    } else {
      email.classList.remove('validate-success')
      email.classList.add('validate-error')
    }
  })
  about.addEventListener('input', () => {
    if (about.value.length > 1) {
      about.classList.add('validate-success')
      about.classList.remove('validate-error')
    } else {
      about.classList.remove('validate-success')
      about.classList.add('validate-error')
    }
  })
  phone.addEventListener('input', () => {
    if (phone.value.length > 16) {
      phone.classList.add('validate-success')
      phone.classList.remove('validate-error')
    } else {
      phone.classList.remove('validate-success')
      phone.classList.add('validate-error')
    }
  })

  btn_profile_setting.addEventListener('click', (e) => {
    name.value.length < 1
      ? name.classList.add('validate-error')
      : name.classList.remove('validate-error')
    !email.value.match(pattern_email)
      ? email.classList.add('validate-error')
      : email.classList.remove('validate-error')
    phone.value.length != 0 && phone.value.length < 17
      ? phone.classList.add('validate-error')
      : phone.classList.remove('validate-error')
  })
})



