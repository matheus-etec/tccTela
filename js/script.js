// Funcão foco, no input do "seuNome"
function foco(){
    $('#meuModal').on('shown.bs.modal', function () {
// o trigger aciona o comportamento padrão do elemento chamado
        $('#seuNome').trigger('focus')
    })
}

// Função para exibir senha e mudar o icone hide/show
function showhidepass(){
    // pegando variaveis dos Id's
    var pass = document.getElementById('password')
    var pass_show_hide = document.getElementById("show_hide_pass")
    
    // se o tipo da senha for igual a password, então faça...
    if(pass.type == "password"){
        // Muda tipo de senha para text
        pass.type = "text"
        // Substitui o icone de show/hide da senha
        pass_show_hide.innerHTML = "<div class='input-group-text'><i class='fa fa-eye-slash' aria-hidden='true' style='margin: 4.75px  9px; height: 11.5px;'></i></div>"
        // Exibição no console do navegador
        console.log(pass.type)
        console.log(pass_show_hide.innerHTML)
    }
    else {
        // Muda tipo de senha para password
        pass.type = "password";
        // Substitui o icone de show/hide da senha
        pass_show_hide.innerHTML = "<div class='input-group-text'><i class='fa fa-eye' aria-hidden='true' style='margin: 4.75px  9px; height: 11.5px;'></i></div>"
        // Exibição no console do navegador
        console.log(pass.type)
        console.log(pass_show_hide.innerHTML)
    }
}