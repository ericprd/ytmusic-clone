import ytmusic from "./youtube-music-seeklogo.com.svg";

export default function LeftNav() {
  return (
    <a href='/' className='left-nav'>
      <img src={ytmusic} alt='Youtube Music' />
      <span>Music</span>
    </a>
  );
}
