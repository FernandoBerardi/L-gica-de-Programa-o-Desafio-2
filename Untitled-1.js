
// Atividade online 2

var Participantes = ["Pedro","Felipe", "Maria", "Lais"];{

}

while (Participantes.lenght <= 100) {

}
    let DataEvento = new date ("15 de Setembro 2022"); // Data do evento
    let DataAtual = new Date ( "16 De Agosto 2022"); //Data atual
    let Idade = 19; //Idade do participante

    console.log("Seja bem vindo ao sistema de Cadastro.");
    console.log("Hoje é dia : + DataAtual"); //Mostrar data atual
    
    if (DataEvento < DataAtual){
        console.log("Data não permitida");
        console.log ("Selecione uma data posterior")
    }else {
        console.log ("A data do evento é " + DataEvento + "!");
        
    if (Idade <= 18 ){
        console.log ("Cadastro não permitido pela idade!");

        
        
    }else  {

        console.log ("Sua idade -é" + Idade + ", você poderá participar do evento!");
        console.log ("No momento os participantes sao: " + Participantes );
        console.log ("Evevnto foi cadastrado com sucesso")
        console.log ("Ainda é possivel cadastrar mais participantes");
        Participantes.push ("Joana"); //Adicionar mais participantes
        console.log ("Novo Participante cadastrado")
        console.log (" Agora estamos com os seguintes participantes : " + Participantes);

    }
    }