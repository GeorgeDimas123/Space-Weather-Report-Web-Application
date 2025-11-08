// More advanced infinite scrolling with layer duplication
function initInfiniteParallax() {
  const layers = [
    { element: document.querySelector('.background'), speed: 0.2 },
    { element: document.querySelector('.foreground'), speed: 0.5 }
  ];

  // Duplicate each layer for seamless looping
  layers.forEach(layer => {
    const clone = layer.element.cloneNode(true);
    clone.style.transform = 'translateY(100%)';
    layer.element.parentElement.appendChild(clone);
    layer.clone = clone;
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    layers.forEach(layer => {
      const offset = (scrollY * layer.speed) % window.innerHeight;
      layer.element.style.transform = `translateY(${offset}px)`;
      layer.clone.style.transform = `translateY(${offset - window.innerHeight}px)`;
    });
  });
}

initInfiniteParallax();
