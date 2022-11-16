import React from 'react'
import { Box, 
    Container, 
    Divider, 
    Checkbox, 
    Link, 
    Button, 
    ButtonGroup, 
    TextField, 
    FormControlLabel} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Login() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        <Container style={{display:'flex'}} >
            <Container maxWidth = 'sm' style={{display:'block', paddingTop:50, paddingLeft: 5}}>
                <Box>
                    <img src={require('../../assets/logo/Boost_logo.png')} alt="Boost logo"/>
                </Box>
                <Box>
                    <img src={require('../../assets/logo/login-image1.jpg')} alt = "Boost img"/>
                </Box>
            </Container>
            <Container fixed maxWidth='sm' style={{display:'block', borderRadius: 10, borderColor:'gray'}}>
                <Box style={{margin: 40}}>
                    <h1>Sign in to Boost Associates</h1>
                </Box>
                <Box style={{margin: 40}}>
                <ButtonGroup fullWidth>
                    <Button><GoogleIcon sx={{ color: '#DB4437'}}/></Button>
                    <Button><FacebookIcon/></Button> 
                    <Button><TwitterIcon sx={{ color: '#1DA1F2'}}/></Button>
                </ButtonGroup>
                </Box>
                <Box style={{margin: 40}}>
                    <Divider>OR</Divider>
                </Box>
                <Box style={{margin: 40}}>
                    <TextField
                        required
                        label="Email Address" 
                        variant="outlined" 
                        fullWidth
                        margin= 'normal'
                        />
                    <TextField
                        required
                        label="Password" 
                        variant="outlined"
                        type = "password" 
                        fullWidth
                        margin= 'normal'
                        />
                </Box>

                <Box style={{margin: 40}}>
                    <FormControlLabel
                    style={{float:'left'}}
                    label="Remember Me"
                        control={<Checkbox defaultChecked/>}
                    />
                    <Link href="" label="Forgot Password?" style={{float:'right'}}>Forgot Password?</Link>
                </Box>

                <Box style={{margin: 40}}>
                    <Button label="Login" variant="outlined" fullWidth>Login</Button>
                </Box>
            </Container>
        </Container>
        </>
    )
}

export default Login;