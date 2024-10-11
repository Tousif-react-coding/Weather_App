import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Weatherapp.css"
export default function InfoBox({ info }) {
  
  const Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqStqxCXgKnU9X01HKErq4oteDh5N5ptn3yeqFl8yCEg&s"
  const rainImg = "https://images.unsplash.com/photo-1691265690307-47c9a0cffb0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D";
  const hotImg = "https://images.unsplash.com/photo-1581347312461-eb6c267b5c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFyJTIwc2t5JTIwd2l0aCUyMHN1bnxlbnwwfHwwfHx8MA%3D%3D";
  const coldImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DAAYQDom6dVpaJ1FGMpb9QpsCjVQ8wG8Dw&s";
  return (
    <>
      <div className="Infobox">
       
        <div className="container">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image= {info.temp > 15 ? hotImg : info.humidity > 80 ? rainImg : coldImg }

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>

                <p>Temparature = {info.temp}</p> 
                <p>Min-Temparature = {info.tempMin}</p>
                <p>Max-Temparature = {info.tempMax}</p>
                <p>Humidity = {info.humidity}</p>
                <p>The Weather can be describe as {info.weather} and feels like {info.feelsLike}</p>

              </Typography>
            </CardContent>

          </Card>
        </div>
      </div>
    </>
  )
}