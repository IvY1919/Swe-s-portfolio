//Get modal element
var modal = document.getElementById('simpleModal');

//Get open modal button
var modalBtn= document.getElementById('modalBtn-about');

//Get close button
var closeBtn=document.getElementById('closeBtn');

//Listen for click
modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
//Listen for outside click
window.addEventListener('click',clickOutside);


//Function to open Modal
function openModal(){
    modal.style.display= 'block';
}

//function to close btn
function closeModal(){
    modal.style.display='none';
}

function clickOutside(e){
    if(e.target==modal){ 
    modal.style.display='none';
}
}