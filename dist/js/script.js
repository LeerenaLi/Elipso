//skills__progress

const counters = document.querySelectorAll('.skills__progress-counter'),
      lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});