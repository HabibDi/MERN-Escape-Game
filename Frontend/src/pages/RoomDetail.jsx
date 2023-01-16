import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const RoomDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    //console.log(id);
    const fetchRoomDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/roomdetail/${id}`
        );
        // console.log(response.data);
        setDetails(response.data);
        setIsLoading(false);
        // console.log(details);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoomDetail();
  }, []);

  const handleClick = async () => {
    console.log(update);
    try {
      const response = await axios.put(
        `http://localhost:3000/reservation/${id}`,
        update
      );
      if (response.data) {
        navigate("/history");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <Card sx={{ maxWidth: 1000, margin: "auto", marginTop: 5 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={details.img}
        title={details.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.description}
        </Typography>
        <Typography variant="body2" color="text.primary" mt={2} fontSize={16}>
          Disponibilité
        </Typography>
      </CardContent>
      <CardActions>
        {details.booked.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: 80,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Button
              id="morning"
              size="small"
              variant="contained"
              color="success"
              disabled={item.morning === true && true}
              onClick={() => {
                setUpdate({ morning: !item.morning, dayIndex: index });
                handleClick();
              }}
            >
              MATIN
            </Button>
            <Button
              id="afternoon"
              size="small"
              variant="contained"
              color="success"
              disabled={item.afternoon === true && true}
              onClick={() => {
                setUpdate(!item.morning);
                console.log(update);
              }}
            >
              APRÈSM
            </Button>
          </Box>
        ))}
      </CardActions>
    </Card>
  );
};

export default RoomDetail;
