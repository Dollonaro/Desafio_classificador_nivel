// Criar variáveis nome, xp e nivel
let nome = "Dollonaro"
let xp = 10999
let nivel 

// Verifica se o nivel é menor do que 1000
if (xp<1000){
nivel = " Ferro"
} 
// Verifica se o nivel é maior do que 1000 e menor do que 2000
else if (xp>1000 && xp<2000){
nivel = " Bronze"
} 
// Verifica se o nivel é maior do que 2000 e menor do que 5000
else if (xp>2000 && xp<5000){
nivel = " Prata"
} 
// Verifica se o nivel é maior do que 5000 e menor do que 7000
else if (xp>5000 && xp<7000){
nivel = " Ouro"
} 
// Verifica se o nivel é maior do que 7000 e menor do que 8000
else if (xp>7000 && xp<8000){
nivel = " Platina"
} 
// Verifica se o nivel é maior do que 8000 e menor do que 9000
else if (xp>8000 && xp<9000){
nivel = " Ascendente"
} 
// Verifica se o nivel é maior do que 9000 e menor do que 10000
else if (xp>9000 && xp<10000){
nivel = " Imortal"
} 
// Verifica se o nivel é maior do que 10000
else{
nivel = " Radiante"
} 
console.log("O Herói de nome "+ nome + " está no nível de" + nivel)
