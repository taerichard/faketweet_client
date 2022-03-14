import React, { useEffect} from "react";
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";


const useStyles = makeStyles({
    boxStyle:{
        width: 400, 
        height: 600, 
        backgroundColor:'primary.dark'
    },
    title:{
        fontFamily:"Roboto"
    }
})

const Register = () => {
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submitUserData = () => {
        //const url = "http://127.0.0.1:8000/";
        const api = "account/register/";
        axios.post(api, {
            username,
            email,
            password,
        })
            .then((response) => {
                console.log("hi")
                console.log("response", response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // useEffect(() => {
    //     registerUser();
    // }, [])

    const styles = useStyles();

    return(
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
            <Typography variant="h3" gutterBottom component="div">Register Page</Typography>
            </Grid>
              <Grid item>
                <TextField fullWidth label="Email" id="fullWidth" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Grid>

              <Grid item>
                <TextField fullWidth label="Username" id="fullWidth" value={username} onChange={(e) => setUsername(e.target.value)}/>   
              </Grid>

              <Grid item>
                <TextField fullWidth label="Password" id="fullWidth" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Grid>

              <Grid item>
                <Button variant="outlined" size="large" onClick={() => submitUserData()}>Submit</Button>
              </Grid>
        </Grid>
    )
}


export default Register;