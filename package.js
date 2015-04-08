Package.describe({
  name: 'grigio:react-overlay',
  summary: 'React Meteor overlay componet',
  version: '0.0.1',
  git: 'https://github.com/grigio/meteor-react-overlay.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  // magic deps
  api.use('grigio:babel@0.1.1');
  api.use('grove:react@0.1.1');


  api.addFiles(
            [
                'overlay/overlay.css',
                'overlay/overlay.jsx'
            ],
            ['client']);

  api.export(['Overlay'], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['grigio:react-overlay']);
  // api.addFiles('grigio:overlay-tests.js');
});