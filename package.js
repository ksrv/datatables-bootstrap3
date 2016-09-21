Package.describe({
  name:     'ksrv:datatables-bootstrap3',
  version:  '0.0.1',
  summary:  'Some files for jQuery plugin dataTables.',
  git:      'https://github.com/ksrv/datatables-bootstrap3',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ksrv:datatables@0.0.1');

  api.addFiles('dataTables.bootstrap3.min.css', ['client']);
  api.addFiles('dataTables.bootstrap.min.js', ['client']);
});
