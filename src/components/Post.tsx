import imagem from "../img/pexels-nikitapishchugin-31313204.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, Checkbox, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div>
      <Card sx={{ margin: 3, backgroundColor: "white" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: "red", color:"white" }} aria-label="Italy">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Pedro Sangy"
          subheader="January 10, 2021"
        />
        <CardMedia sx={{ height: 300 }} image={imagem} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
