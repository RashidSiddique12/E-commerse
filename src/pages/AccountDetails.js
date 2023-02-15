import loginlogo from '../assets/loginlogo.svg'
import google from '../assets/google-1.svg'
import facebook from '../assets/facebook.svg'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import './Account.css'
// import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';

function AccountDetails() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const font={
        fontSize:'13px',
        marginLeft:'10px'
    }

    const text={
        width:'25vw'
    }

    const btn={
        marginLeft:'10px',
        width:'25vw',
        fontSize:'10px',
        marginBottom:'5px',
        marginTop:'10px',
        height:'2.5vw',
        display:'flex',
        gap:'7px',
        alignItems:'center'
    }

    return (


        <div>
            <center>
                <div className='login-div'>
                    <img src={loginlogo} alt={"login-logo"} />
                    <p>Welcome To Bazaar</p>
                </div>

            </center>

            <div className='container'>
                <div className='container-div'>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <Typography style={font}>
                            E-mail or Phone Number
                        </Typography>

                        <TextField
                            required
                            id=""
                            label=""
                            placeholder="exmpl@mail.com"
                            style={text}
                        />

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={text}>
                            <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                            <OutlinedInput
                                
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <div >
                            <Button style={btn} variant="contained">Login</Button>
                        </div>
                        
                        <center><p style={font}>or</p></center>
                        
                        <div >
                            <Button variant="contained" style={btn}>
                                <img src={facebook} alt='facebook' />Continue With Facebook</Button>
                        </div>
                        
                        <div >
                            <Button style={btn} variant="contained">
                                <img src={google} alt='google' />Continue With Google</Button>
                        </div>

                    </Box>
                </div>
            </div>



        </div>
    )
}

export default AccountDetails;