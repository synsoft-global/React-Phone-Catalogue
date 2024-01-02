/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect } from 'react';
import {
  Grid,
  Select,
  Button,
  TextField,
  InputLabel,
  FormHelperText,
  Paper,
  IconButton,
  MenuItem,
  FormControl,
  Divider
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import { useHistory, useLocation } from 'react-router-dom';
import placeholder from '../../assets/place.png';
import { getApiCall, UpdateApiCall, postApiCall, jsonParser } from '../../comman/services';
import { BASE_URL } from '../../app-config';
const queryString = require('query-string');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: 24
    },
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
      marginTop: 16
    },
    button: {
      margin: theme.spacing(3),
      width: 140
    },
    profilePic: {
      height: 220,
      minWidth: 164
    }
  })
);
export default function AddEditPhone() {
  const classes = useStyles();
  const [toast, setOpened] = React.useState(false);
  const [state, setValues] = React.useState<any>({
    id: '',
    file: placeholder,
    network: {},
    name: '',
    status: '',
    diamention1: 0,
    diamention2: 0,
    diamention3: 0,
    weight: '',
    build: '',
    sim: '',
    dType: '',
    dSize: '',
    dResolution: '',
    dProtection: '',
    os: '',
    chipSet: '',
    cpu: '',
    gpu: '',
    cardSlot: '',
    internalMemory: '',
    main_camera_triple: '',
    main_camera_feature: '',
    main_camera_video: '',
    selfi_camera_single: '',
    selfi_camera_feature: '',
    selfi_camera_video: '',
    soundJack: '',
    loaudSpeaker: '',
    wlan: '',
    bluetooth: '',
    gps: '',
    nfc: '',
    radio: '',
    usb: '',
    sensors: '',
    batteryType: '',
    batterCharging: '',
    music_play: '',
    stand_by: '',
    color: '',
    model: '',
    price: '',
    head: '',
    body: '',
    performance: '',
    display: '',
    camera: '',
    loaud_speker: '',
    audio_quelity: '',
    battery_life: '',
    header: 'Add',
    imageName: '',
    toastMessage: '',
    nameError: false,
    neworkError: false,
    announcedDateError: false,
    statusError: false,
    releaseDateError: false,
    weightError: false,
    buildError: false,
    simError: false,
    osError: false,
    chipsetError: false,
    gpuError: false,
    cpuError: false,
    internalMemoryError: false,
    main_camera_tripleError: false,
    main_camera_videoError: false,
    main_camera_featureError: false,
    selfi_camera_videoError: false,
    selfi_camera_featureError: false,
    selfi_camera_singleError: false
  });
  const history = useHistory();
  const location = useLocation();
  const [toastMessage, SettoastMessage] = React.useState('');
  const query = queryString.parse(location.search);
  const [imageData, setImage] = React.useState<any>();

  const [announcedDate, setSelectedDate] = React.useState<Date | null>(new Date());
  const [releaseDate, setSelectedDate1] = React.useState<Date | null>(new Date());

  const handleDateChange1 = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDateChange2 = (date: Date | null) => {
    setSelectedDate1(date);
  };

  const NetworkData = [
    {
      name: '2G bands',
      values: 'GSM 850 / 900 / 1800 / 1900 CDMA 800 / 1900'
    },
    {
      name: '3G bands',
      values: 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO'
    },
    {
      name: '4G bands',
      values: '71 - A2379, A2461, A2462'
    },
    {
      name: '5G bands',
      values: '261 SA/NSA/Sub6/mmWave - A2379 SA/NSA/Sub6 - A2461, A2462'
    },
    {
      name: 'Speed',
      values: 'HSPA 42.2/5.76 Mbps, LTE-A, EV-DO Rev.A 3.1 Mbps, 5G'
    }
  ];

  const handleChange = (prop) => (event) => {
    if (prop === 'checkedA') {
      setValues({ ...state, [event.target.name]: event.target.checked });
      // setValues({ ...state, [prop]: event.target.checked });
    } else {
      setValues({ ...state, [prop]: event.target.value });
      //  console.log("userdata table responce is ", state.education);
    }
  };
  /**
   * Defining `Uploads image function `
   * @author synsoft global
   */
  const uploadsImage = (prop) => (event) => {
    setValues({ ...state, file: URL.createObjectURL(event.target.files[0]) });
    setImage(event.target.files[0]);
  };

  const homeScreen = () => {
    history.push('/home');
  };
  const Back = () => {
    history.goBack();
  };

  const FromSubmit = (e) => {
    e.preventDefault();
    //console.log("from submited value is here ",e);
    const status = state.status + '&' + releaseDate;
    const dimensions = state.diamention1 + '*' + state.diamention2 + '*' + state.diamention3;
    const postData = {
      name: state.name,
      networkTechnology: state.network,
      lanch: {
        announced: announcedDate,
        status: status
      },
      body: {
        dimensions: dimensions,
        wight: state.weight,
        build: state.build,
        sim: state.sim
      },
      imageFileName: {
        image: ''
      },
      display: {
        type: state.dType,
        size: state.dSize,
        resolution: state.dResolution,
        protection: state.dProtection
      },
      platefrom: {
        os: state.os,
        chipset: state.chipSet,
        cpu: state.cpu,
        gpu: state.gpu
      },
      memory: {
        cardslote: state.cardSlot,
        internal: state.internalMemory
      },
      mainCamera: {
        quad: state.main_camera_triple,
        features: state.main_camera_feature,
        video: state.main_camera_video
      },
      selfieCamera: {
        dual: state.selfi_camera_single,
        features: state.selfi_camera_feature,
        video: state.selfi_camera_video
      },
      sound: {
        loudspeaker: state.loaudSpeaker,
        jack: state.soundJack
      },
      comms: {
        wlan: state.wlan,
        bluetooth: state.bluetooth,
        gps: state.gps,
        nfc: state.nfc,
        radio: state.radio,
        usb: state.usb
      },
      featurs: {
        sensors: state.sensors
      },
      bettery: {
        type: state.batteryType,
        charging: state.batterCharging,
        standby: state.stand_by,
        musicPlay: state.music_play
      },
      misc: {
        color: state.color,
        model: state.model,
        sar_eu: state.head + '&' + state.body,
        price: state.price
      },
      tests: {
        performance: state.performance,
        display: state.display,
        camera: state.camera,
        loudspeaker: state.loaud_speker,
        audioQuelity: state.audio_quelity,
        batteryLife: state.battery_life
      }
    };

    //  console.log("post this data on server",postData);
    if (state.header === 'Add') {
      if (!imageData) {
        const methodName = 'phones/Create';
        //var parameters = 'id='+state.userId;
        postApiCall(methodName, postData)
          .then((response: any) => {
            SettoastMessage('Phone Detail added sucessfully!');
            setOpened(true);
            setTimeout(function () {
              homeScreen();
            }, 2000);
          })
          .catch((error: any) => {
            SettoastMessage(error.message);
            setOpened(true);
          });
      } else {
        const formData = new FormData();
        formData.append('image', imageData, imageData.name);
        // formData.append("image", state.file);
        const methodName = 'phones/upload';
        postApiCall(methodName, formData)
          .then((response: any) => {
            //  console.log("server responce data is here ",response);
            if (response.message === 'image uploded successfully') {
              postData.imageFileName.image = response.file.filename;
              const methodName = 'phones/Create';
              postApiCall(methodName, postData)
                .then((response: any) => {
                  // console.log("update user data is here ",response);
                  SettoastMessage('Phone Detail added sucessfully!');
                  setOpened(true);
                  setTimeout(function () {
                    homeScreen();
                  }, 2000);
                })
                .catch((error: any) => {
                  SettoastMessage(error.message);
                  setOpened(true);
                });
            } else {
              SettoastMessage(response.message);
              setOpened(true);
            }
          })
          .catch((error: any) => {
            console.log('server responce data error is here ', error);
            SettoastMessage(error.message);
            setOpened(true);
          });
      }
    } else {
      if (!imageData) {
        postData.imageFileName.image = state.imageName;
        const methodName = 'phones/update';
        const parameters = 'id=' + state.id;
        UpdateApiCall(methodName, parameters, postData)
          .then((response: any) => {
            SettoastMessage('Phone detail updated sucessfully!');
            setOpened(true);
            GetPhoneDetailById(query.phoneId);
            setTimeout(function () {
              homeScreen();
            }, 2000);
          })
          .catch((error: any) => {
            console.log('update user data is here 345353534', error);
            // state.toastMessage = error.message;
            SettoastMessage(error.message);
            setOpened(true);
          });
      } else {
        const formData = new FormData();
        formData.append('image', imageData, imageData.name);
        // formData.append("image", state.file);
        const methodName = 'phones/upload';
        postApiCall(methodName, formData)
          .then((response: any) => {
            // console.log("server responce data is here &&&&&&&&& ",response);
            if (response.message === 'image uploded successfully') {
              postData.imageFileName.image = response.file.filename;
              const methodName = 'phones/update';
              const parameters = 'id=' + state.id;
              UpdateApiCall(methodName, parameters, postData)
                .then((response: any) => {
                  console.log('update user data is here ', response);
                  GetPhoneDetailById(query.phoneId);
                  SettoastMessage('Phone detail updated sucessfully!');
                  setOpened(true);
                  setTimeout(function () {
                    homeScreen();
                  }, 2000);
                })
                .catch((error: any) => {
                  SettoastMessage(error.message);
                  setOpened(true);
                });
            } else {
              SettoastMessage(response.message);
              setOpened(true);
            }
          })
          .catch((error: any) => {
            console.log('server responce data error is here ', error);
            SettoastMessage(error.message);
            setOpened(true);
          });
      }
    }
  };

  const FromClear = () => {
    setValues({
      file: placeholder,
      network: {},
      name: '',
      status: '',
      diamention1: 0,
      diamention2: 0,
      diamention3: 0,
      weight: '',
      build: '',
      sim: '',
      dType: '',
      dSize: '',
      dResolution: '',
      dProtection: '',
      os: '',
      chipSet: '',
      cpu: '',
      gpu: '',
      cardSlot: '',
      internalMemory: '',
      main_camera_triple: '',
      main_camera_feature: '',
      main_camera_video: '',
      selfi_camera_single: '',
      selfi_camera_feature: '',
      selfi_camera_video: '',
      soundJack: '',
      loaudSpeaker: '',
      wlan: '',
      bluetooth: '',
      gps: '',
      nfc: '',
      radio: '',
      usb: '',
      sensors: '',
      batteryType: '',
      batterCharging: '',
      music_play: '',
      stand_by: '',
      color: '',
      model: '',
      price: '',
      head: '',
      body: '',
      performance: '',
      display: '',
      camera: '',
      loaud_speker: '',
      audio_quelity: '',
      battery_life: ''
    });
  };

  const onKeyUp = (prop) => (event) => {
    console.log('i am here to check');
    switch (prop) {
      case 'name':
        if (state.name === '' || state.name === null || state.name.length > 50) {
          setValues({ ...state, nameError: true });
          // state.nameError = true;
        } else {
          setValues({ ...state, nameError: false });
          // state.nameError = false;
        }
        break;
      case 'network':
        if (Object.keys(state.network).length === 0 || state.network === null) {
          setValues({ ...state, neworkError: true });
        } else {
          setValues({ ...state, neworkError: false });
        }
        break;
      case 'announcedDate':
        if (announcedDate) {
          setValues({ ...state, announcedDateError: true });
        } else {
          setValues({ ...state, announcedDateError: false });
        }
        break;
      case 'status':
        if (state.status === '' || state.status === null) {
          setValues({ ...state, statusError: true });
        } else {
          setValues({ ...state, statusError: false });
        }
        break;
      case 'releaseDate':
        if (releaseDate) {
          setValues({ ...state, releaseDateError: true });
        } else {
          setValues({ ...state, releaseDateError: false });
        }
        break;
      case 'weight':
        if (state.weight === '' || state.weight === null) {
          setValues({ ...state, weightError: true });
        } else {
          setValues({ ...state, weightError: false });
        }
        break;
      case 'build':
        if (state.build === '' || state.build === null) {
          setValues({ ...state, buildError: true });
        } else {
          setValues({ ...state, buildError: false });
        }
        break;
      case 'sim':
        if (state.sim === '' || state.sim === null) {
          setValues({ ...state, simError: true });
        } else {
          setValues({ ...state, simError: false });
        }
        break;
      case 'os':
        if (state.os === '' || state.os === null) {
          setValues({ ...state, osError: true });
        } else {
          setValues({ ...state, osError: false });
        }
        break;
      case 'chipSet':
        if (state.chipSet === '' || state.chipSet === null) {
          setValues({ ...state, chipsetError: true });
        } else {
          setValues({ ...state, chipsetError: false });
        }
        break;
      case 'cpu':
        if (state.cpu === '' || state.cpu === null) {
          setValues({ ...state, cpuError: true });
        } else {
          setValues({ ...state, cpuError: false });
        }
        break;
      case 'gpu':
        if (state.gpu === '' || state.gpu === null) {
          setValues({ ...state, gpuError: true });
        } else {
          setValues({ ...state, gpuError: false });
        }
        break;
      case 'internalMemory':
        if (state.internalMemory === '' || state.internalMemory === null) {
          setValues({ ...state, internalMemoryError: true });
        } else {
          setValues({ ...state, internalMemoryError: false });
        }
        break;
      case 'main_camera_triple':
        if (state.main_camera_triple === '' || state.main_camera_triple === null) {
          setValues({ ...state, main_camera_tripleError: true });
        } else {
          setValues({ ...state, main_camera_tripleError: false });
        }
        break;
      case 'main_camera_feature':
        if (state.main_camera_feature === '' || state.main_camera_feature === null) {
          setValues({ ...state, main_camera_featureError: true });
        } else {
          setValues({ ...state, main_camera_featureError: false });
        }
        break;
      case 'main_camera_video':
        if (state.main_camera_video === '' || state.main_camera_video === null) {
          setValues({ ...state, main_camera_videoError: true });
        } else {
          setValues({ ...state, main_camera_videoError: false });
        }
        break;
      case 'selfi_camera_single':
        if (state.selfi_camera_single === '' || state.selfi_camera_single === null) {
          setValues({ ...state, selfi_camera_singleError: true });
        } else {
          setValues({ ...state, selfi_camera_singleError: false });
        }
        break;
      case 'selfi_camera_feature':
        if (state.selfi_camera_feature === '' || state.selfi_camera_feature === null) {
          setValues({ ...state, selfi_camera_featureError: true });
        } else {
          setValues({ ...state, selfi_camera_featureError: false });
        }
        break;
      case 'selfi_camera_video':
        if (state.selfi_camera_video === '' || state.selfi_camera_video === null) {
          setValues({ ...state, selfi_camera_videoError: true });
        } else {
          setValues({ ...state, selfi_camera_videoError: false });
        }
        break;
      default:
        break;
    }
  };
  // function Inliation() {
  useEffect(() => {
    console.log('inilize value start here  ', query);
    //   let id =  query.phoneId?query.phoneId:null;
    if (query.phoneId) {
      //  setValues({id: query.phoneId,header: 'Edit' });
      //  console.log("inilize value start here  ",state)
      //  setValues({ ...state, header: 'Edit' });
      GetPhoneDetailById(query.phoneId);
      // state.id = query.phoneId;
    } else {
      state.id = '';
    }
  }, []);

  /**
   * Defining function to get user data from server
   * @author Virendra Yadav
   */
  const GetPhoneDetailById = (id) => {
    console.log('get phone state here ', id);
    const methodName = 'phones/getPhoneDetails';
    const parameters = 'id=' + id;
    getApiCall(methodName, parameters)
      .then((response: any) => {
        //  console.log('user data for edit profile is here ',response);
        if (response.statuscode) {
          const temp: any = response.phone_info[0];
          const res = jsonParser(temp.lanch).status.split('&');
          console.log('data for edit profile is here ', response);
          setSelectedDate(jsonParser(temp.lanch).announced);
          setSelectedDate1(res[1]);
          const daimention = jsonParser(temp.body).dimensions.split('*');
          const misc = jsonParser(temp.misc).sar_eu.split('&');
          setValues({
            id: query.phoneId,
            header: 'Edit',
            imageName: jsonParser(temp.imageFileName).image,
            file: BASE_URL + '/uploads/' + jsonParser(temp.imageFileName).image,
            network: temp.networkTechnology,
            name: temp.name,
            status: res[0],
            diamention1: daimention[0],
            diamention2: daimention[1],
            diamention3: daimention[2],
            weight: jsonParser(temp.body).wight,
            build: jsonParser(temp.body).build,
            sim: jsonParser(temp.body).sim,
            dType: jsonParser(temp.display).type,
            dSize: jsonParser(temp.display).size,
            dResolution: jsonParser(temp.display).resolution,
            dProtection: jsonParser(temp.display).protection,
            os: jsonParser(temp.platefrom).os,
            chipSet: jsonParser(temp.platefrom).chipset,
            cpu: jsonParser(temp.platefrom).cpu,
            gpu: jsonParser(temp.platefrom).gpu,
            cardSlot: jsonParser(temp.memory).cardslote,
            internalMemory: jsonParser(temp.memory).internal,
            main_camera_triple: jsonParser(temp.mainCamera).quad,
            main_camera_feature: jsonParser(temp.mainCamera).feature,
            main_camera_video: jsonParser(temp.mainCamera).video,
            selfi_camera_single: jsonParser(temp.selfieCamera).dual,
            selfi_camera_feature: jsonParser(temp.selfieCamera).feature,
            selfi_camera_video: jsonParser(temp.selfieCamera).video,
            soundJack: jsonParser(temp.sound).jack,
            loaudSpeaker: jsonParser(temp.sound).loudspeaker,
            wlan: jsonParser(temp.comms).wlan,
            bluetooth: jsonParser(temp.comms).bluetooth,
            gps: jsonParser(temp.comms).gps,
            nfc: jsonParser(temp.comms).nfc,
            radio: jsonParser(temp.comms).radio,
            usb: jsonParser(temp.comms).usb,
            sensors: jsonParser(temp.featurs).sensors,
            batteryType: jsonParser(temp.bettery).type,
            batterCharging: jsonParser(temp.bettery).charging,
            music_play: jsonParser(temp.bettery).musicPlay,
            stand_by: jsonParser(temp.misc).video,
            color: jsonParser(temp.misc).color,
            model: jsonParser(temp.misc).model,
            price: jsonParser(temp.misc).price,
            head: misc[0],
            body: misc[1],
            performance: jsonParser(temp.tests).performance,
            display: jsonParser(temp.tests).display,
            camera: jsonParser(temp.tests).camera,
            loaud_speker: jsonParser(temp.tests).loudspeaker,
            audio_quelity: jsonParser(temp.tests).audioQuelity,
            battery_life: jsonParser(temp.tests).batteryLife
          });
        } else {
          //    setValues({ ...state, ['toastMessage']: response.message });
          //    setOpened(true);
        }
      })
      .catch((error) => {
        // setValues({ ...state, ['toastMessage']: error.message });
        // setOpened(true);
      });
  };

  /**
   * snakbar open close handle here
   *  @author Virendra Yadav
   */

  const handleClosed = () => {
    setOpened(false);
  };

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p className="textHeader">
            <IconButton aria-label="delete" onClick={() => Back()}>
              <ArrowBackIcon fontSize="large" />
            </IconButton>{' '}
            {state.header} Phone Catalog list{' '}
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <form>
              <Grid container direction="row">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="fileUpload btn btn-primary">
                    <label className="upload">
                      <input
                        type="file"
                        id="uploadImage"
                        multiple={false}
                        accept={'image/*'}
                        onChange={uploadsImage('image')}
                      />
                      <img src={state.file} className={classes.profilePic} alt="uploaded" />
                      {/* <FormHelperText className="errorText" > {imageData ? '' : 'phone image is required !'}</FormHelperText> */}
                    </label>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Grid container direction="row">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField
                        className="Margin8px width"
                        id="name"
                        value={state.name}
                        onChange={handleChange('name')}
                        type="text"
                        label="name"
                        onKeyUp={onKeyUp('name')}
                        onBlur={onKeyUp('name')}
                        error={state.nameError}
                        required
                        helperText={state.nameError ? 'Phone name is required !' : ''}
                        inputProps={{ maxLength: 50, minLength: 1 }}
                      />
                      {/* inputProps={{maxLength: 50,minLength: 1, }} */}
                      {/* <FormHelperText className="errorText">Phone name is required !</FormHelperText> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <p className="inputHeading"> NETWORK </p>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl
                        className={classes.formControl}
                        required
                        error={state.neworkError}>
                        <InputLabel id="network-label1">Technology</InputLabel>
                        <Select
                          labelId="network-label2"
                          id="network-helper"
                          value={state.network}
                          onBlur={onKeyUp('network')}
                          onChange={handleChange('network')}>
                          {NetworkData.map((item) => (
                            <MenuItem key="{item}" value={item.name}>
                              {' '}
                              <span className="BoldText"> {item.name} - </span> {item.values}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText>
                          {state.neworkError ? 'Network technology is required !' : ''}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> LAUNCH </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MMMM dd yyyy"
                        margin="normal"
                        id="announcedDate"
                        label="Announced Date"
                        value={announcedDate}
                        onChange={handleDateChange1}
                        KeyboardButtonProps={{
                          'aria-label': 'change date'
                        }}
                        onBlur={onKeyUp('announcedDate')}
                        required
                        error={state.announcedDateError}
                        helperText={state.announcedDateError ? 'Announced Date is required!' : ''}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <FormControl className={classes.formControl} required error={state.statusError}>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                      className="Margin15px"
                      labelId="status-label"
                      id="status"
                      value={state.status}
                      onChange={handleChange('status')}
                      onBlur={onKeyUp('status')}>
                      <MenuItem value="Coming soon">Coming soon </MenuItem>
                      <MenuItem value="Available"> Available </MenuItem>
                      <MenuItem value="Sold out"> Sold out </MenuItem>
                    </Select>
                    <FormHelperText>
                      {' '}
                      {state.statusError ? 'Status is required!' : ''}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MMMM dd yyyy"
                        margin="normal"
                        id="releaseDate"
                        label="Release Date"
                        value={releaseDate}
                        onChange={handleDateChange2}
                        KeyboardButtonProps={{
                          'aria-label': 'change date'
                        }}
                        onBlur={onKeyUp('releaseDate')}
                        required
                        error={state.releaseDateError}
                        helperText={state.releaseDateError ? 'Release Date is required!' : ''}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> BODY </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <p className="inputHeading3"> Dimensions </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        id="diamention1"
                        value={state.diamention1}
                        onChange={handleChange('diamention1')}
                        className="width100"
                        type="number"
                        label="Dimension (in mm)"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        id="diamention2"
                        value={state.diamention2}
                        onChange={handleChange('diamention2')}
                        className="width100"
                        type="number"
                        label="Dimension (in mm)"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        id="diamention3"
                        value={state.diamention3}
                        onChange={handleChange('diamention3')}
                        className="width100"
                        type="number"
                        label="Dimension (in mm)"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    className="Margin8px width100"
                    value={state.weight}
                    onChange={handleChange('weight')}
                    id="weight"
                    type="text"
                    label="Weight"
                    onKeyUp={onKeyUp('weight')}
                    onBlur={onKeyUp('weight')}
                    error={state.weightError}
                    required
                    helperText={state.weightError ? 'Phone weight is required !' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="build"
                    value={state.build}
                    onChange={handleChange('build')}
                    className="Margin8px width100"
                    type="text"
                    label="Build"
                    onKeyUp={onKeyUp('build')}
                    onBlur={onKeyUp('build')}
                    error={state.buildError}
                    required
                    helperText={state.buildError ? 'Phone build info is required !' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="sim"
                    value={state.sim}
                    onChange={handleChange('sim')}
                    className="Margin8px width100"
                    type="text"
                    label="SIM"
                    onKeyUp={onKeyUp('sim')}
                    onBlur={onKeyUp('sim')}
                    error={state.simError}
                    required
                    helperText={state.simError ? 'Phone sim info is required !' : ''}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> DISPLAY </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    className="Margin8px"
                    value={state.dType}
                    onChange={handleChange('dType')}
                    id="dType"
                    type="text"
                    label="Type"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    id="dSize"
                    value={state.dSize}
                    onChange={handleChange('dSize')}
                    className="Margin8px"
                    type="text"
                    label="Size"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    id="dResolution"
                    value={state.dResolution}
                    onChange={handleChange('dResolution')}
                    className="Margin8px"
                    type="text"
                    label="Resolution"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    id="dProtection"
                    value={state.dProtection}
                    onChange={handleChange('dProtection')}
                    className="Margin8px"
                    type="text"
                    label="Protection"
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> PLATFORM </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    className="Margin8px"
                    value={state.os}
                    onChange={handleChange('os')}
                    id="os"
                    type="text"
                    label="OS"
                    onKeyUp={onKeyUp('os')}
                    onBlur={onKeyUp('os')}
                    error={state.osError}
                    required
                    helperText={state.osError ? 'Phone OS info is required !' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    id="chipSet"
                    value={state.chipSet}
                    onChange={handleChange('chipSet')}
                    className="Margin8px"
                    type="text"
                    label="Chipset"
                    onKeyUp={onKeyUp('chipSet')}
                    onBlur={onKeyUp('chipSet')}
                    error={state.chipsetError}
                    required
                    helperText={state.chipsetError ? 'Phone chipSet info is required !' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    id="cpu"
                    value={state.cpu}
                    onChange={handleChange('cpu')}
                    className="Margin8px"
                    type="text"
                    label="CPU"
                    onKeyUp={onKeyUp('cpu')}
                    onBlur={onKeyUp('cpu')}
                    error={state.cpuError}
                    required
                    helperText={state.cpuError ? 'Phone cpu info is required !' : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <TextField
                    id="gpu"
                    value={state.gpu}
                    onChange={handleChange('gpu')}
                    className="Margin8px"
                    type="text"
                    label="GPU"
                    onKeyUp={onKeyUp('gpu')}
                    onBlur={onKeyUp('gpu')}
                    error={state.gpuError}
                    required
                    helperText={state.gpuError ? 'Phone gpu info is required !' : ''}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> MEMORY </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="cardSlot-label">Card slot</InputLabel>
                    <Select
                      labelId="cardSlot-label"
                      id="cardSlot"
                      value={state.cardSlot}
                      onChange={handleChange('cardSlot')}>
                      <MenuItem value="Yes"> Yes </MenuItem>
                      <MenuItem value="No">No </MenuItem>
                    </Select>
                    {/*<FormHelperText>Some important helper text</FormHelperText> */}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <TextField
                    id="internalMemory"
                    value={state.internalMemory}
                    onChange={handleChange('internalMemory')}
                    className="Margin15px width100"
                    type="text"
                    label="Internal"
                    onKeyUp={onKeyUp('internalMemory')}
                    onBlur={onKeyUp('internalMemory')}
                    error={state.internalMemoryError}
                    required
                    helperText={
                      state.internalMemoryError ? 'Phone Internal memory info is required !' : ''
                    }
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> MAIN CAMERA </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    className="Margin8px width100"
                    value={state.main_camera_triple}
                    onChange={handleChange('main_camera_triple')}
                    id="main_camera_triple"
                    type="text"
                    label="Triples"
                    onKeyUp={onKeyUp('main_camera_triple')}
                    onBlur={onKeyUp('main_camera_triple')}
                    error={state.main_camera_tripleError}
                    required
                    helperText={
                      state.main_camera_tripleError ? 'MAIN CAMERA info is required !' : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="main_camera_feature"
                    value={state.main_camera_feature}
                    onChange={handleChange('main_camera_feature')}
                    className="Margin8px width100"
                    type="text"
                    label="Features"
                    onKeyUp={onKeyUp('main_camera_feature')}
                    onBlur={onKeyUp('main_camera_feature')}
                    error={state.main_camera_featureError}
                    required
                    helperText={
                      state.main_camera_featureError
                        ? 'MAIN CAMERA Features info is required !'
                        : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="main_camera_video"
                    value={state.main_camera_video}
                    onChange={handleChange('main_camera_video')}
                    className="Margin8px width100"
                    type="text"
                    label="Video"
                    onKeyUp={onKeyUp('main_camera_video')}
                    onBlur={onKeyUp('main_camera_video')}
                    error={state.main_camera_videoError}
                    required
                    helperText={
                      state.main_camera_videoError ? 'MAIN CAMERA Video info is required !' : ''
                    }
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> SELFIE CAMERA </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    className="Margin8px width100"
                    value={state.selfi_camera_single}
                    onChange={handleChange('selfi_camera_single')}
                    id="selfi_camera_single"
                    type="text"
                    label="Single"
                    onKeyUp={onKeyUp('selfi_camera_single')}
                    onBlur={onKeyUp('selfi_camera_single')}
                    error={state.selfi_camera_singleError}
                    required
                    helperText={
                      state.selfi_camera_singleError ? 'SELFIE CAMERA  info is required !' : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="selfi_camera_feature"
                    value={state.selfi_camera_feature}
                    onChange={handleChange('selfi_camera_feature')}
                    className="Margin8px width100"
                    type="text"
                    label="Features"
                    onKeyUp={onKeyUp('selfi_camera_feature')}
                    onBlur={onKeyUp('selfi_camera_feature')}
                    error={state.selfi_camera_featureError}
                    required
                    helperText={
                      state.selfi_camera_featureError
                        ? 'SELFIE CAMERA Features info is required !'
                        : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="selfi_camera_video"
                    value={state.selfi_camera_video}
                    onChange={handleChange('selfi_camera_video')}
                    className="Margin8px width100"
                    type="text"
                    label="Video"
                    onKeyUp={onKeyUp('selfi_camera_video')}
                    onBlur={onKeyUp('selfi_camera_video')}
                    error={state.selfi_camera_videoError}
                    required
                    helperText={
                      state.selfi_camera_videoError ? 'SELFIE CAMERA video info is required !' : ''
                    }
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> SOUND </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="soundJack-label">3.5mm jack</InputLabel>
                    <Select
                      labelId="soundJack-label"
                      id="soundJack"
                      value={state.soundJack}
                      onChange={handleChange('soundJack')}>
                      <MenuItem value="Yes"> Yes </MenuItem>
                      <MenuItem value="No">No </MenuItem>
                    </Select>
                    {/*NetworkData <FormHelperText>Some important helper text</FormHelperText> */}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <TextField
                    id="loaudSpeaker"
                    value={state.loaudSpeaker}
                    onChange={handleChange('loaudSpeaker')}
                    className="Margin15px width100"
                    type="text"
                    label="Loudspeaker"
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> COMMS </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    className="Margin8px width100"
                    value={state.wlan}
                    onChange={handleChange('wlan')}
                    id="wlan"
                    type="text"
                    label="WLAN"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="bluetooth"
                    value={state.bluetooth}
                    onChange={handleChange('bluetooth')}
                    className="Margin8px width100"
                    type="text"
                    label="Bluetooth"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="gps"
                    value={state.gps}
                    onChange={handleChange('gps')}
                    className="Margin8px width100"
                    type="text"
                    label="GPS"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="nfc-label">NFC</InputLabel>
                    <Select
                      labelId="nfc-label"
                      id="nfc"
                      value={state.nfc}
                      onChange={handleChange('nfc')}>
                      <MenuItem value="Yes"> Yes </MenuItem>
                      <MenuItem value="No">No </MenuItem>
                    </Select>
                    {/*<FormHelperText>Some important helper text</FormHelperText> */}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="usb"
                    value={state.usb}
                    onChange={handleChange('usb')}
                    className="Margin15px width100"
                    type="text"
                    label="USB"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="radio-label">Radio</InputLabel>
                    <Select
                      labelId="radio-label"
                      id="radio"
                      value={state.radio}
                      onChange={handleChange('radio')}>
                      <MenuItem value="Yes"> Yes </MenuItem>
                      <MenuItem value="No">No </MenuItem>
                    </Select>
                    {/*<FormHelperText>Some important helper text</FormHelperText> */}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> FEATURES </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    id="sensors"
                    multiline
                    className="Margin8px width100"
                    type="text"
                    value={state.sensors}
                    onChange={handleChange('sensors')}
                    label="Sensors"
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> BATTERY </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextField
                    id="batteryType"
                    multiline
                    value={state.batteryType}
                    onChange={handleChange('batteryType')}
                    className="Margin8px width100"
                    type="text"
                    label="Type"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextField
                    id="batterCharging"
                    value={state.batterCharging}
                    onChange={handleChange('batterCharging')}
                    multiline
                    className="Margin8px width100"
                    type="text"
                    label="Charging"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextField
                    id="stand_by"
                    multiline
                    value={state.stand_by}
                    onChange={handleChange('stand_by')}
                    className="Margin8px width100"
                    type="text"
                    label="Stand-by"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <TextField
                    id="music_play"
                    value={state.music_play}
                    onChange={handleChange('music_play')}
                    multiline
                    className="Margin8px width100"
                    type="text"
                    label="Music play"
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <p className="inputHeading2"> MISC </p>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    className="Margin8px width100"
                    id="color"
                    type="text"
                    label="Colors"
                    value={state.color}
                    onChange={handleChange('color')}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="model"
                    value={state.model}
                    onChange={handleChange('model')}
                    className="Margin8px width100"
                    type="text"
                    label="Models"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="price"
                    value={state.price}
                    onChange={handleChange('price')}
                    className="Margin8px width100"
                    type="text"
                    label="Price"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <p className="inputHeading4"> SAR EU </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        id="head"
                        value={state.head}
                        onChange={handleChange('head')}
                        className="width100"
                        type="text"
                        label="Head"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <TextField
                        id="body"
                        value={state.body}
                        onChange={handleChange('body')}
                        className="width100"
                        type="text"
                        label="Body"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" spacing={0}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <p className="inputHeading2"> TESTS </p>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      className="Margin8px width100"
                      id="performance"
                      type="text"
                      label="Performance"
                      value={state.performance}
                      onChange={handleChange('performance')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      id="display"
                      value={state.display}
                      onChange={handleChange('display')}
                      className="Margin8px width100"
                      type="text"
                      label="Display"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      id="camera"
                      value={state.camera}
                      onChange={handleChange('camera')}
                      className="Margin8px width100"
                      type="text"
                      label="Camera"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      className="Margin8px width100"
                      id="loaud_speker"
                      type="text"
                      label="Loaudspeker"
                      value={state.loaud_speker}
                      onChange={handleChange('loaud_speker')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      id="audio_quelity"
                      value={state.audio_quelity}
                      onChange={handleChange('audio_quelity')}
                      className="Margin8px width100"
                      type="text"
                      label="Audio Quelity"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                      id="battery_life"
                      value={state.battery_life}
                      onChange={handleChange('battery_life')}
                      className="Margin8px width100"
                      type="text"
                      label="Battery Life"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={0}>
                {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Divider />
                        </Grid> */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloseIcon />}
                    onClick={() => FromClear()}>
                    Clear
                  </Button>
                  <Button
                    onClick={(e) => FromSubmit(e)}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon />}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={toast}
        autoHideDuration={3000}
        onClose={handleClosed}
        message={toastMessage}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="primary" onClick={handleClosed}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      {/* {Inliation()} */}
    </div>
  );
}
