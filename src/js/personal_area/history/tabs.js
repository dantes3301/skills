document.querySelectorAll('.history-tab-type').forEach((item) =>
  item.addEventListener('click', () => {
    document.querySelectorAll('.history-tab-type')[0].classList.remove('history-tab-type_active')
    document.querySelectorAll('.history-tab-type')[1].classList.remove('history-tab-type_active')
    document.querySelector('#history-tab-0').classList.remove('content__history-table_active')
    document.querySelector('#history-tab-1').classList.remove('content__history-table_active')
    console.log(item.id)
    switch (item.id) {
      case 'history-tab-btn-0':
        document.querySelector('#history-tab-0').classList.add('content__history-table_active')
        break;
      case 'history-tab-btn-1':
        document.querySelector('#history-tab-1').classList.add('content__history-table_active')
        break;
      default:
        break;
    }
    item.classList.add('history-tab-type_active')
  })
)