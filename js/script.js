document.body.querySelector("#enviar").onclick=function(){
    var numero = document.body.querySelector("#number").value;
    var tipo = document.body.querySelector("#tipo").value;
    if(numero=='')
        numero='random';
        
    /*Criar um objeto */
    xhttp=new XMLHttpRequest();
    
    /*Tratar o evento de alteração do status e estado da conexao com o servidor */
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            //Pega a resposta do servidor
            let dadosJSON = this.responseText;
            //
            dadosJSON=JSON.parse(dadosJSON);

            console.log(dadosJSON);
            
            //document.body.querySelector("#resultado").innerHTML+=`<p>${dadosJSON.number} (${dadosJSON.type})<br>${dadosJSON.text}</p>`;
            let result = `<tr> <th scope = "row">${dadosJSON.number}</th><td>${dadosJSON.type}</td><td>${dadosJSON.text}</td>`;
            document.body.querySelector(".table").innerHTML+=result;

            document.body.querySelector("#number").value='';
        };
        //https://imgur.com/3tG0HKz
        
    }

    xhttp.open("GET", `https://numbersapi.p.rapidapi.com/${numero}/${tipo}?fragment=true&notfound=floor&json=true`, true);
    xhttp.setRequestHeader("x-rapidapi-host", "numbersapi.p.rapidapi.com");
    xhttp.setRequestHeader("x-rapidapi-key", "8e3e6ff808msh7117f9acc40db8fp1ce176jsn48170044acbb");
    xhttp.send();
    
}
