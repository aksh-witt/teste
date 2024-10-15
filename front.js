const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 2400);


//login quicando e mamando 
async function cadastrar(event) {
    event.preventDefault();  // Previne o comportamento padrão do formulário

    // Coleta os dados do formulário
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('senha').value;

    // Verifica se os campos estão preenchidos
    if (!name || !email || !pass) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    // Cria o objeto com os dados a serem enviados para a API
    const data = { name, email, pass };

    try {
        // Realiza a requisição POST para a API
        const response = await fetch('http://localhost:3005/usuario/cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Converte a resposta em JSON
        const result = await response.json();

        // Lida com a resposta
        if (response.ok) {
            alert(result.message);
        } else {
            alert(`Erro: ${result.message}`);
        }
    } catch (error) {
        console.error('Erro durante o cadastro:', error);
        alert("Ocorreu um erro ao tentar realizar o cadastro.");
    }
}

//login NÃO É O CADASTRO

// async function logar(event) {
//     event.preventDefault();  // Previne o comportamento padrão do formulário

//     // Coleta os dados do formulário
//     const email = document.getElementById('email_login').value;
//     const pass = document.getElementById('password_login').value;

//     // Verifica se os campos estão preenchidos
//     if (!email || !pass) {
//         alert("Todos os campos devem ser preenchidos!");
//         return;
//     }

//     // Cria o objeto com os dados a serem enviados para a API
//     const data = { email, pass };

//     try {
//         const response = await fetch("http://localhost:3005/login", {
//             method: 'POST',
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(data),
//         });

//         let results = await response.json();

//         if (results.success) {
//             alert(results.message);

//             // Armazena os dados do usuário no localStorage
//             let userData = results.data;
//             localStorage.setItem('Informacoes', JSON.stringify(userData));

//             // Exibe os dados do perfil
//             let html = document.getElementById('informacoes');
//             let dados = JSON.parse(localStorage.getItem('Informacoes'));

//             // // Atualiza o HTML com o perfil do usuário
//             // html.innerHTML = `<div style="display: flex">
//             //                     Perfil: ${dados.perfil}
//             //                   </div>`;
            
//             // // Mostra a área de informações
//             // html.style.display = 'block';
            
//             // Redireciona o usuário para a página index.html
//             window.location.href = "../index.html"; 
            
//         } else {
//             alert(results.message);
//         }
//     } catch (error) {
//         console.error("Erro ao realizar login:", error);
//         alert("Erro ao realizar login. Tente novamente mais tarde.");
//     }
// }

async function logar(event) {
    event.preventDefault();  // Previne o comportamento padrão do formulário

    // Coleta os dados do formulário
    const email = document.getElementById('email_login').value;
    const pass = document.getElementById('password_login').value;

    // Verifica se os campos estão preenchidos
    if (!email || !pass) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    // Cria o objeto com os dados a serem enviados para a API
    const data = { email, pass };

    try {
        const response = await fetch("http://localhost:3005/login", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        });

        let results = await response.json();

        if (results.success) {
            alert(results.message);

            // Armazena os dados do usuário no localStorage para persistir o login
            let userData = results.data;
            localStorage.setItem('Informacoes', JSON.stringify(userData));

            // Redireciona o usuário para a página index.html
            window.location.href = "index.html"; 
            
        } else {
            alert(results.message);
        }
    } catch (error) {
        console.error("Erro ao realizar login:", error);
        alert("Erro ao realizar login. Tente novamente mais tarde.");
    }
}

//verifica se o usuário está logado em outra pag
// window.onload = function() {
//     let userData = localStorage.getItem('Informacoes');
    
//     if (!userData) {
//         // Se não há dados de login, redireciona para a página de login
//         window.location.href = "login.html";
//     } else {
//         // Caso o usuário esteja logado, você pode exibir as informações dele
//         userData = JSON.parse(userData);
//         document.getElementById('user-info').innerHTML = `Bem-vindo, ${userData.name} - Perfil: ${userData.perfil}`;
//     }
// }

// carrinho vrum vrum

