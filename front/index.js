const uri = 'http://localhost:3000/compra'
const cadastro = document.querySelector('#cadastro')
const corpo = document.querySelector('#corpo')
const total = document.querySelector('#total')
let urlimagem = ''

var valTotal = 0;

fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => montarTabela(resp))
    .catch(err => console.error(err));

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const date = new Date
    const body = {
        "id": cadastro.id.value,
        "nome": cadastro.nome.value,
        "descricao": cadastro.descricao.value,
        "quantidade": cadastro.quantidade.value,
        "data": date,
        "imagem": urlimagem,
        "valor": cadastro.valor.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    console.log(body)
    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})
function montarTabela(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let col6 = document.createElement('td')
        let col7 = document.createElement('td')
        let del = document.createElement('button')
        del.innerHTML = '[Excluir]'
        del.setAttribute('onclick', `excluirItem('${e.id}')`)
        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.descricao
        col4.innerHTML = e.quantidade
        col5.innerHTML = e.data
        col6.innerHTML = `<img src="${e.imagem}" alt="${e.nome}" width="100" "gap=10px" />`;
        col7.innerHTML = e.valor
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        linha.appendChild(col6)
        linha.appendChild(col7)
        linha.appendChild(del)
        corpo.appendChild(linha)
        valTotal += e.quantidade * e.valor
        total.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valTotal)
    });
}


function excluirItem(i) {
    if (confirm('Valida Exclusao'))
        fetch(uri + '/excluir/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}

function convertToBase64() {
    // Obtém o elemento de input
    const input = document.getElementById('imageInput');

    // Verifica se um arquivo foi selecionado
    if (input.files && input.files[0]) {
        // Obtém o arquivo
        const file = input.files[0];

        // Cria um leitor de arquivos
        const reader = new FileReader();

        // Define a função a ser executada quando a leitura do arquivo for concluída
        reader.onload = async function (e) {
            // 'e.target.result' contém os dados da imagem em base64
            const base64Data = e.target.result;

            // Exibe a base64 no console (você pode ajustar isso conforme necessário)
            console.log('Base64 da imagem:', base64Data.substring(0, 30));
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            };
            options.body = JSON.stringify({
                base64: base64Data
            })

            const response = await fetch('http://localhost:3000/upload', options)
            const responseJSON = await response.json()
            urlimagem = responseJSON.url
            console.log(responseJSON)
        };

        // Lê o arquivo como uma URL de dados (base64)
        reader.readAsDataURL(file);
    }
}