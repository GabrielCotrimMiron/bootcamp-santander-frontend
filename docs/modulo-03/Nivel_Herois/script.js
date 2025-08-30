let nomes = ["Gabriel", "Maria", "Lucas", "Ana"];
let xps = [12000, 4500, 800, 7500];

for (let i = 0; i < nomes.length; i++) 
    {
    let nivelHeroi = "";
    let valorXP = xps[i];

    if (valorXP <= 1000) 
    {
        nivelHeroi = "Ferro";
    } 

    else if (valorXP <= 2000) 
    {
        nivelHeroi = "Bronze";
    } 

    else if (valorXP <= 5000) 
    {
        nivelHeroi = "Prata";
    } 

    else if (valorXP <= 7000) 
    {
        nivelHeroi = "Ouro";
    } 
    
    else if (valorXP <= 8000) 
    {
        nivelHeroi = "Platina";
    } 

    else if (valorXP <= 9000) 
    {
        nivelHeroi = "Ascendente";
    } 
    
    else if (valorXP <= 10000) 
    {
        nivelHeroi = "Imortal";
    } 
    
    else 
    {
        nivelHeroi = "Radiante";
    }

    console.log("O Herói de nome " + nomes[i] + " está no nível de " + nivelHeroi);
}
