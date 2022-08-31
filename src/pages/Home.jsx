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
    
    console.log("filtro", filtro)

    let contador = 1

  return (
    <>
    <div className="left">

        {
            
            filtro && filtro.map((e)=>{
                    return(
                        <>
                    <div className="agroupLeft">
                        <h3 className="numeroPartido">PARTIDO #{contador++}</h3>

                    <div className="containerCuadroLeft">
                        <div className="individual">
                            <h3>{e.away_team.short_name}</h3>
                            <input type="radio" />
                        </div>
                        <div className="individual">
                            <h3>{e.home_team.short_name}</h3>
                        <input type="radio" />
                            
                        </div>

                    </div>
                    <br />
                    </div>
                    </>)
                    
                
            })
        }
        </div>
        <div className="cuartosHome">
            <Cuartos/>
        </div>

        <div className="semisHome">
            <Semis/>
        </div>

        <div className="finalHome">
            <Final/>
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
