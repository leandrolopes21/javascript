var idade = 78

if (idade < 16) {
    console.log("Você não vota!")
} else if (idade < 18 || idade > 65) {
    console.log("Seu voto é opcional")
} else {
    console.log("Seu voto é obrigatório")
}