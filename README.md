MASHERY-BEATS MUSIC API DEMO APP
==================================================================
Created lovingly for the developer community by Mashery.
http://www.mashery.com
http://developer.mashery.com

Intel(R) XDK
-------------------------------------------
This sample is part of the Intel(R) XDK. 
Please sign up at http://software.intel.com/en-us/html5.
To see the technical detail of the sample, please visit the sample article page 
at _TBA. 

Application Files
-----------------
* app.json
* icon.png
* index.html
* readme.md
* screenshot.png
* css/*
* js/*
* app_framework/*

Copyright (c) 2012-2013, Intel Corporation. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, 
are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, 
  this list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright notice, 
  this list of conditions and the following disclaimer in the documentation 
  and/or other materials provided with the distribution.

- Neither the name of Intel Corporation nor the names of its contributors 
  may be used to endorse or promote products derived from this software 
  without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, 
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE 
GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) 
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT 
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT 
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

App Framework (formerly jQ.Mobi)
-----------------------------------------------------------------------------
* source:  https://github.com/01org/appframework
* license: https://github.com/01org/appframework/blob/master/license.txt

SYNOPSIS
==================================================================
This demo App provides a way to see the Beats Music API in action. 
It is built using Intel's Cross Platform Development Kit (XDK) 
that lets you create mobile apps for smartphones and tablets using
standard web languages (HTML5, CSS, and JavaScript).


WHAT DOES THIS APP DO?
==================================================================
Uses Beats Music's API to find data on any artist, any album, any song from the Beats Music catalog.

GETTING STARTED
==================================================================
You will need the following to get started -

1. Intel's XDK. Free Download - http://xdk-software.intel.com/
2. A Beats Music API key (Register at https://developer.beatsmusic.com/member/register).


OBTAINING THE API KEY
==================================================================
Before you can begin using this app, you will need to get an API key 
from Beats Music at https://developer.beatsmusic.com/member/register. This will also 
give you a Single Sign-On Mashery ID with access to hundreds of other APIs.


SETTING UP THE API KEY IN THIS APP
==================================================================
Once you have obtained your API key, assign the API key to the 
variable api_key on line 1 of the file api.js, like so -

<pre>
	var api_key ='your_api_key_here';
</pre>


ABOUT THE Beats Music API
==================================================================
Beats Music's APIs allows developer to access Beats Music catalog of artists, tracks, and playlists. The APIs available are:

1. Search the Beats Music Catalog
2. Play a Track
3. Create, Update, and Display a Playlist

In this demo app we utilize the Beats Music API. In the source code
you can observe how easy it is to make an API call, parse the 
API response and return the information back to the end-user. 

Get detailed information about the Beats Music APIs at 
https://developer.beatsmusic.com/docs


Beats Music INTERACTIVE API DOCUMENTATION
==================================================================
To learn more about the data set provided by Beats Music's APIs, visit
their interactive documentation at https://developer.beatsmusic.com/io-docs


ABOUT THE MASHERY API NETWORK
==================================================================
The Mashery API Network (http://developer.mashery.com) is an open
data commons of over 50 RESTful APIs that developers can access 
with their Mashery ID.  

Mashery is the world's leading API management service provider, helping 
companies provide the best API experience for developers, as well as 
the most advanced API management and reporting tools to our clients. 


EXPLORE MORE APIS
==================================================================
Check out Mashery's API Network at http://developer.mashery.com/apis
to explore other awesome APIs including NY Times, Klout, USA TODAY, 
Rotten Tomatoes, Best Buy, Hoovers, Edmunds, Netflix, Rdio,
ESPN, Rovi and many more. 


SUPPORT
==================================================================
If you have any questions or need any help obtaining an API key, 
you can reach out to us at: developer-relations@mashery.com
