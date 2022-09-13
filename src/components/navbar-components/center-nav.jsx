import { Search } from "@mui/icons-material";

export default function CenterNav() {
  return (
    <div className='center-nav'>
      <a href='/'>Home</a>
      <a href='/explore'>Explore</a>
      <a href='/library'>Library</a>
      <div className='search-menu'>
        <Search />
        <span>Search</span>
      </div>
    </div>
  );
}
