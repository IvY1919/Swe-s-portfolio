//Get modal element
var modal = document.getElementById('AboutModal');
var modalCon = document.getElementById('ContactModal');
var modalskill = document.getElementById('SkillModal');
var modalPrj = document.getElementById('PrjModal');
var modalFacts = document.getElementById('FactsModal');
//Get open modal button
var modalBtn= document.getElementById('modalBtn-about');
var modalBtnCont= document.getElementById('modalBtn-contact');
var modalBtnskill= document.getElementById('modalBtn-skill');
var modalBtnPrj= document.getElementById('modalBtn-Prj');
var modalBtnFacts= document.getElementById('modalBtn-Facts');

//Get close button
var closeBtn=document.getElementById('closeBtn');
var closeBtnCont=document.getElementById('closeBtn1');
var closeBtnskill=document.getElementById('closeBtnskill');
var closeBtnPrj=document.getElementById('closeBtnsPrj');
var closeBtnFacts=document.getElementById('closeBtnsFacts');
//Listen for click
modalBtn.addEventListener('click',openModalAbout);
modalBtnCont.addEventListener('click',openModalCont);
modalBtnskill.addEventListener('click',openModalSkill);
modalBtnPrj.addEventListener('click',openModalPrj);
modalBtnFacts.addEventListener('click',openModalFacts);

closeBtn.addEventListener('click',closeModalAbout);
closeBtnCont.addEventListener('click',closeModalCont);
closeBtnskill.addEventListener('click',closeModalSkill);
closeBtnPrj.addEventListener('click',closeModalPrj);
closeBtnFacts.addEventListener('click',closeModalFacts);
//Listen for outside click
window.addEventListener('click',clickOutside);

//About
//Function to open Modal
function openModalAbout(){
    modal.style.display= 'block';
}

//function to close btn
function closeModalAbout(){
    modal.style.display='none';
}

function clickOutside(e){
    if(e.target==modal){ 
    modal.style.display='none';
 }
}
//Contact
//Function to open Modal
function openModalCont(){
    modalCon.style.display= 'block';
}

//function to close btn
function closeModalCont(){
    modalCon.style.display='none';
}

//Skill
//Function to open Modal
function openModalSkill(){
    modalskill.style.display= 'block';
}

//function to close btn
function closeModalSkill(){
    modalskill.style.display='none';
}
//Project
//Function to open Modal
function openModalPrj(){
    modalPrj.style.display= 'block';
}

//function to close btn
function closeModalPrj(){
    modalPrj.style.display='none';
}

//facts
//Function to open Modal
function openModalFacts(){
    modalFacts.style.display= 'block';
}

//function to close btn
function closeModalFacts(){
    modalFacts.style.display='none';
}

