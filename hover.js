let photocontainer = document.querySelector("aside img")
let imagelinks = document.querySelectorAll('.imagelink')

for (let i = 0; i < imagelinks.length; i++) {

  imagelinks[i].addEventListener("mouseenter", function() {

    let photo = this.getAttribute('data-image');

    photocontainer.src = photo;

    photocontainer.style.backgroundColor = '#E5E7E5';

    event.stopPropagation()
  })

}
