let text = document.querySelector("div"),
    input = document.querySelector("input");

input.addEventListener("input", () => {
    text.style.color = input.value;
    text.style.fontSize = input.value;

    if(input.value === '#fff'){
        text.style.backgroundColor = '#000';
        
    }else if(input.value === 'white'){
        text.style.backgroundColor = '#000';
    }
    
    else if(input.value === '#000'){
        text.style.backgroundColor = '#fff';
    }else if(input.value === 'black'){
        text.style.backgroundColor = '#fff'
    }
});