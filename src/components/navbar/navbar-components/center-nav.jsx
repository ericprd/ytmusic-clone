import { Explore, Home, LibraryMusic, Search } from "@mui/icons-material";

export default function CenterNav() {
  return (
    <div className='center-nav'>
      <div className='desktop-mode'>
        <a href='/'>Home</a>
        <a href='/explore'>Explore</a>
        <a href='/library'>Library</a>
        <div className='search-menu'>
          <Search />
          <span>Search</span>
        </div>
      </div>
      <div className='mobile-mode'>
        <span>
          <Home />
        </span>
        <span>
          <Explore />
        </span>
        <span>
          <LibraryMusic />
        </span>
        <span>
          <Search />
        </span>
      </div>
    </div>
  );
}
