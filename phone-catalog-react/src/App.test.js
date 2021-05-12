import React from 'react';
import Enzyme, { shallow,mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
 import AddEditPhone from "./components/AllPhone/addEditPhone";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

 /**
 * test cases for unit test on add edit phone screen 
 *  @author Synsoft Global 
 */

describe('Test cases for unit testing of Add phone catalog screen',() =>{
   let wrapper;
   wrapper = shallowWithBrowserRouter(<AddEditPhone/>);
    // check uploadImage field exits
    it('check upload Image text fields exits',()=> {
        expect(wrapper.find('input[id="uploadImage"]').length).toEqual(1);
    });

    // check name field exits
    it('check name text fields exits',()=> {
        expect(wrapper.find('input[id="name"]').length).toEqual(1);
    });

    // check first name  min and max length
    it('check name text field  min and max length',()=> {
        expect(wrapper.find('input[id="name"]').prop('minLength')).toEqual(1);
        expect(wrapper.find('input[id="name"]').prop('maxLength')).toEqual(50);
    });

   //  check network input field exits
     it('check network  fields exits',()=> {
        expect(wrapper.find('div[id="network-helper"]').length).toEqual(1);
     });

      // check Announced Date field exits
     it('check Announced Date  fields exits',()=> {
        expect(wrapper.find('input[id="announcedDate"]').length).toEqual(1);
     });

       // check status field exits
     it('check status  fields exits',()=> {
        expect(wrapper.find('div[id="status"]').length).toEqual(1);
     });

       // check Release Date field exits
     it('check Release Date  fields exits',()=> {
        expect(wrapper.find('input[id="releaseDate"]').length).toEqual(1);
     });

   // check diamention field exits
    it('check diamention fields exits',()=> {
        expect(wrapper.find('input[id="diamention1"]').length).toEqual(1);
    });

     // check weight field exits
     it('check weight  fields exits',()=> {
        expect(wrapper.find('input[id="weight"]').length).toEqual(1);
     });

      // check build field exits
     it('check build  fields exits',()=> {
        expect(wrapper.find('input[id="build"]').length).toEqual(1);
     });

     // check sim field exits
     it('check sim  fields exits',()=> {
        expect(wrapper.find('input[id="sim"]').length).toEqual(1);
     });
     
      // check display type field exits
     it('check display type  fields exits',()=> {
        expect(wrapper.find('input[id="dType"]').length).toEqual(1);
     });

     // check display Size field exits
     it('check display Size  fields exits',()=> {
        expect(wrapper.find('input[id="dSize"]').length).toEqual(1);
     });

     // check display Resolution field exits
     it('check display Resolution  fields exits',()=> {
        expect(wrapper.find('input[id="dResolution"]').length).toEqual(1);
     });

      // check display Protection field exits
     it('check display Protection  fields exits',()=> {
        expect(wrapper.find('input[id="dProtection"]').length).toEqual(1);
     });

     // check os related fields exits
     it('check os input  fields',()=> {
        expect(wrapper.find('input[id="os"]').length).toEqual(1);
     });

      it('check chipSet input  fields',()=> {
        expect(wrapper.find('input[id="chipSet"]').length).toEqual(1);
     });

     it('check cpu input  fields',()=> {
        expect(wrapper.find('input[id="cpu"]').length).toEqual(1);
     });

     it('check gpu input  fields',()=> {
        expect(wrapper.find('input[id="gpu"]').length).toEqual(1);
     });


     // check memory related fields exits
     it('check cardSlot input  fields',()=> {
        expect(wrapper.find('div[id="cardSlot"]').length).toEqual(1);
     });

      it('check internalMemory input  fields',()=> {
        expect(wrapper.find('input[id="internalMemory"]').length).toEqual(1);
     });
     
     // check Main camera related fields exits
     it('check main_camera_triple input  fields',()=> {
        expect(wrapper.find('input[id="main_camera_triple"]').length).toEqual(1);
     });

      it('check main_camera_feature input  fields',()=> {
        expect(wrapper.find('input[id="main_camera_feature"]').length).toEqual(1);
     });

     it('check main_camera_video input  fields',()=> {
        expect(wrapper.find('input[id="main_camera_video"]').length).toEqual(1);
     });

     // check selfi camera related fields exits
     it('check selfi_camera_single input  fields',()=> {
        expect(wrapper.find('input[id="selfi_camera_single"]').length).toEqual(1);
     });

      it('check selfi_camera_feature input  fields',()=> {
        expect(wrapper.find('input[id="selfi_camera_feature"]').length).toEqual(1);
     });

     it('check selfi_camera_video input  fields',()=> {
        expect(wrapper.find('input[id="selfi_camera_video"]').length).toEqual(1);
     });

     // check memory related fields exits
     it('check soundJack input  fields',()=> {
        expect(wrapper.find('div[id="soundJack"]').length).toEqual(1);
     });

      it('check loaudSpeaker input  fields',()=> {
        expect(wrapper.find('input[id="loaudSpeaker"]').length).toEqual(1);
     });
     // check comms related fields exits
     it('check wireless lan input  fields',()=> {
        expect(wrapper.find('input[id="wlan"]').length).toEqual(1);
     });

      it('check bluetooth input  fields',()=> {
        expect(wrapper.find('input[id="bluetooth"]').length).toEqual(1);
     });

     it('check gps input  fields',()=> {
        expect(wrapper.find('input[id="gps"]').length).toEqual(1);
     });

     it('check nfc input  fields',()=> {
        expect(wrapper.find('div[id="nfc"]').length).toEqual(1);
     });
     
     it('check usb input  fields',()=> {
        expect(wrapper.find('input[id="usb"]').length).toEqual(1);
     });
     it('check radio input  fields',()=> {
        expect(wrapper.find('div[id="radio"]').length).toEqual(1);
     });
      // check FEATURES related fields exits
     it('check sensors input  fields',()=> {
        expect(wrapper.find('textarea[id="sensors"]').length).toEqual(1);
     });
     
     // check battery related fields exits
     it('check battery Type input  fields',()=> {
        expect(wrapper.find('textarea[id="batteryType"]').length).toEqual(1);
     });

      it('check Charging input  fields',()=> {
        expect(wrapper.find('textarea[id="batterCharging"]').length).toEqual(1);
     });

     it('check stand by input  fields',()=> {
        expect(wrapper.find('textarea[id="stand_by"]').length).toEqual(1);
     });

     it('check music play input  fields',()=> {
        expect(wrapper.find('textarea[id="music_play"]').length).toEqual(1);
     });
      // check MISC related fields exits
     it('check color  input  fields',()=> {
        expect(wrapper.find('input[id="color"]').length).toEqual(1);
     });

      it('check model input  fields',()=> {
        expect(wrapper.find('input[id="model"]').length).toEqual(1);
     });

     it('check price input  fields',()=> {
        expect(wrapper.find('input[id="price"]').length).toEqual(1);
     });

     it('check SAR EU Head input  fields',()=> {
        expect(wrapper.find('input[id="head"]').length).toEqual(1);
     });
     
     it('check SAR EU body input  fields',()=> {
        expect(wrapper.find('input[id="body"]').length).toEqual(1);
     });
    
      // check test related fields exits
     it('check performance  input  fields',()=> {
        expect(wrapper.find('input[id="performance"]').length).toEqual(1);
     });

      it('check display input  fields',()=> {
        expect(wrapper.find('input[id="display"]').length).toEqual(1);
     });

     it('check camera input  fields',()=> {
        expect(wrapper.find('input[id="camera"]').length).toEqual(1);
     });

     it('check audio quelity input  fields',()=> {
        expect(wrapper.find('input[id="audio_quelity"]').length).toEqual(1);
     });
     
     it('check battery life input  fields',()=> {
        expect(wrapper.find('input[id="battery_life"]').length).toEqual(1);
     });
    
    it('check variable and button',()=> {
      //  const fn = jest.fn();
      // const wrapper = mount( <BrowserRouter> <RegisteredComponent onClick={fn} /> </BrowserRouter>);
      // wrapper.find('button[name="submit"]').invoke('click').then(() => {});
      //  expect(wrapper.instance().onSubmit).toHaveBeenCalled()
      // expect(fn).toHaveBeenCalled();
    });
  
}) 


  function shallowWithBrowserRouter(component) {
    return mount( <BrowserRouter> {component} </BrowserRouter>);
  }
  