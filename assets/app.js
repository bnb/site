var path = window.location.pathname
var span = document.querySelector('h1 span')

if (path.indexOf('/blog/') > -1 || path.indexOf('/notes/') > -1) {
  span.innerHTML = 'yeah'

  setTimeout(function () {
    window.location.replace('https://medium.com/@leo')
  }, 2000)
}
