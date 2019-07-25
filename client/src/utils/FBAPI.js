/* eslint-disable prettier/prettier */
import axios from "axios";

const FB = "https://developers.facebook.com/apps";


// const urlKey = URL + APIKEY;

export default {
  function() {
    FB.api(
      "/me",
      "GET",
      {"fields":"id,name,friends{name,first_name,last_name},picture,shared_login_upgrade_required_by"},
      response => {
        personalInfo: {
          // eslint-disable-next-line semi
          personalName: response.name
        }
        
      }
    );
  }
};
