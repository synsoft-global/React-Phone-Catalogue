/**
* Objective: "verify request data is not null and undifined"
 */
function isrequired(req, res, next) {
    let control = req.body;
    if (!control || control != null && control != undefined) {
        next()
    } else {
        res.send(401, "required");
    }
}

/**
* Objective: "verify first name & Should Not be Blank (if Mandatory)";
* accept Alphabets only
* @param {object} req - request object
* fildname - first_name
 */
function isfirstname(req, res, next) {
    let control = req.body;
    if (control.first_name && control.first_name.length > 0) {
        (control.first_name.match(/^([a-zA-Z]){0,50}$/)) ? next() : res.send(401, "first_name not valid");
    } else {
        res.send(401, "firstname required");
    }
}
/**
* Objective: "verify Last name & Should Not be Blank (if Mandatory)";
* accept Alphabets only
* @param {object} req - request object
* fildname - last_name
 */
function islastname(req, res, next) {
    let control = req.body;
    if (control.last_name && control.last_name.length > 0) {
        (control.last_name.match(/^([a-zA-Z]){0,50}$/)) ? next() : res.send(401, "last_name not valid");
    } else {
        res.send(401, "lastname required");
    }
}
/**
* Objective: "verify full name & Should Not be Blank (if Mandatory)";
* accept Alphabets & one space only
* @param {object} req - request object
* fildname - full_name
 */
function isfullName(req, res, next) {
    let control = req.body;
    if (control.full_name && control.full_name.length > 0) {
        (control.full_name.match(/^[A-Z][a-z]+\s[A-Z][a-z]{0,50}$/)) ? next() : res.send(401, "full_name not valid");
    } else {
        res.send(401, "full_name required");
    }
}
/**
* Objective: "verify Username & Should Not be Blank (if Mandatory)";
* accept alpha numeric, underscore, dot
* @param {object} req - request object
* fildname - username
 */
function isusername(req, res, next) {
    let control = req.body;
    if (control.username && control.username.length > 0) {
        (control.username.match(/^([a-zA-Z0-9_.-]){6,50}$/)) ? next() : res.send(401, "username not valid");
    } else {
        res.send(401, "Username required");
    }
}

/**
* Objective: "verify password & Should Not be Blank (if Mandatory)";
* alphanumeric and all special characters no spaces.
* Should have 1 Capital letter, 1 number and 1 Special character.
* Password must have minimum 8 characters.
* @param {object} req - request object
* fildname - password
 */
function ispassword(req, res, next) {
    let control = req.body;
    if (control.password && control.password.length > 0) {
        (control.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})/)) ? next() : res.send(401, "Password must have minimum 8 characters, with at least 1 upper case letter,1 lower case letter, 1 numeric and 1 special character.");
    } else {
        res.send(401, "Password is requred.");
    }
}

/**
* Objective: "verify email & Should Not be Blank (if Mandatory)";
* alphanumeric underscore,hifen,dot,@ no spaces
* @param {object} req - request object
* fildname - email
 */
function isemail(req, res, next) {
    let control = req.body;
    console.log("email call ",control, control.email )
    if (control.email && control.email.length > 0) {
        (control.email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/)) ? next() : res.send(401, "invalid email");
    } else {
        res.send(401, "email is required.");
    }
}
/**
* Objective: "verify mobile number & Should Not be Blank (if Mandatory)";
* numeric, no spaces , start with 789
* @param {object} req - request object
* fildname - mobile_number
 */
function ismobile(req, res, next) {
    let control = req.body;
    if (control.mobile_number.length > 0) {
        (control.mobile_number.match(/^[0-9]{10,17}$/)) ? next() : res.send(401, "invalid mobile number");
    } else {
        res.send(401, "mobile number is required.");
    }
}

/**
* Objective: "verify Country Code & Should Not be Blank (if Mandatory)";
* +, numeric (1,4)
* @param {object} req - request object
* fildname - Country_Code
 */
function CountryCode(req, res, next) {
    console.log("phone validator ")
    let control = req.body;
    if (control.Country_Code && control.Country_Code.length > 0) {
        (control.Country_Code.match(/^(\+?\d{1,3}|\d{1,4})$/)) ? next() : res.send(401, "invalid Country Code");
    } else {
        res.send(401, "Country Code is requred.");
    }
}
/**
* Objective: "verify amount & Should Not be Blank (if Mandatory)";
* numeric , decimal
* @param {object} req - request object
* fildname - amount
 */
function isamount(req, res, next) {
    let control = req.body;
    if (control.amount) {
        control.amount.match(/^(\d+(\.\d{1,2})?|\.?\d{1,2})$/) ? next() : res.send(401, "Should not accept Space, alphabets, other special character and Negative Values ");
    } else {
        res.send(401, "Amount is requred");
    }
}
/**
* Objective: "verify pincode & Should Not be Blank (if Mandatory)";
* numeric
* @param {object} req - request object
* fildname - pincode
 */
function ispincode(req, res, next) {
    let control = req.body;
    if (control.pincode && control.pincode != 0) {
        control.pincode.match(/^[1-9][0-9]{5}$/) ? next() : res.send(401, "Should accept only 6 digit number");
        // USA - /^[1-9][a-zA-Z0-9]{4}$/
        // Canada - /^[a-zA-Z1-9][a-zA-Z0-9]{5}$/
    } else {
        res.send(401, "pin code is requred");
    }
}
/**
* Objective: "verify card number & Should Not be Blank (if Mandatory)";
* numeric
* @param {object} req - request object
* fildname - card_number
 */
function iscreadidCard(req, res, next) {
    let control = req.body;
    if (control.card_number && control.card_number != 0) {
        control.card_number.match(/^[0-9]{13,19}$/) ? next() : res.send(401, "Should accept only 13 to 19 digit card number.");
        //discover starts with 6 - /^6[0-9]{12,18}$/
        //Visa starts with 4 - /^4[0-9]{12,18}$/
        //Master starts with 5 - /^5[0-9]{12,18}$/
    } else {
        res.send(401, "Card number is requred");
    }
}
/**
* Objective: "verify single line address & Should Not be Blank (if Mandatory)";
* @param {object} req - request object
* fildname - address
 */
function isSingleLineAddress(req, res, next) {
    let control = req.body;
    if (control.address && control.address.length > 0 && control.address.length <= 100) {
        next();
    } else {
        res.send(401, "address is requred and accept only 100 character");
    }
}
/**
* Objective: "verify multiline address & Should Not be Blank (if Mandatory)";
* @param {object} req - request object
* fildname - Multi_line_address
 */
function MultilineAddress(req, res, next) {
    let control = req.body;
    if (control.Multi_line_address && control.Multi_line_address.length > 0 && control.Multi_line_address.length <= 250) {
        next();
    } else {
        res.send(401, " Multiline address is requred and accept only 250 character");
    }
}
/**
* Objective: "verify comments & Should Not be Blank (if Mandatory)";
* @param {object} req - request object
* fildname - comments
 */
function isComments(req, res, next) {
    let control = req.body;
    if (control.comments && control.comments.length > 0 && control.comments.length <= 250) {
        next();
    } else {
        res.send(401, "Comment is requred and accept only 250 character");
    }
}
/**
* Objective: "verify date & Should Not be Blank (if Mandatory)";
* @param {object} req - request object
* 12/23/2020
* fildname - date
 */
function isDate(req, res, next) {
    let control = req.body;
    if (control.date) {
        let date = Date.parse(control.date);
        date ? (control.date.match(/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/) ? next() : res.send(401, "Invalid formet of date ")) : res.send(401, "Invalid Date ");
    } else {
        res.send(401, "Date is requred");
    }
}
/**
* Objective: "verify cvv & Should Not be Blank (if Mandatory)";
* numeric
* @param {object} req - request object
* fildname - cvv
 */
function isCVV(req, res, next) {
    console.log("phone validator ")
    let control = req.body;
    if (control.cvv && control.cvv.length > 0) {
        (control.cvv.match(/^(\d{3,4})$/)) ? next() : res.send(401, "invalid cvv  number");
    } else {
        res.send(401, "CVV is requred.");
    }
}
/**
 * Export functions
 */
module.exports = {
    isrequired: isrequired,
    isfirstname: isfirstname,
    islastname: islastname,
    isfullName: isfullName,
    isusername: isusername,
    isemail: isemail,
    ismobile: ismobile,
    ispassword: ispassword,
    isamount: isamount,
    isSingleLineAddress: isSingleLineAddress,
    MultilineAddress: MultilineAddress,
    isComments: isComments,
    ispincode: ispincode,
    iscreadidCard: iscreadidCard,
    CountryCode: CountryCode,
    isDate: isDate,
    isCVV: isCVV
};
