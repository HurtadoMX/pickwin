import React from "react";

const Cuartos = ({teams, setSemisTeams, semisTeams}) => {
  console.log("cuartos teams: ", teams);
  // let cuartos = [
  //   {
  //     equipo_visitante: { short_name: "United States", abbreviation: "USA" },
  //     away_team_id: 274,
  //     equipo_local: {
  //       name: "Netherlands",
  //       short_name: "Netherlands",
  //       abbreviation: "NED",
  //     },
  //     sort_order: 17,
  //     sort_status: 1,
  //     stage_id: 25,
  //   },

  //   {
  //     equipo_visitante: { short_name: "United States", abbreviation: "USA" },
  //     away_team_id: 274,
  //     equipo_local: {
  //       name: "Netherlands",
  //       short_name: "Netherlands",
  //       abbreviation: "NED",
  //     },
  //     sort_order: 17,
  //     sort_status: 1,
  //     stage_id: 25,
  //   },
  //   {
  //     equipo_visitante: { short_name: "United States", abbreviation: "USA" },
  //     away_team_id: 274,
  //     equipo_local: {
  //       name: "Netherlands",
  //       short_name: "Netherlands",
  //       abbreviation: "NED",
  //     },
  //     sort_order: 17,
  //     sort_status: 1,
  //     stage_id: 25,
  //   },

  //   {
  //     equipo_visitante: { short_name: "United States", abbreviation: "USA" },
  //     away_team_id: 274,
  //     equipo_local: {
  //       name: "Netherlands",
  //       short_name: "Netherlands",
  //       abbreviation: "NED",
  //     },
  //     sort_order: 17,
  //     sort_status: 1,
  //     stage_id: 25,
  //   },
  // ];

  let contador = 9

  const handleOnSelectWinner = (partido, teamIndex, short_name) => {
    // console.log("match:", partido);
    // console.log("team info: ", teamIndex, short_name);

    // let partidoIndex = 0;
    // if (partido % 2 === 0) {
    //     partidoIndex = partido / 2;
    // } else if (partido % 2 === 1) {
    //     partidoIndex = (partido + 1) / 2;
    // }

    let newTeams = semisTeams;
    newTeams[partido - 1] = {
        short_name
    };
    console.log("nextTeams: ", newTeams);
    setSemisTeams(newTeams);
}

  return (
    <>
    <div className="left">

        {
            
            teams && teams.map((e, index)=>{
              console.log("print cuartos e:", e)
                    return(
                    <div className="agroupCuartos" key={"cuartos-"+index}>
                        <h3 className="numeroPartido">PARTIDO #{contador++}</h3>

                    <div className="containerCuadroLeft">
                        <div className="individual">
                            <h3>{e.equipo_visitante.short_name}</h3>
                            <input
                                name={"radio-cuartos-"+index}
                                type="radio"
                                onClick={() => handleOnSelectWinner(
                                    index + 1,
                                    0,
                                    e.away_team.short_name
                                )}
                            />
                        </div>
                        <div className="individual">
                            <h3>{e.equipo_local.short_name}</h3>
                            <input
                                name={"radio-cuartos-"+index}
                                type="radio"
                                onClick={() => handleOnSelectWinner(
                                    index + 1,
                                    1,
                                    e.away_team.short_name
                                )}
                            />
                            
                        </div>

                    </div>
                    <br />
                    </div>)
                    
                
            })
        }
        </div>
            </>
      )
};

export default Cuartos;
