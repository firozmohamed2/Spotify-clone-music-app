export const authEndPoint="https://accounts.spotify.com/authorize";
//clicking on lofin button redirects here

const redirectUri="http://localhost:3000/"
const clientId="423cd656ff7d45fc98996a8e82da9d37"

const scopes =
["user-read-playback-state",
 "user-modify-playback-state",
 "user-follow-read",
 "user-read-currently-playing",
 "user-read-recently-played",
 "user-modify-playback-state",
 "user-read-playback-state",
 "user-top-read"
];
//this is important premissions 



//to get token from search bar 
export const getTokenFromUrl = ()=> {
   return window.location.hash.substring(1).split("&")
   .reduce((initial,item)=>{
       let parts=item.split('=');
       initial[parts[0]]=decodeURIComponent(parts[1]);
       return initial;

   },{});
   

   }



export const loginUrl=`${authEndPoint}?client_id=${clientId}
&redirect_uri=${redirectUri}& scope=${scopes.join("%20")}&response_type=token&show_dialog=true` 
//%20 is the ascii code for space 
//this token is a string that gives info about authentication status



