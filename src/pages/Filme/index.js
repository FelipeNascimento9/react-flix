import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';
import api from "../../services/api";

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
        await api.get(`/movie/${id}`, {
                params:{
                api_key: "35041bd36d1f6953dd42e41aa4cf531d",
                language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("FILME NAO ENCONTRADO")
                navigate("/", { replace: true });
                return;
            })
        }
    
        loadFilme();


        return () => {
            console.log("DESMONTADO")
            }
    }, [navigate, id])


    function salvarFilme(){
    const minhaLista = localStorage.getItem("@reactflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id)

    if(hasFilme){
        alert("JÁ ESTÁ NA LISTA");
        return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@reactflix", JSON.stringify(filmesSalvos));
    alert("FILME SALVO")
}
    
        if(loading){
            return(
                <div className="filme-info">
                    <h1>Detalhes do Filme</h1>
                </div>
            )
        }        

return(
    <div className="filme-info">
        <h1>{filme.title}</h1>
       <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="filme.title" /> 


       <h3>Sinopse</h3>
       <span>{filme.overview}</span>

       <strong>Avaliação: {filme.vote_average} /10</strong>

       <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
        
        <button>
        <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>                
        Trailer
            </a>
        </button>
       </div>
       
    </div>
)
}

export default Filme;