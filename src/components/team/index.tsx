import React from "react";
import { ITeam } from "../../interfaces/teams";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface TeamProps {
  team: ITeam;
}

function TeamCard({ team }: TeamProps): React.ReactElement {
  return (
    <Card sx={{ minWidth: 160, maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {team.full_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TeamCard;
