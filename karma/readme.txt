Install node
	http://nodejs.org/
Install browsers
	Chrome http://www.google.com/chrome/
	Firefox https://www.mozilla.org/en-US/firefox/new/
	Phantomjs http://phantomjs.org/
Install BrowserStack for local
	https://www.browserstack.com/browserstack-local/BrowserStackLocal-win32.zip
Run it with your own key
	BrowserStackLocal.exe PRIVATE_KEY
Copy karmaCreds.json.sample to karmaCreds.json and update for your own local parameters
Run karma locally
	karma.bat
Run karma browserstack
	karmaBrowserStack.bat
	
	
**Note**
You can queue up installs like so:
	npm install karma-chrome-launcher karma-browserstack-launcher --save-dev