document.getElementById("horizontal-scroller")
  .addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        var modifier = parseInt(getComputedStyle(this).lineHeight);
      } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        var modifier = this.clientHeight;
      }
    if (event.deltaY != 0) {
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });

const images = document.body.querySelectorAll('.box')
const texts = document.body.querySelectorAll('.descr-content')

images.forEach((image, index) => {
image.addEventListener('mouseover', () => {
texts[index].classList.add('shown')
})

image.addEventListener('mouseout', () => {
texts[index].classList.remove('shown')
})
}) 
