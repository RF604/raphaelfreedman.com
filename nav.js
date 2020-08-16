const navLinks = document.querySelectorAll("nav a")
const sections = document.querySelectorAll("aside section h1")

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.1) {

      sections.forEach((section, index) => {
        if (entry.target == section) {
          navLinks.forEach(link => {
            link.classList.remove("selected")
          })

          navLinks[index].classList.add("selected")
        }
      })

    }
  })
}, {
  threshold: [0, 0.1, 0.9, 1]
})

sections.forEach(section => {
  navObserver.observe(section)
})
