import './style.css'

const doc = document;
const btn = doc.getElementById('button')
const video = doc.getElementById('video')

btn.addEventListener('click', () => {

  navigator.mediaDevices.getDisplayMedia()
    .then(media => {
      video.srcObject = media
    })

})
