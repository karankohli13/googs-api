
var request=require('request-promise');

var self;
function GetJarBot(){
    self=this;
    this.counter=0;
}

GetJarBot.prototype.startWork=function() {

    downloadOnce();
};

var downloadOnce=function() {



    const options1 = {
        method: 'GET',
        uri: 'http://www.getjar.com/categories/food-apps/recipes/Filipino-Recipes-926084',
        json: true
    };

    const options2 = {
        method: 'GET',
        uri: 'http://www.getjar.com/download/926084/247512/?t=1484559438',
        json: true
    };

    const options3 = {
        method: 'GET',
        uri: 'http://download.getjar.com/download/03/1217329_565402__Filipino%20Recipes.apk?a=926084&c=IN',
        json: true
    };

    request(options1)
        .then(function(response1){

            console.log('Page Downloaded');
            return request(options2);
        })
        .then(function(response2){

            console.log('2nd Response');
            return request(options3);
        })
        .then(function(response3){

            console.log('3rd Response');
        })
        .catch(function(reason){
            console.log(reason);
        })
        .finally(function(){
            self.counter++;
            console.log('Executed:'+self.counter);
            downloadOnce();
        })
};

module.exports=new GetJarBot();