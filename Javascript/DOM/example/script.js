const container = document.querySelector('#container');
///////////////////////////////////////////////////////
const content = document.createElement('div');
const para = document.createElement('p')

content.classList.add('content')
content.textContent = 'This is the glorious text-content';
container.appendChild(content);

// added paragraph
para.style.color = 'red';
para.textContent = 'Hey Iam red!';
container.appendChild(para);

// added  a h3 heading

const head3 = document.createElement('h3');
head3.style.color = 'blue';
head3.textContent = 'Iam a blue h3!'
container.appendChild(head3);

// another div 

const div2 = document.createElement('div')
div2.innerHTML= '<h1>Iam a Div</h1>'
div2.innerHTML = '<p>ME TOO !</p>'

container.appendChild(div2)