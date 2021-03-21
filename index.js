var repositorio = document.querySelector("#rep");
fetch("https://api.github.com/repos/willie240/ReceitaWR")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.length);
    var rep= 0;
    for (rep = 0; rep < data.length; rep++) {
      contenido.innerHTML += `
			 <div class="card">
				<a href="${data[rep].html_url}" target="blank_"> ${data[rep].name} </a>
			 </div>
			 `;
    }
  });

function validar(){
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var assunto = formulario.assunto.value;
    
    if(nome == ""){
        alert('Preencha o campo nome.');
        formulario.nome.focus();
        return false;
    }
    if(email == "" || email.indexOf('@') == -1 ){
        alert('verifique que seu Email seja como o seguinte padrao hola@usuario.com');
        formulario.email.focus();
        return false;
    }
    if(assunto == ""){
        alert('Preencha seu assunto.');
        formulario.assunto.focus();
        return false;
    }
    if(msg == ""){
        alert('Preencha seu mensagem.');
        formulario.msg.focus();
        return false;
    }
}

