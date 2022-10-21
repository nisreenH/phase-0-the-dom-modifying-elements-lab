document.getElementById('main').remove();

const newHeader = document.createElement("H1");


newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Nisreen is the champion";

document.body.append(newHeader);