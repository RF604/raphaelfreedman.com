

let photocontainer = document.querySelector('aside img')
let imagelinks = document.querySelectorAll('.imagelink')

if (window.innerWidth > 1150) {

  imagelinks.forEach(link => {

    let preload = new Image()
    preload.src = link.getAttribute('data-image')

    link.addEventListener("mouseenter", function() {
      let photo = this.getAttribute('data-image');
      let background = this.getAttribute('data-background');
      photocontainer.src = photo;
      photocontainer.style.backgroundImage = `url(${background})`;
      photocontainer.classList.add("hover");
      event.stopPropagation()
    })

    link.addEventListener("mouseleave", function() {
      photocontainer.src = '/images/sutro.png';
      photocontainer.style.backgroundImage = 'none';
      photocontainer.classList.remove("hover");
      event.stopPropagation()
    })

  })

}
