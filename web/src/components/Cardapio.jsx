import React, { useState } from "react";

export default function Cardapio() {
    const [itens, setItens] = useState([]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");

    return (
        <div className="App">
            <input
                onChange={(event) => setNome(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Nome"
            />
            <br></br>
            <input
                onChange={(event) => setDescricao(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Descrição"
            />
            <br></br>
            <input
                onChange={(event) => setPreco(event.target.value)}
                type="text"
                class="form-control"
                placeholder="Preço"
            />
            <br></br>
            <button onClick={() => setItens(addItem({nomeItem:nome, descricaoItem: descricao, precoItem: preco}))}>
                Adicionar
            </button>
            
            {itens.map((item) => (
                <div id={item.nomeItem} key={item.nome}>
                    <li>{item.nomeItem}</li>
                    <li>{item.descricaoItem}</li>
                    <li>{item.precoItem}</li>
                    <button onClick={() => setItens(RemoveItem(item.nomeItem))}>Remover</button>
                </div>
            ))}
        </div>
    );

    function addItem(item) {
        var itens2 = [...itens];
    
        itens2.push(item);
    
        return itens2;
    }

    function RemoveItem(item) {
        var itens2 = [...itens];

        itens2 = itens2.filter(e => e.nomeItem !== item);

        return itens2
    }
}



