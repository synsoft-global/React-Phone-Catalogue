import React, {useEffect } from "react";
import '../../App.css';
import './allPhone.css'
import Moment from 'react-moment';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  IconButton,Table,TableHead,TableBody, TableRow,
  TableCell,TableContainer,TablePagination,Button,
  Grid,Typography,Paper,
} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";
import { getApiCall,DeleteApiCall,jsonParser } from "../../comman/services";
import { BASE_URL } from "../../app-config";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // maxHeight: 485,
    },
    tableButton:{
       height: 20,
       width: 20,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: 24
    },
    ButtonMargin: {
      margin: 2
    }
  }),
);
const Order:any = '';

export default function AllPhone() {
    const [rows, setRow] = React.useState<any>([]);
    const [order, setOrder] = React.useState<any>();
    const [orderBy, setOrderBy] = React.useState<any>();
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);
    const [toast, setOpened] = React.useState(false);
    const [usercount, setCount] = React.useState<any>(0);
    const [page, setPage] = React.useState(0);
    const [config, setValues] = React.useState({
      itemsPerPage: 0,
      currentPage: 0,
      totalItems: 0,
      id: '',
      rowsPerPage: 5,
      deletePhone: false,
      phoneId: '',
      toastMessage: '',
      searchValue: '',
      checkOrder: '',
    });
    const handleClose = () => {
      setAnchorEl(null);
    };

    /*
     * this function is used for close logout dailog
     */
    const Cancel = () => {
      setOpen(false);
      config.deletePhone = false;
    };

     /*
     * this function is used for delete user from server also logout user 
     */
    const DeletePhoneDetail = () =>{
      if(config.deletePhone){
        const  methodName = "phones/delete";
        var parameters = 'id='+config.phoneId;
        DeleteApiCall(methodName, parameters)
        .then((response) => {
           config.toastMessage = response.message;
           setOpen(false);
           config.deletePhone = false;
           setOpened(true);
           GetUserData();
        }).catch((error: any) => {
          config.toastMessage = error.message;
          setOpened(true);
           config.deletePhone = false;
           setOpen(false);
           GetUserData();
        }); 

      }
    }

    /*
    * this function is used for handle pageination 
    */
    const handleChangePage = (event: unknown, newPage: number) => {
      config.itemsPerPage = newPage + 1;
      setPage(newPage);
      GetUserData();
    };

    /*
    * this function is used for handle pageination row length 
    */
    const handleChangeRowsPerPage = (event) => {
      config.rowsPerPage = event.target.value;
       setPage(0);
       GetUserData();
    };

        useEffect(() => {
          inilizeData();
         // GetUserData();
        },[]);

   const inilizeData = () =>{
    // setValues({ ...config, ['itemsPerPage']: itemsPerPage });
          config.itemsPerPage = 1;
          config.currentPage = 1;
          config.totalItems = 0;
          config.id = "server";
          setOrder(Order);
          GetUserData();
    }

  /*
  * this function is used for get user data from server  data.sortBy && data.sortAs
  */
  const GetUserData = ()=>{
    let orderby = orderBy ? orderBy : ''; 
    const  methodName = "phones/getListPhone";
    var parameters = 'page='+config.itemsPerPage + '&pageSize='+config.rowsPerPage+'&search='+config.searchValue + '&sortBy='+ orderby + '&sortAs='+config.checkOrder;
   
    getApiCall(methodName, parameters)
    .then((response: any) => { 
      
      setRow(response.userData);
      setCount(response.count);

    }).catch((error: any) => {
       console.log("get user data error here ",error);
    });     
  } 
  /*
  * this function is used for delete functionality 
  */
  const DeletePhone = (phoneId)=>{
   console.log("delete user functionality start here ",phoneId);
    config.phoneId = phoneId;
    config.deletePhone = true;
    setOpen(true);
    setAnchorEl(null);
  }

  const phoneDetail = (id) =>{
     let temp = '/phone-detail?phoneId='+id
     history.push(temp);
  }

  const editPhone = (id) =>{
     let temp = '/addPhone?phoneId='+id
     history.push(temp);
  }

  /*
  * this function is used for show edit and delete button phone-detail
  */
  const rander = (phoneId)=>{
    // console.log("user info data is here ",phoneId);
    return (
      <Typography>
          <Button variant="outlined" className={classes.ButtonMargin} color="primary"onClick={() => DeletePhone(phoneId)}>
          <DeleteIcon/>
        </Button>
        <Button variant="outlined" className={classes.ButtonMargin} color="primary" onClick={() =>editPhone(phoneId)} aria-label="edit"><EditIcon />
        </Button>
          <Button className={classes.ButtonMargin} onClick={() =>phoneDetail(phoneId)} variant="outlined" color="primary">
           <VisibilityIcon/>
        </Button>
     </Typography>
    );
  }

     const handleClosed = () => {
      setOpened(false);
    };
   
   const AddPhone = () =>{
      history.push('/addPhone');
   }
    return (
       <div> 
          <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={6} sm={10} md={10} lg={10}>
                 <p className="textHeader">Phone Catalog list </p>
              </Grid>
              <Grid item xs={6} sm={2} md={2} lg={2} >
                 <p className="textHeader"><Button variant="outlined" onClick={() => AddPhone()}>ADD NEW</Button> </p> 
                 
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                 <Paper className={classes.paper}>
                   <TableContainer className={classes.container}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                        <TableRow>
                          <TableCell>S.No</TableCell>
                          <TableCell >Image </TableCell>
                          <TableCell >Name</TableCell>
                          <TableCell >Other Detail </TableCell>
                          <TableCell>Realese On</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((value,index) => (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                             {index+1}
                            </TableCell>
                            <TableCell >
                              <img className="imageWidth" src={BASE_URL + '/uploads/'+ jsonParser(value.imageFileName).image}alt={value.name} />
                            </TableCell>
                            <TableCell>
                             <p className="textP"> {value.name} </p>
                             <p className="textP">{jsonParser(value.platefrom).os} </p>
                             <p className="textP"> {jsonParser(value.platefrom).chipset} </p>
                             <p className="textP">{jsonParser(value.platefrom).cpu} </p>
                            </TableCell>
                            <TableCell>
                              <p className="textP"> <span className="sub-title">  Ram : </span> {jsonParser(value.memory).internal} </p>
                              <p className="textP"> <span className="sub-title">Main camera: </span> {jsonParser(value.mainCamera).quad} </p>
                              <p className="textP"> <span className="sub-title">Front camera: </span> {jsonParser(value.selfieCamera).dual} </p>
                              <p className="textP" > <span className="sub-title">Batery Life : </span> {jsonParser(value.tests).batteryLife} </p>
                            </TableCell>
                            <TableCell><Moment>{jsonParser(value.lanch).announced}</Moment> </TableCell>
                            <TableCell>{rander(value.id)}</TableCell>
                          </TableRow> 
                          ))}
                      </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5,10, 25, 100]}
                      component="div"
                      count={usercount}
                      rowsPerPage={config.rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />  
                 </Paper>
              </Grid>
          </Grid>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">Delete Confirmation</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to delete this phone detail.?
                </DialogContentText>
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
                horizontal: 'center',
                }}
                open={toast}
                autoHideDuration={2000}
                onClose={handleClosed}
                message={config.toastMessage}
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="primary" onClick={handleClosed}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </div>
    )

}
