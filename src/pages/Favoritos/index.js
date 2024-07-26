import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom';

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    const removerFilme = (index) => {
        const novoFilme = [...filmes];
        novoFilme.splice(index,1);
        setFilmes(novoFilme);
    }

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@reactflix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

return(
    <div className='meus-filmes'>
        <h1>Favoritos</h1>

        
    

        <ul>
            {filmes.map((filme, index) => {
                return(
                    <li key={filme.id}>
                        <span>{filme.title}</span>
                        <div>
                        
                        <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>

                        
                        <button onClick={() => removerFilme(index)} className='remover' >Excluir</button>
                    </div>
                </li>
                )
            })}
        </ul>
    </div>
)
}

export default Favoritos;