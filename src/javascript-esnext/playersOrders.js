const getPlayersOrder = (players, turns) => {
    let list = [...players], player, rest;
    for(let x = 0; x < turns; x++){
        [player, ...rest] = list;
        list = [...rest, player];
    }

    return list;
  };
  
  // Un ejemplo:
  const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
  console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]