import React, { useState } from "react";
import logo from "../assets/logo2.svg";
import './style.css';
import TextField from "@mui/material/TextField";
// import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { green, grey, pink } from "@mui/material/colors";
// import { borderRadius } from "@mui/system";
import Badge from "@mui/material/Badge";
import Navbar from "./Navbar";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar1({getSearchValue}) {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const cartProducts = useSelector((store) => store.cart);
    let nCartItems = 0;
    cartProducts.map((item) => {
        nCartItems += item.qty;
    });

  //Search filtering
    const [searchText, setSearchText] = useState("");
    const handleSearchText = (event)=>{
      const value = event.target.value;
      setSearchText(value);

      getSearchValue(searchText);
    }

  return (
    <div>
      <Link to="/"><img className="logo" src={logo} alt="Logo" style={{marginLeft: "-3px"}}/></Link>
     <div className="search">
     <TextField
        className="textFeild"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Searching for..."
        value={searchText}
        onChange={handleSearchText}
        InputProps={{
          startAdornment: (
            <SearchIcon position="start">
              <SearchIcon />
            </SearchIcon>
          ),
        }}
      />
     </div>
      {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl> */}

      <Link to="/account"> <AccountCircleOutlinedIcon fontSize="large" sx={{ bgcolor: grey[300] }} id="account"/>
</Link>
{/* cart  */}
      <Link to='/cart'>
      <Badge badgeContent={nCartItems} color="success" id="badge">
        <ShoppingBagOutlinedIcon
          fontSize="medium"
          sx={{ bgcolor: grey[300] }}
        />
      </Badge>
      </Link>

      <Navbar />
    </div>
  );
}

export default Navbar1;
