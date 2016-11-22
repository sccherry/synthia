export function configure( aurelia ) {
  aurelia.use
    //.developmentLogging()
    .standardConfiguration()
    .feature('resources/tone')
    .feature('resources/ui');

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}

if ( navigator.hasOwnProperty('serviceWorker') ) {
  navigator.serviceWorker.register( '/service-worker.js', {
    scope: '/'
  }).then(response => {
    console.log( response );
  }).catch(error => {
    console.log( error );
  });
}
