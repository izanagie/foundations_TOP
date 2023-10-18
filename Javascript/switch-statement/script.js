const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather(){
    const choice = select.value;
    
    switch (choice){
        case "sunny":
            para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
            break;
        case "rainy":
            para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
            break;
        case "snowing":
            para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
            break;
        case "overcast":
            para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
            break;
        default:
            para.textContent = ""

    }
}

const select1 = document.getElementById("theme");
const html = document.querySelector("html");

function update(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select1.addEventListener("change", ()=>{
    select1.value === "black"?update("black","white"):update("white", "black")
})