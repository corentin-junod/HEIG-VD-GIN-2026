
// Partie 1
{
    const slider = document.getElementById("slider_1");
    console.log("La valeur du slider 1 est : " + slider.value);
}

// Partie 2
{
    const slider = document.getElementById("slider_2");
    const text = document.getElementById("text_2");
    // L'événement "input" s'active dès que la valeur change
    // L'événement "change" s'active dès que l'utilisateur arrêt d'interagir avec l'élément et que la valeur a changé.
    slider.addEventListener('input', ()=>text.value = slider.value);
}

// Parti 3 
{
    const slider = document.getElementById("slider_3");
    const text = document.getElementById("text_3");
    slider.addEventListener('input', ()=>text.value = slider.value);
    text.addEventListener('input', ()=>slider.value = text.value);
}

// Parti 4
{
    const slider = document.getElementById("slider_4");
    const text = document.getElementById("text_4");
    slider.addEventListener('input', ()=>{
        text.value = slider.value;
        document.getElementById('logo').style.width = slider.value+"px";
    });
    text.addEventListener('input', ()=>{
        slider.value = text.value;
        document.getElementById('logo').style.width = slider.value+"px";
    });
}