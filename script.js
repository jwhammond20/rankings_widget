fetch("https://ranks.dynastynerds.com/top10")
  .then((response) => response.json())
  .then((data) => {
    const players = data.map((player) => {
      return {
        id: player.id,
        first_name_simple: player.master_nerds.first_name_simple,
        last_name_simple: player.master_nerds.last_name_simple,
        team: player.master_nerds.team,
        position: player.master_nerds.position,
        rank: player.rank,
        positional_rank: player.positional_rank,
        image: player.master_nerds.img2,
      };
    });

    const playersTable = document.getElementById("players-table");
    const playersTableBody = playersTable.getElementsByTagName("tbody")[0];

    players.forEach((player) => {
      const row = playersTableBody.insertRow();
      const rankCell = row.insertCell();
      const playerCell = row.insertCell();
      const teamCell = row.insertCell();
      const positionCell = row.insertCell();
      const positionalRankCell = row.insertCell();

      rankCell.innerText = player.rank;

      playerCell.classList.add("player-info");
      const image = document.createElement("img");
      image.src = player.image;
      image.alt = `${player.first_name_simple} ${player.last_name_simple}`;
      image.classList.add("player-image");
      playerCell.appendChild(image);
      const name = document.createElement("span");
      name.innerText = `${player.first_name_simple} ${player.last_name_simple}`;
      name.classList.add("player-name");
      playerCell.appendChild(name);
      teamCell.innerText = player.team;
      positionCell.innerText = player.position;
      positionalRankCell.innerText = player.positional_rank;
    });
  })
  .catch((error) => console.log(error));
