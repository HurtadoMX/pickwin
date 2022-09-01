import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Cuadro from "../components/Cuadro";
import Cuartos from "../components/Cuartos";
import Final from "../components/Final";
import Semis from "../components/Semis";
import { getPickers } from "../redux/actions";


const Home = () => {

    const dispatch = useDispatch()
    const allPickers = useSelector((state)=>state.pickers)

    useEffect(()=>{
        dispatch(getPickers())
    },[]) 

    
    let filtro = allPickers.filter(e=> {return e.away_team !== null})
    const [cuartosTeams, setCuartosTeams] = useState(new Array(filtro.length));
    const [semisTeams, setSemisTeams] = useState(new Array(filtro.length / 2));
    const [finalTeams, setFinalTeams] = useState(new Array(filtro.length) / 4);
    // const [Teams, setTeams] = useState([]);
    
    console.log("filtro", filtro)

    let contador = 1
    
    const handleOnSelectWinner = (partido, teamIndex, short_name) => {
        // console.log("match:", partido);
        // console.log("team info: ", teamIndex, short_name);

        // let partidoIndex = 0;
        // if (partido % 2 === 0) {
        //     partidoIndex = partido / 2;
        // } else if (partido % 2 === 1) {
        //     partidoIndex = (partido + 1) / 2;
        // }

        // let newTeams = cuartosTeams;
        // newTeams[partido - 1] = {
        //     short_name
        // };
        // console.log("nextTeams: ", newTeams);
        setCuartosTeams((prev) => {
            ...prev,
            prev[partido - 1] = { short_name }
        }
        );
    }

    useEffect(() => {
        console.log("changing something...");
    }, [cuartosTeams]);
    // }, [cuartosTeams, semisTeams, finalTeams]);

  return (
    <>
    <div className="left">

        {
            
            filtro && filtro.map((e, index)=>{
                    return(

                    <div className="agroupLeft" key={"octavos-"+index}>
                        <h3 className="numeroPartido">PARTIDO #{contador++}</h3>

                    <div className="containerCuadroLeft">
                        <div className="individual">
                            <h3>{e.away_team.short_name}</h3>
                            <input
                                name={"radio-octavos-"+index}
                                type="radio"
                                onClick={() => handleOnSelectWinner(
                                    index + 1,
                                    0,
                                    e.away_team.short_name
                                )}
                            />
                        </div>
                        <div className="individual">
                            <h3>{e.home_team.short_name}</h3>
                            <input
                                name={"radio-octavos-"+index}
                                type="radio"
                                onClick={() => handleOnSelectWinner(
                                    index + 1,
                                    1,
                                    e.home_team.short_name
                                )}
                            />
                        </div>
                    </div>
                    <br />
                    </div>)
                    
                
            })
        }
        </div>
        <div className="cuartosHome">
            <Cuartos teams={cuartosTeams} semisTeams={semisTeams} setSemisTeams={setSemisTeams} />
        </div>

        <div className="semisHome">
            <Semis teams={semisTeams} finalTeams={finalTeams} setFinalTeams={setFinalTeams} />
        </div>

        <div className="finalHome">
            <Final teams={finalTeams} />
        </div>

        {/* <div className="right">

        {
            
            filtro && filtro.map((e)=>{
                if (e.side === "right") {
                    return(
                        <>
                    <div className="agroupRight">
                    <div>partido # {contador++}</div>
                    <div className="containerCuadroRight">
                        <h3>{e.away_team.short_name}</h3>
                    </div>
                    <br />
                    </div>
                    </>)
                    
                    }
                
            })
        }
        </div> */}


            </>
  )
}

export default Home
