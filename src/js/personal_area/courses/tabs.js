document.querySelectorAll('.course-tab-type').forEach((item) =>
  item.addEventListener('click', () => {
    document.querySelectorAll('.course-tab-type')[0].classList.remove('course-tab-type_active')
    document.querySelectorAll('.course-tab-type')[1].classList.remove('course-tab-type_active')
    document.querySelectorAll('.course-tab-type')[2].classList.remove('course-tab-type_active')
    document.querySelector('#course-tab-0').classList.remove('courses-list__body_tab-active')
    document.querySelector('#course-tab-1').classList.remove('courses-list__body_tab-active')
    document.querySelector('#course-tab-2').classList.remove('courses-list__body_tab-active')

    switch (item.id) {
      case 'course-tab-btn-0':
        document.querySelector('#course-tab-0').classList.add('courses-list__body_tab-active')
        break;
      case 'course-tab-btn-1':
        document.querySelector('#course-tab-1').classList.add('courses-list__body_tab-active')
        break;
      case 'course-tab-btn-2':
        document.querySelector('#course-tab-2').classList.add('courses-list__body_tab-active')
        document.querySelector('#show-more-courses').style.display = 'none'
        document.querySelector('#catalog-courses').style.display = 'block'
        break;
      default:
        break;
    }
    item.classList.add('course-tab-type_active')
  })
)