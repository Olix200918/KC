const addBtn = document.getElementById('addBtn');
const formContainer = document.getElementById('formContainer');
const result = document.getElementById('result');

addBtn.addEventListener('click', () => {
 formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
});

function submitData() {
 const name = document.getElementById('name').value;
 const speciality = document.getElementById('codersType').value;
 const prgrf = document.getElementById('prgrf').value;
 const number = document.getElementById('number').value;

 const containerDiv = document.getElementById("divsContainer")

 const newDiv = document.createElement('div');
 newDiv.classList.add('new-item'); 

 newDiv.innerHTML = `<div class = "new">
 <img style="width: 50px;" src="./E1aVCIN7th4NMcUWSEBI--l2je0.jpg">
 <h1> <strong></strong> ${name}</h1>
 <h1><strong></strong> ${speciality}</h1>
 <p><strong></strong> ${prgrf}</p>
 <h2><strong>+965</strong> ${number}</h2>
 </div>
 `;

 containerDiv.appendChild(newDiv);

 formContainer.style.display = 'none'; 
 
}
