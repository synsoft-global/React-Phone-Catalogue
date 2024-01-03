/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * Defining regex function that validate email id onkeyup
 * @author Virendra Yadav
 */
export const validateEmail = (value: string) => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
/**
 * Defining  function that check password length onkeyup
 * @author Virendra Yadav
 */
export const validatePassword = (value: string) => value.length >= 8 && value.length <= 32;

/**
 * Defining  regex function that  password msut be alphanumaric  onkeyup
 * @author Virendra Yadav
 */
export const validateresetPassword = (value: string) => {
  // return
  if (value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})/)) {
    return true;
    // alert("Password is correct");
  }
  return false;

  // value.match(/^[ A-Za-z0-9_@./#&+-]*$/i);
};
/**
 * Defining  regex function that accept only letters
 * @author Virendra Yadav
 */
export const validateName = (value: string) => value.match(/^[a-zA-Z ]*$/);

/**
 * Defining  regex function that accept only numbers
 * @author Virendra Yadav
 */

export const validatePhonenumber = (inputtxt: string) => {
  const phoneno = '^[0-9]*$';
  // console.log("input box is here complete your kyc",inputtxt.match(phoneno))
  if (inputtxt.match(phoneno)) {
    return true;
  }
  return false;
};

/**
 * Defining  regex function that accept all type of charectors
 * @author Virendra Yadav
 */

export const validateAddres = (value: string) => value.match(/^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 .'"-_)(@&$]*)?$/i)
// return value.match(/^(?!\d+$)\w+\S+$/i);
;

/**
 * Defining  regex function that alphabets and numbers
 * @author Virendra Yadav
 */
export const validateAphabetsNumbers = (inputtxt: string) => {
  const phoneno = '^[A-Za-z0-9]*$';
  // console.log("input box is here complete your kyc",inputtxt.match(phoneno))
  if (inputtxt.match(phoneno)) {
    return true;
  }
  return false;
};

/**
 * Defining  regex function that accept alphanumaric and underscore and dots
 * @author Virendra Yadav
 */

export const validateUsername = (inputtxt: string) => {
  // const phoneno = '/^([a-zA-Z0-9_.-]){6,50}$/';
  //  inputtxt.match(phoneno)
  if (inputtxt.match(/^([a-zA-Z0-9_.-]){6,50}$/)) {
    return true;
  }
  return false;
};
