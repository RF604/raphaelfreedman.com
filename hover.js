
let aside = document.querySelector('aside')
let photocontainer = document.querySelector('aside img')
let imagelinks = document.querySelectorAll('.imagelink')

if (window.innerWidth > 500) {

  imagelinks.forEach(link => {

    let preload = new Image()
    preload.src = link.getAttribute('data-image')

    link.addEventListener("mouseenter", function() {
      let photo = this.getAttribute('data-image');

      photocontainer.style.visibility = 'visible';
      photocontainer.src = photo;
      aside.classList.add("hover");
      event.stopPropagation()
    })

    link.addEventListener("mouseleave", function() {
      photocontainer.style.visibility = 'hidden';
      aside.classList.remove("hover");
      event.stopPropagation()
    })

  })

}
