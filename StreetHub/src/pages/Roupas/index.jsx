import React from 'react'
import "./style.css"
import CardRoupas from '../../components/cardRoupas'

function Roupas() {
    const dataCardRoupas = [
        {
            imagem: "efefefefef ",
            titulo: "fefefef",
            descricao: "fdefefefef"
        },

        {
            imagem: "efefefefef ",
            titulo: "fefefef",
            descricao: "fdefefefef"
        },
        
        {
            imagem: "efefefefef ",
            titulo: "fefefef",
            descricao: "fdefefefef"
        },

        {
            imagem: "efefefefef ",
            titulo: "fefefef",
            descricao: "fdefefefef"
        },

        {
            imagem: "efefefefef ",
            titulo: "fefefef",
            descricao: "fdefefefef"
        },

        {
            imagem: "efefefefef ",
            titulo: "fefefef",
            descricao: "fdefefefef"
        },

    ]
    return (
        <div className='section-roupas'>
            <div className='card-roupas'>
                {dataCardRoupas.map((dados, index) => (
                    <CardRoupas key={index} dados={dados} />
                ))}
            </div>
        </div>
    )
}

export default Roupas
