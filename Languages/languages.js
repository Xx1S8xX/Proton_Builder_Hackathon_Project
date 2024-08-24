function addLanguage(language, stats) {
    const list = document.querySelector('.list-of-languages');
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.style.width = '20px';
    checkbox.style.height = '20px';
    checkbox.style.borderRadius = '50%';
    checkbox.style.border = '2px solid #ccc';
    checkbox.style.background = '#fff';
    checkbox.style.cursor = 'pointer';
    const name = document.createElement('span');
    const exclamation = document.createElement('span');
    exclamation.textContent = language;
    exclamation.classList.add('exclamation');
  
    exclamation.addEventListener('mouseover', () => {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '200');
      svg.setAttribute('height', '200');
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '180');
      circle.setAttribute('cy', '135');
      circle.setAttribute('r', '75');
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', 'black');
      circle.setAttribute('stroke-width', '2');
      circle.setAttribute("style","opacity:0.2; -moz-opacity:0.2; filter:alpha(opacity=20)");
      svg.appendChild(circle);
      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      const points = [];
      for (let i = 0; i < 4; i++) {
        const angle = (i * 90);
        const x = 100 + (stats[i] * 10 * Math.cos(angle * Math.PI / 180));
        const y = 100 + (stats[i] * 10 * Math.sin(angle * Math.PI / 180));
        points.push(`${x},${y}`);
      }
      polygon.setAttribute('points', points.join(' '));
      polygon.setAttribute('fill', 'none');
      polygon.setAttribute('stroke', 'black');
      svg.appendChild(polygon);
      for (let i = 0; i < 4; i++) {
        const angle = (i * 90);
        const x = 180 + (110 * Math.cos(angle * Math.PI / 180));
        const y = 140 + (110 * Math.sin(angle * Math.PI / 180));
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        switch (i) {
          case 0:
            label.textContent = 'Speed: ' + stats[0] + "/10";
            label.setAttribute('x', x + 15);
            label.setAttribute('y', y);
            break;
          case 1:
            label.textContent = 'Complexity: ' + stats[1] + "/10";
            label.setAttribute('x', x);
            label.setAttribute('y', y - 5);
            break;
          case 2:
            label.textContent = 'Usage: ' + stats[2] + "/10";
            label.setAttribute('x', x - 15);
            label.setAttribute('y', y);
            break;
          case 3:
            label.textContent = 'Functionalities: ' + stats[3] + "/10";
            label.setAttribute('x', x);
            label.setAttribute('y', y + 10);
            break;
        }
        label.setAttribute('text-anchor', 'middle');
        svg.appendChild(label);
      }
      tooltip.appendChild(svg);
      document.body.appendChild(tooltip);
      const rect = exclamation.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      tooltip.style.top = `${rect.top + scrollTop + 30}px`;
      tooltip.style.left = `${rect.left}px`;
    });

    exclamation.addEventListener('mouseout', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          setTimeout(() => {
            tooltip.remove();
          }, 10);
        }
      });

  
    label.appendChild(checkbox);
    label.appendChild(name);
    label.appendChild(exclamation);
    li.appendChild(label);
    list.appendChild(li);
  }
  
const selectElement = document.querySelector('select');
const continueButton = document.querySelector('.button');
const languageList = document.querySelector('.list-of-languages');
let selectedLanguages = [];

continueButton.addEventListener('click', () => {
    const selectedListItems = document.querySelectorAll('.list-of-languages li label input[type="checkbox"]:checked');
    const selectedLanguages = Array.from(selectedListItems).map((checkbox) => {
      return checkbox.parentNode.querySelector('.exclamation').textContent;
    });
    const selectElementValue = selectElement.value;
    localStorage.setItem('selectedLanguages', JSON.stringify(selectedLanguages));
    localStorage.setItem('selectElementValue', selectElementValue);
    window.location.href = "../Frameworks/frameworks.html";
  });

  addLanguage('Java', [9, 9, 9, 9]);
  addLanguage('C', [5, 9, 1, 4]);
  addLanguage('C++', [9, 9, 9, 9, 9, 9]);
  addLanguage('C#', [9, 9, 9, 9, 9, 9]);
  addLanguage('Rust', [9, 9, 9, 9, 9, 9]);
  addLanguage('JavaScript', [9, 9, 9, 9, 9, 9]);
  addLanguage('Ruby', [9, 9, 9, 9, 9, 9]);
  addLanguage('Dart', [9, 9, 9, 9, 9, 9]);
  addLanguage('GO', [9, 9, 9, 9, 9, 9]);
  addLanguage('Python', [9, 9, 9, 9, 9, 9]);







