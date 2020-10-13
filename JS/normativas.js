var AbrirDiscord = document.getElementById('btnAbrirDiscord'),
    AbrirWhatsapp = document.getElementById('btnAbrirWhats'),
    abrirReglas = document.getElementById('btnAbrirReglas'),

    CerrarDiscord = document.getElementById('btnCerrarDiscord'),
    CerrarWhatsapp = document.getElementById('btnCerrarWhats'),
    CerrarReglas = document.getElementById('btnCerrarReglas'),

    discord = document.getElementById('container-contnd'),
    whatsApp = document.getElementById('container-contnd-wss');
    reglas = document.getElementById('container-contnd-r');

abrirReglas.addEventListener('click', function(){
    abrirReglas.classList.add('active');
    CerrarReglas.classList.add('active');
    reglas.classList.add('active');
});
CerrarReglas.addEventListener('click', function(){
    reglas.classList.remove('active');
    abrirReglas.classList.remove('active');
    CerrarReglas.classList.remove('active');
})



//DISCORD
AbrirDiscord.addEventListener('click', function(){
    AbrirDiscord.classList.add('active');
    CerrarDiscord.classList.add('active');
    discord.classList.add('active');
});
CerrarDiscord.addEventListener('click', function(){
    AbrirDiscord.classList.remove('active');
    CerrarDiscord.classList.remove('active');
    discord.classList.remove('active');
});

//WHATSAPP
AbrirWhatsapp.addEventListener('click', function(){
    AbrirWhatsapp.classList.add('active');
    CerrarWhatsapp.classList.add('active');
    whatsApp.classList.add('active');
    return false;
});
CerrarWhatsapp.addEventListener('click', function(){
    AbrirWhatsapp.classList.remove('active');
    CerrarWhatsapp.classList.remove('active');
    whatsApp.classList.remove('active');
});