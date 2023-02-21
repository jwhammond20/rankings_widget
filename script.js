// Fetch the data from the API
fetch("https://ranks.dynastynerds.com/top10")
  .then((response) => response.json())
  .then((data) => {
    // Map the retrieved data to a simpler format
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

    // Get the players table and its body element
    const playersTable = document.getElementById("players-table");
    const playersTableBody = playersTable.getElementsByTagName("tbody")[0];

    // Iterate through the players array and add each player to the table
    players.forEach((player) => {
      // Create a new row and cells for each player
      const row = playersTableBody.insertRow();
      const rankCell = row.insertCell();
      const playerCell = row.insertCell();
      const rankPositionCell = row.insertCell();
      const positionalRankCell = row.insertCell();

      // Set the text and styles for the rank cell
      rankCell.innerText = player.rank;
      rankCell.classList.add("rank-cell");

      // Set the text and styles for the player cell, which includes the image and name
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

      // Set the text and styles for the rank/position cell
      const rankPositionSpan = document.createElement("span");
      rankPositionSpan.innerText = `${player.team} - ${player.position}`;
      rankPositionSpan.classList.add("team-position-cell");
      rankPositionSpan.classList.add(player.team);
      rankPositionCell.appendChild(rankPositionSpan);

      // Set the text and styles for the positional rank cell
      positionalRankCell.innerText = `${player.position}-${player.positional_rank}`;
      positionalRankCell.classList.add("pos-rank");
    });
  })
  .catch((error) => console.log(error));
