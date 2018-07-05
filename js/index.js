const link = document.querySelector('a');
link.textContent = "MDN";
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section'); //create 1 paragraph
const para = document.createElement('p');
para.textContent = 'Hope u enjoyed';
sect.appendChild(para);



for (let i = 0; i < 100; i++) { // create 100 para
const para = document.createElement('p');
para.textContent = 'Hope u enjoyed' + i;
sect.appendChild(para);
}

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);


// linkPara.parentNode.removeChild(linkPara);  //delete the par

// linkPara.style.color = 'white';
// linkPara.style.backgroundColor = 'black';
// linkPara.style.padding = '10px';
// linkPara.style.width = '250px';
// linkPara.style.textAlign = 'center';

 linkPara.classList.add('selected');// add styles through js 
 
 //online list
 
 