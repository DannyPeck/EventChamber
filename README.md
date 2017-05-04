# EventChamber

If a module is to truely support the idea that it should be loadable as a self contained unit, then it needs to be able to reference all its own scripts, php files and any other kinds of things that it might need to support it.

In order to accomplish this, the current idea is to use some of the build in function of PHP in order to allow for a "reference" to the position of all needed files to be ascertained at include time.  

I plan to use the JSON structure to build a standard for communication between the server side and the client side in order to package information about the relative (or hard linked) position of the files that the newly dynamically generated html and related javascript / jquery / other stuff will need to do their normal behavior.

