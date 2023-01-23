function pedido(codigo,quantidade){
    switch(codigo){
        case 100:
            preco=3
            return "Produto: Cachorro quente"+"\n"+
                    "Preço: " + preco.toFixed(2) +"\n"+
                    "Quantidade: "+quantidade +"\n"+
                    "Total: " +(quantidade*preco).toFixed(2)
        case 200:
            preco=4
            return "Produto: Hambúrguer Simples"+"\n"+
                    "Preço: " + preco.toFixed(2) +"\n"+
                    "Quantidade: "+quantidade +"\n"+
                    "Total: " +(quantidade*preco).toFixed(2)
        case 300:
            preco=5.5
            return "Produto: Cheeseburguer"+"\n"+
                    "Preço: " + preco.toFixed(2) +"\n"+
                    "Quantidade: "+quantidade +"\n"+
                    "Total: " +(quantidade*preco).toFixed(2)
        case 400:
            preco=7.5
            return "Produto: Bauru"+"\n"+
                    "Preço: " + preco.toFixed(2) +"\n"+
                    "Quantidade: "+quantidade +"\n"+
                    "Total: " +(quantidade*preco).toFixed(2)
        case 500:
            preco=3.5
            return "Produto: Refrigerante"+"\n"+
                    "Preço: " + preco.toFixed(2) +"\n"+
                    "Quantidade: "+quantidade +"\n"+
                    "Total: " +(quantidade*preco).toFixed(2)
        case 600:
            preco=2.8
            return "Produto: Suco"+"\n"+
                    "Preço: " + preco.toFixed(2) +"\n"+
                    "Quantidade: "+quantidade +"\n"+
                    "Total: " +(quantidade*preco).toFixed(2)
    }
}

console.log(pedido(600,5))
console.log(pedido(200,3))