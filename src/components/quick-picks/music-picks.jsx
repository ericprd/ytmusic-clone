import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import MusicCard from "./music-card";
import "./music-picks.css";

export default function MusicPicks() {
  return (
    <section className='section' style={{ color: "#fff" }}>
      <header className='header'>
        <div className='header-title'>
          <span>Start Radio From A Song</span>
          <span>Popular songs</span>
        </div>
        <div className='header-buttons'>
          <span>
            <ArrowBackIos />
          </span>
          <span>
            <ArrowForwardIos />
          </span>
        </div>
      </header>
      <div className='contents'>
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </section>
  );
}
