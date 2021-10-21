import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouteLink, useHistory } from "react-router-dom";
import { auth } from "../firebase";



const useStyles = makeStyles((theme) => ({
  root:{
    height:"61.9vh",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
    minWidth:400,
    minHeight:500,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),

    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();


  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((err) => alert(err.message));
  };

  return (
    <Container component='main' maxWidth='xs' color="red" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Iniciar sesion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Direccion de email'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Recordarme'
          />
          <Button
            onClick={signin}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Iniciar sesion
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
               
              </Link>
            </Grid>
            <Grid item container justify='center'>
              <RouteLink to='/signup'>
                {"No tienes una cuenta? Creala"}
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} className={classes.box}>
     
      </Box>
    </Container>
  );
}
