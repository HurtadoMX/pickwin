import React from 'react'

const Final = ({teams}) => {
  console.log("final teams: ", teams);

    // let final = [
    //     {
    //       equipo_visitante: { short_name: "United States", abbreviation: "USA" },
    //       away_team_id: 274,
    //       equipo_local: {
    //         name: "Netherlands",
    //         short_name: "Netherlands",
    //         abbreviation: "NED",
    //       },
    //       sort_order: 17,
    //       sort_status: 1,
    //       stage_id: 25,
    //     },
    //   ];
    
    let contador = 15


  return (
    <>
    <div className="left">

        {
            
            teams && teams.map((e)=>{
                    return(
                        <>
                    <div className="agroupFinal">
                        <h3 className="numeroPartido">PARTIDO #{contador++}</h3>

                        <div className="containerCuadroLeft">
                        <div className="individual">
                            <h3>{e.equipo_visitante.short_name}</h3>
                            <input type="radio" />
                        </div>
                        <div className="individual">
                            <h3>{e.equipo_local.short_name}</h3>
                        <input type="radio" />
                            
                        </div>

                    </div>
                    <br />
                    </div>
                    </>)
                    
                
            })
        }
        </div>
            </>
  )
}

export default Final
