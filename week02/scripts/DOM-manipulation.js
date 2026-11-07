const section = document.querySelector('section');
section.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';
section.style.textAlign = 'right';
section.setAttribute('class', 'activate');

const paragraph = document.createElement('p');
section.appendChild(paragraph);
section.append(paragraph, 'Hello World Addition!');
section.removeChild(paragraph);
section.remove();