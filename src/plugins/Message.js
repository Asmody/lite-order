const swal = require('sweetalert')
export default {
  install (Vue, ) {
    Object.defineProperty(Vue.prototype, '$msg', { value: this })
  },
  alert (config) {
    config = {
      title: '',
      type: 'info',
      showConfirmButton: true,
      showCancelButton: false,
      animation: false,
      ...config
    }
    return new Promise((resolve, reject) => {
      swal(config, isConfirm => {
        resolve(isConfirm)
        swal.close()
      })
    })
  },
  confirm (config) {
    config = {
      title: '',
      type: 'warning',
      cancelButtonText: 'Отменить',
      showConfirmButton: true,
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
      animation: false,
      ...config
    }
    return new Promise((resolve, reject) => {
      swal(config, isConfirm => {
        if (isConfirm) {
          resolve(isConfirm)
        } else {
          reject(isConfirm)
        }
        swal.close()
      })
    })
  },
}

