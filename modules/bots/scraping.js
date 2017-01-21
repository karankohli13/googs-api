var casper = require("casper").create({
    waitTimeout: 20000,
    stepTimeout: 110000,
    verbose: true,
    /*clientScripts:  [
     'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'     // These two scripts will be injected in remote
     // DOM on every request
     ],*/
    pageSettings: {
        loadImages: false,
        webSecurityEnabled: false,
        userAgent: 'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0'
    },
    onWaitTimeout: function () {
        this.echo('** Wait-TimeOut **');
    },
    onStepTimeout: function () {
        this.echo('** Step-TimeOut **');
    }
});

/*Global Vars */

var fileDownloaded = false;
var fileBeingDownloaded = false;

casper.start();
casper.open("https://www.getjar.com/categories/entertainment-apps/more/Free-Charge-Cash-Back-926525");

casper.on('remote.message', function (msg) {
    this.echo('BROWSER MESSAGE: ' + msg);
});

casper.on('page.error', function (msg, trace) {
    this.echo('BROWSER ERROR: ' + msg, 'ERROR');
});

casper.on('resource.requested', function (requestData, resource) {
    console.log('*****Resource*****');
    var url = decodeURI(requestData.url);
    console.log(url);
    if (url.indexOf("freechargecashback.apk") != -1) {
        console.log(decodeURI(requestData.url));
        if (!fileBeingDownloaded) {
            fileBeingDownloaded = true;
            //this.download('http://download.getjar.com/download/03/1217329_565402__Filipino Recipes.apk?a=926084&c=IN', 'downloaded.apk');
            console.log('File Downloaded');
            //casper.die('Completed');
        }

    }
});

casper.then(function () {
    //logic here
    // this.test.assertExists("#topcol1");

    /* this.waitForSelector("#selfservice_popup_iframe",
     function pass() {
     console.log("Continue");
     },
     function fail() {
     this.die("Did not load element... something is wrong");
     }
     );*/

    //this.capture('appeared.png');

    this.evaluate(function () {

        $("#download-new").click();

        return;
    });

    startWaiting();


});

function startWaiting() {

    casper.wait(3000, function () {
        this.echo("I've waited for three seconds.");
        //this.capture('appeared2.png');
    });
}

//start your script
casper.run();