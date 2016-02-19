Package.describe({
  name: 'franciscovictor:accounts-facebook-ddp',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Login service for Facebook accounts with modified OAuth authentication for mobile apps using DDP.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/FranciscoVictor/accounts-facebook-ddp',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.1');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('franciscovictor:facebook-ddp@0.0.3', ['client', 'server']);

  api.addFiles('facebook_login_button.css', 'client');

  api.addFiles("facebook.js");
});
