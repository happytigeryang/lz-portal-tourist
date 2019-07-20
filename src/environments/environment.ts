/* tslint:disable */
import { Environment } from './model';


export const environment: Environment = {
  production: false,
  // // biz restapi
  // mpsApi: 'http://172.16.168.32:8009/Sandbox/V18.2.121.0',
  // // micro service api
  // microApi: 'http://10.1.24.68:8181/api/v18.2.105.1/v1',
  // biz restapi
  mpsApi: 'http://172.16.168.103:8081/bizapi/{PROJECT_VERSION}',
  // micro service api
  microApi: 'http://172.16.168.103:8081/api/{PROJECT_VERSION}',
  // google ga trace id
  googleTrackingId: 'UA-57263336-3',
  // google firebase options
  firebaseOptions: {
    apiKey: 'AIzaSyDOW7z2N5_3njkt6KGxooEAVaP7cfxDtp4',
    authDomain: 'seller-portal-firebase.firebaseapp.com',
    databaseURL: 'https://seller-portal-firebase.firebaseio.com',
    projectId: 'seller-portal-firebase',
    storageBucket: 'seller-portal-firebase.appspot.com',
    messagingSenderId: '224912713219',
    publicVapidKey: 'BKpDdpBuo7ZX1RdQnbwnhaLAUbuKo0fdglMOHW7SpgNHJ1MnFcV-UrrJPhLoayFqyBjY3cRYShVNf-zuh71dM20'
  },
  ssoConfig: {
    authority: 'http://172.16.168.84:3000/local-sso',
    client_id: 'SellerPortalLocal',
    redirect_uri: 'http://localhost:4200/assets/signin-callback.html',
    response_type: 'code',
    scope: 'openid profile seller_portal',
    automaticSilentRenew: true,
    accessTokenExpiringNotificationTime: 5,
    silent_redirect_uri: "http://localhost:4200/assets/silent-renew.html",  
    post_logout_redirect_uri: 'http://localhost:4200/index.html'
  }  
};