window.onscroll = function() {stickyHeader()};

const header = document.querySelector('.sticky-header');
const content = document.querySelector('.content');
const headerHeight = header.clientHeight;

function stickyHeader() {
  if (window.pageYOffset > headerHeight) {
    header.classList.add('sticky');
    content.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('sticky');
    content.style.paddingTop = '0';
  }
}
