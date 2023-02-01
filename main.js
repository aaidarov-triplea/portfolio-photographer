const btnModal = document.querySelector('.btn-modal')
const btnClose = document.querySelector('.btn-close')
const btnSend = document.querySelector('.btn-send')
const modalOverlay = document.querySelector('.modal-overlay')

btnModal.addEventListener('click', () => {
  modalOverlay.classList.add('open')
})

btnClose.addEventListener('click', () => {
  modalOverlay.classList.remove('open')
})

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
btnSend.addEventListener('click', () => {
  const getMessage = {
    name: name.value,
    email: email.value,
    message: message.value
  }
  console.log(getMessage)
})

const pics = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
]

const gallery = document.querySelector('.pictures-item')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const closeImgBtn = document.querySelector('.img-close')

const createImg = (src) => {
  const img = document.createElement('img')
  img.setAttribute('src', src)
  return img
}


pics.forEach((imgSrc) => {
  const imgForGallery = createImg(imgSrc)
  const imgForModal = createImg(imgSrc)

  const imgContainer = document.createElement('div')
  imgContainer.className = 'img-container'
  const loading = document.createElement('div')
  loading.className = 'loading'
  imgContainer.append(loading)

  imgContainer.addEventListener('click', () => {
    overlay.classList.add('open')
    modal.append(imgForModal)
  })
  gallery.append(imgContainer)
  imgContainer.append(imgForGallery)
})

closeImgBtn.addEventListener('click', () => {
  overlay.classList.remove('open')
  modal.querySelector('img').remove()
})
