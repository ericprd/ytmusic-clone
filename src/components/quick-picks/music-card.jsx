import { Circle, PlayCircleFilledOutlined } from "@mui/icons-material";
import AlbumPic from "../../assets/images/pexels-min-an-962317.jpg";

export default function MusicCard(props) {
  return (
    <div className='music-metadata'>
      <img src={AlbumPic} alt='album pic' />
      <div className='music-description'>
        <span className='music-title'>Title</span>
        <div className='music-details'>
          <PlayCircleFilledOutlined />
          <span>Artist</span>
          <Circle />
          <span>Album Title</span>
        </div>
      </div>
    </div>
  );
}
