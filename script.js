// PARALLAX SCROLLING

(function() {
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

// HOME EFFECT 
window.addEventListener('scroll', function() {
  const homeSection = document.querySelector('#home-section');
  const homeContent = document.querySelector('.home-content');
  
  const sectionPosition = homeSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
      homeContent.classList.add('visible');
  } else {
      homeContent.classList.remove('visible');
  }
});

/* COPY CONTACTS */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard: ' + text);
  }).catch(err => {
      console.error('Could not copy text: ', err);
  });
}

function openEmail(email) {
  window.location.href = 'mailto:' + email;
}

function openLink(url) {
  window.open(url, '_blank');
}

// SCROLL EFFECT ON EACH ELEMENT
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});

