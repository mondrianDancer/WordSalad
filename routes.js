const HOME   = "/";
const JOIN   = "/join";
const LOGIN  = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users

const USERS           = "/users";
const USER_DETAIL     = "/:id";
const EDIT_PROFILE    = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Words

const WORDS = "/words";
const UPLOAD = "/upload";
const EDIT_WORD = "/:id/edit";
const DELETE_WORD = "/:id/delete";

const routes = {
    home           : HOME,
    join           : JOIN,
    login          : LOGIN,
    logout         : LOGOUT,
    search         : SEARCH,
    users          : USERS,
    userDetail     : USER_DETAIL,
    editProfile    : EDIT_PROFILE,
    changePassward : CHANGE_PASSWORD,
    words          : WORDS,
    upload         : UPLOAD,
    editWord       : EDIT_WORD,
    deleteWord     : DELETE_WORD
};

export default routes;