let myform=document.querySelector('#myform');
let bouton=document.querySelector('.btn');


myform.addEventListener('submit',function(event){
    event.preventDefault();
    let nom=document.querySelector('#nom');
    let nom_err1=document.querySelector('.err1');
    if(nom.value==''){
        
        nom_err1.innerHTML='!!! Ecrire votre nom le champ est vide .';
        nom_err1.style.color='red';
        myform.style.height="35rem";
    }
    else if( nom.value.length<4 )
    {
        nom_err1.innerHTML='le nom doit etre composé minimum de 4 caractéres.';
        nom_err1.style.color='red';
        myform.style.height="36rem";
    }
    else{  
        let pnom=document.querySelector('#pnom');
        pnom.style.color='green';
        nom_err1.innerHTML='';
    
    }
    let prenom=document.querySelector('#prenom');
    let nom_err2=document.querySelector('.err2');

    if(prenom.value==''){
        nom_err2.innerHTML='!!! Ecrire votre prenom le champ est vide .';
        nom_err2.style.color='red';
        myform.style.height="36rem";
    }
    else if( prenom.value.length<4 )
    {
        nom_err2.innerHTML='le prenom doit etre composé minimum de 4 caractéres.';
        nom_err2.style.color='red';
        myform.style.height="36rem";
    }
    else{  
        let pprenom=document.querySelector('#pprenom');
        pprenom.style.color='green';
        nom_err2.innerHTML='';
    
    }
    let email=document.querySelector('#email');
    let nom_err3=document.querySelector('.err3');

    if(email.value==''){
        nom_err3.innerHTML='!!! Ecrire votre email le champ est vide .';
        nom_err3.style.color='red';
        myform.style.height="36rem";
    }
    else{  
        let pemail=document.querySelector('#pemail');
        pemail.style.color='green';
        nom_err3.innerHTML='';
    
    }
    let password=document.querySelector('#pw');
    let nom_err4=document.querySelector('.err4');

    if(password.value==''){
        nom_err4.innerHTML='!!! Ecrire votre mot de passe le champ est vide .';
        nom_err4.style.color='red';
        myform.style.height="36rem";
    }
    else{
        nom_err4.innerHTML='';

    }
    let password1=document.querySelector('#pw1');
    let nom_err5=document.querySelector('.err5');

    if(password1.value==''){
        nom_err5.innerHTML='!!! Ecrire la confirmation de votre mot de passe .';
        nom_err5.style.color='red';
        myform.style.height="36rem";
    }
    else if(password1.value!==password.value && password.value!=='' && password1.value!=='')
    {   
        nom_err4.innerHTML='';
        nom_err5.innerHTML='mot de passe incorrect';
    }
    else{
        nom_err5.innerHTML='';
        let mdp1=document.querySelector('#mdp1');
        let mdp2= document.querySelector('#mdp2');
        mdp1.style.color='green';
        mdp2.style.color='green';

    }
    if(password1.value=='' && (nom.value=='' || nom.value.length<4 )&& prenom.value=='' && password.value=='' && email.value=='' ){
        myform.style.height="38rem";
        nom_err5.style.color='red';
    }

});