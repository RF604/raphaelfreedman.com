const navLinks = document.querySelectorAll("nav a")
const sections = document.querySelectorAll("aside section.project")
sections.forEach((section, index) => {
  const link = navLinks[index]
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.50) {
        link.classList.add("selected")
      } else {
        link.classList.remove("selected")
      }
    })
  }, {
    threshold: [0, 0.5, 1]
  })
  obs.observe(section)
})
