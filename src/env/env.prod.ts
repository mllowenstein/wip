export const env: any = {
  production: true,
  tag: 'prod',
  firebase: {
    apiKey: "AIzaSyBO3usafUaemmViD7ayy6n3pg5AK86zq0s", // replace with your own config.
    authDomain: "wipp-73383.firebaseapp.com",
    databaseURL: "https://wipdata.firebaseio.com",
    projectId: "wipp-73383",
    storageBucket: "wipp-73383.firebasestorage.app",
    messagingSenderId: "1092093745697",
    appId: "1:1092093745697:web:90eef2b2d35ee70b41a160",
    measurementId: "G-EPB2VXNNJ8",
    databaseSecret: "zUfQO65fj1uxAhh24tDqQifJpNq1V3VOnSUPpkTw" // replace with your own config.
  },
  perigon: {
    apiKey: '41fe7898-8ec4-4480-9a62-c8347503c98a', // replace with your own config.
    baseApiUrl: 'https://api.goperigon.com/v1/all',
    baseContentUrl: 'https://api.goperigon.com/v1/all?apiKey=41fe7898-8ec4-4480-9a62-c8347503c98a&q=Real%20Estate%20Legal%20in%20Canada'
  },
  siteContent: {
    apiUrl: 'https://localhost:6000/api/',
  },
  api: {
    base: 'https://localhost:3333/api',
  },
  crypto: {
    watchlist: [
      'crypto0xbtc',
      'cryptoAda',
      'cryptoBat',
      'cryptoBch',
      'cryptoBtc',
      'cryptoDoge',
      'cryptoEnj',
      'cryptoEos',
      'cryptoEtc',
      'cryptoEth',
      'cryptoFil',
      'cryptoIcp',
      'cryptoIcx',
      'cryptoKsm',
      'cryptoLtc',
      'cryptoLun',
      'cryptoMkr',
      'cryptoMatic',
      'cryptoMnx',
      'cryptoNeo',
      'cryptoRvn',
    ]
  }
};
