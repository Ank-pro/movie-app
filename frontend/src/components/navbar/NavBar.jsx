import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { GenreDropdown } from "../GenreDropDown";
import {NavLink,useNavigate} from 'react-router-dom'
import './nav.css'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar({ setSearchValue }) {

  const navigate = useNavigate();
  const menuId = "primary-search-account-menu";
  
  const mobileMenuId = "primary-search-account-menu-mobile";
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "rgb(210, 180, 200)" }}
      >
        <Toolbar>
          <Typography
            onClick={()=>navigate('/')}
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "block", sm: "block" },
              fontWeight: "bolder",
              cursor : 'pointer',
              background:
                "linear-gradient(to right, rgba(85, 90, 100, 0.8), rgb(210, 150, 100), rgba(170, 135, 195, 0.8))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            Movie Gallery
          </Typography>

          <Search onChange={(e) => setSearchValue(e.target.value)}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search"}}
              sx={{backgroundColor :'grey',opacity : 0.3, borderRadius :'5px', color : 'white'}}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex',gap : '2.5rem' }}>
            <div className="fav-list" onClick={()=> navigate('/fav')}>Favourites</div>
          <GenreDropdown />
          </Box>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
