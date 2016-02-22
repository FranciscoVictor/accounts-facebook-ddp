#accounts-facebook-ddp

#####Summary

Modification of Meteor's [accounts-facebook](https://github.com/meteor/meteor/tree/devel/packages/accounts-facebook) package so that mobile DDP clients can log in with OAuth.

This version is based on [jasper-lu](https://github.com/jasper-lu)'s work but with slight modifications to allow the request of the logged user's information

#####Instructions

In case you are already using meteor's accounts-facebook, first remove it using:

    meteor remove accounts-facebook

Then add this package by using:

    meteor add franciscovictor:accounts-facebook-ddp

#####Observations

This package work in pair with [facebook-ddp](https://github.com/FranciscoVictor/facebook-ddp), but you only need to add one, as shown above.
