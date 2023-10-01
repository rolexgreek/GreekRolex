const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

function toggleMute() {

  var video = document.getElementById("myVideo")

  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }

}

function displayPhrase() {
  document.getElementById("load").innerHTML = ' ';
}
