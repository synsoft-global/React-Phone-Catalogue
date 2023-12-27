/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import { Grid, Typography, Button, Paper, IconButton, Divider } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { getApiCall, jsonParser, DeleteApiCall } from '../../comman/services';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './allPhone.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import EditIcon from '@material-ui/icons/Edit';
import { BASE_URL } from '../../app-config';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import Moment from 'react-moment';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const queryString = require('query-string');
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    },
    title: {
      flexGrow: 1
    }
  })
);
export default function PhoneDetailComponent() {
  const classes = useStyles();
  const [state, setValues] = React.useState<any>({
    id: '',
    phoneDeta: {
      name: '',
      networkTechnology: '',
      lanch: {
        announced: '',
        status: ''
      },
      body: {
        dimensions: '',
        wight: '',
        build: '',
        sim: ''
      },
      imageFileName: {
        image: []
      },
      display: {
        type: '',
        size: '',
        resolution: '',
        protection: ''
      },
      platefrom: {
        os: '',
        chipset: '',
        cpu: '',
        gpu: ''
      },
      memory: {
        cardslote: '',
        internal: ''
      },
      mainCamera: {
        quad: '',
        features: '',
        video: ''
      },
      selfieCamera: {
        dual: '',
        features: '',
        video: ''
      },
      sound: {
        loudspeaker: '',
        jack: ''
      },
      comms: {
        wlan: '',
        bluetooth: '',
        gps: '',
        nfc: '',
        radio: '',
        usb: ''
      },
      featurs: {
        sensors: ''
      },
      bettery: {
        type: '',
        charging: '',
        standby: '',
        musicPlay: ''
      },
      misc: {
        color: '',
        model: '',
        sar_eu: '',
        price: ''
      },
      tests: {
        performance: '',
        display: '',
        camra: '',
        loudspeaker: '',
        batteryLife: ''
      }
    },
    name: '',
    image: '',
    status: 'Available',
    releaseDate: new Date(),
    deletePhone: false,
    toastMessage: ''
  });
  const location = useLocation();
  const history = useHistory();
  const query = queryString.parse(location.search);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [toast, setOpened] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (query.phoneId) {
      GetPhoneDetailById(query.phoneId);
    }
  }, []);

  const GetPhoneDetailById = (id) => {
    // console.log("config data value is final value submit here ",id)
    const methodName = 'phones/getPhoneDetails';
    const parameters = 'id=' + id;
    getApiCall(methodName, parameters)
      .then((response: any) => {
        //  console.log('user data for edit profile is here ',response);
        if (response.statuscode) {
          const temp = response.phone_info[0];
          const res = jsonParser(temp.lanch).status.split('&');
          setValues({
            phoneDeta: response.phone_info[0],
            name: response.phone_info[0].name,
            image: jsonParser(response.phone_info[0].imageFileName).image,
            status: res[0],
            releaseDate: res[1]
          });
        } else {
          //    setValues({ ...state, ['toastMessage']: response.message });
          //    setOpen(true);
        }
      })
      .catch((error) => {
        // setValues({ ...state, ['toastMessage']: error.message });
        // setOpen(true);
      });
  };

  const Back = () => {
    //  history.push('/home');
    history.goBack();
  };

  const editPhone = () => {
    const temp = '/addPhone?phoneId=' + query.phoneId;
    history.push(temp);
  };

  const homeScreen = () => {
    history.push('/home');
  };
  /*
   * this function is used for delete user from server also logout user
   */
  const DeletePhoneDetail = () => {
    if (state.deletePhone) {
      const methodName = 'phones/delete';
      const parameters = 'id=' + query.phoneId;
      DeleteApiCall(methodName, parameters)
        .then((response) => {
          state.toastMessage = response.message;
          setOpen(false);
          state.deletePhone = false;
          setOpened(true);
          setTimeout(function () {
            homeScreen();
          }, 2000);
        })
        .catch((error: any) => {
          state.toastMessage = error.message;
          setOpened(true);
          state.deletePhone = false;
          setOpen(false);
          //  GetUserData();
        });
    }
  };

  const handleClosed = () => {
    setOpened(false);
  };
  /*
   * this function is used for close logout dailog
   */
  const Cancel = () => {
    setOpen(false);
    state.deletePhone = false;
  };

  /*
   * this function is used for delete functionality
   */
  const DeletePhone = () => {
    //  console.log("delete user functionality start here ",phoneId);
    state.deletePhone = true;
    setOpen(true);
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <p className="textHeader">
                  <IconButton aria-label="delete" onClick={() => Back()}>
                    <ArrowBackIcon fontSize="large" />
                  </IconButton>{' '}
                  Phone Detail{' '}
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      {state.name}
                    </Typography>
                    <Button color="inherit" onClick={() => DeletePhone()}>
                      <DeleteIcon />
                    </Button>
                    <Button color="inherit" onClick={() => editPhone()}>
                      <EditIcon />
                    </Button>
                  </Toolbar>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={3} md={3} lg={3}>
                <img
                  className="imageWidth2"
                  src={BASE_URL + '/uploads/' + state.image}
                  alt={state.image}
                />
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9} className="Margin8px">
                <p className="textPEx"> {state.phoneDeta.memory.internal} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.mainCamera).quad} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.selfieCamera).dual} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.tests).batteryLife} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.platefrom).os} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.mainCamera).cpu} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.featurs).sensors} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.misc).model} </p>
                <p className="textPEx"> {jsonParser(state.phoneDeta.misc).price} </p>
              </Grid>
              {/* <Grid item xs={12} sm={12} md={5} lg={5}>
                              .
                          </Grid> */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <AppBar position="static" className="navColor">
                  <Toolbar>
                    {/* <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><VisibilityIcon/> &nbsp; REVIEW</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><CompareIcon/> &nbsp; COMPARE</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><ImageIcon/> &nbsp; PICTURS</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><AttachMoneyIcon/> &nbsp; PRICES</Button>
                                    </Grid> */}
                  </Toolbar>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading"> NETWORK </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading"> Technology </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText">{state.phoneDeta.networkTechnology} </p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> LAUNCH </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Announced </p>
                <p className="secoundHeading ptag2"> Status </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">
                  <Moment format="MMMM DD YYYY">
                    {jsonParser(state.phoneDeta.lanch).announced}
                  </Moment>
                </p>
                <p className="detailText ptag2">
                  <span>{state.status} . Release </span>
                  <Moment format="MMMM DD YYYY">{state.releaseDate}</Moment>
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> BODY </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Dimensions </p>
                <p className="secoundHeading ptag2"> Weight </p>
                <p className="secoundHeading ptag2"> Build </p>
                <p className="secoundHeading ptag2"> SIM </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.body).dimensions} mm</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.body).wight}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.body).build}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.body).sim}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> DISPLAY </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Type </p>
                <p className="secoundHeading ptag2"> Size </p>
                <p className="secoundHeading ptag2"> Resolution </p>
                <p className="secoundHeading ptag2"> Protection </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.display).type}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.display).size}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.display).resolution}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.display).protection}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> PLATFORM </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> OS </p>
                <p className="secoundHeading ptag2"> Chipset </p>
                <p className="secoundHeading ptag2"> CPU </p>
                <p className="secoundHeading ptag2"> GPU </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.platefrom).os}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.platefrom).chipset}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.platefrom).cpu}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.platefrom).gpu}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> MEMORY </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Card slot </p>
                <p className="secoundHeading ptag2"> Internal </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.memory).cardslote}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.memory).internal}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> MAIN CAMERA </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Dual </p>
                <p className="secoundHeading ptag2"> Features </p>
                <p className="secoundHeading ptag2"> Video </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.mainCamera).quad}</p>
                <p className="detailText ptag2">
                  {jsonParser(state.phoneDeta.mainCamera).features}
                </p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.mainCamera).video}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> SELFIE CAMERA </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Dual </p>
                <p className="secoundHeading ptag2"> Features </p>
                <p className="secoundHeading ptag2"> Video </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.selfieCamera).dual}</p>
                <p className="detailText ptag2">
                  {jsonParser(state.phoneDeta.selfieCamera).features}
                </p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.selfieCamera).video}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> SOUND </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Loudspeaker </p>
                <p className="secoundHeading ptag2"> 3.5mm jack </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.sound).loudspeaker}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.sound).jack}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> COMMS </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> WLAN </p>
                <p className="secoundHeading ptag2"> Bluetooth </p>
                <p className="secoundHeading ptag2"> GPS </p>
                <p className="secoundHeading ptag2"> NFC </p>
                <p className="secoundHeading ptag2"> Radio </p>
                <p className="secoundHeading ptag2"> USB </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.comms).wlan}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.comms).bluetooth}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.comms).gps}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.comms).nfc}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.comms).radio}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.comms).usb}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> FEATURES </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Sensors </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.featurs).sensors}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> BATTERY </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Type </p>
                <p className="secoundHeading ptag2"> Charging </p>
                <p className="secoundHeading ptag2"> Stand-by </p>
                <p className="secoundHeading ptag2"> Music play </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.bettery).type}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.bettery).charging}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.bettery).standby}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.bettery).musicPlay}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> MISC </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Colors </p>
                <p className="secoundHeading ptag2"> Models </p>
                <p className="secoundHeading ptag2"> SAR EU </p>
                <p className="secoundHeading ptag2"> Price </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.misc).color}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.misc).model}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.misc).sar_eu}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.misc).price}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="mainHeading ptag2"> TESTS </p>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <p className="secoundHeading ptag2"> Performance </p>
                <p className="secoundHeading ptag2"> Display </p>
                <p className="secoundHeading ptag2"> Camera </p>
                <p className="secoundHeading ptag2"> Loudspeaker </p>
                <p className="secoundHeading ptag2"> Battery life </p>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.tests).performance}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.tests).display}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.tests).camera}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.tests).loudspeaker}</p>
                <p className="detailText ptag2">{jsonParser(state.phoneDeta.tests).audioQuelity}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Divider />
                <Divider />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <AppBar position="static" className="navColor1">
                <Toolbar>
                  {/* <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><VisibilityIcon/> &nbsp; REVIEW</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><CompareIcon/> &nbsp; COMPARE</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><ImageIcon/> &nbsp; PICTURS</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3}>
                                       <Button color="inherit"><AttachMoneyIcon/> &nbsp; PRICES</Button>
                                    </Grid> */}
                </Toolbar>
              </AppBar>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title"> Delete Confirmation </DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this phone detail.?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={DeletePhoneDetail} color="primary">
            Yes
          </Button>
          <Button variant="contained" onClick={Cancel} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={toast}
        autoHideDuration={2000}
        onClose={handleClosed}
        message={state.toastMessage}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="primary" onClick={handleClosed}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
