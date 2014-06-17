	function validador(){
		var campoNome = formEmail.campoNome;
		var emailCliente = formEmail.emailCliente;
		var mensagem = formEmail.mensagem;
		var assunto = formEmail.assunto;
		
		//Valida��es do campo nome
		if (campoNome.value == "") {
			campoNome.focus();
			alert("Campo 'nome' deve ser pre�nchido.");
			return false;	
		};
		if (campoNome.value.length < 4) {
			campoNome.focus();
			alert("Campo 'nome' deve ser maior que 4 caracteres.");
			return false;
		}
		if (campoNome.value.length > 40) {
			campoNome.focus();
			alert("Campo 'nome' deve ser menor que 40 caracteres.");
			return false;
		}
		//Valida��es do campo email
		if ((emailCliente.value == "") || (emailCliente.value.indexOf("@") == -1) || (emailCliente.value.indexOf(".") == -1)) {
			alert("Email inv�lido. Por favor, verifique.");
			return false;
		}
		//Valida��es do campo mensagem
		if (mensagem.value.length > 400) {
			mensagem.focus();
			alert("Quantidade max�ma de caracteres atingido (400 caracteres)");
			return false;
		}
		//Valida��es do campo assunto
		if (assunto.value == "Selecione o assunto do email") {
			assunto.focus();
			alert("Campo assunto, n�o foi selecionado.");
			return false;
		}
		
	}