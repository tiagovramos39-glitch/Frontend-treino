let myButton = document.querySelector("button").addEventListener("click", function(){
    alert("Compra efetivada com sucesso!")
})

const campoNome = document.querySelector("#nome")
const campoQuantidade = document.querySelector("#quantidade")
const botaoPedido = document.querySelector("#botaoPedido")
const resultado = document.querySelector("#resultado")

botaoPedido.onclick = function() {
    const nome = campoNome.value
    const quantidade = campoQuantidade.value
    const preco = 79.99

    const total = preco*quantidade

    resultado.textContent = nome + ", seu pedido de " + quantidade + " jogo(s) ficou em R$ " + total + "."
}