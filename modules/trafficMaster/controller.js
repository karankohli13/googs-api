/**
 * Created by kohil on 10/04/17.
 */

var generalUtils = require('../util/general');
var fs = require('fs');
var Url = require('../../models/url');
var _ = require('lodash');

function TrafficMaster() {
  this.utils = new generalUtils();
}

TrafficMaster.prototype.addUrl = function(req, res) {
  console.log(req.body);

  var self = this;

  var newUrl = Url({
    category: req.body.category,
    url: req.body.url,
    targetRegion: req.body.targetRegion,
    views: req.body.views || 0
  });

  Url.create(newUrl, function(err) {
    if (err) return res.status(501).json(err);
    return res.json({
      success: true
    });
  });

};


TrafficMaster.prototype.fetchUrl = function(req, res) {
  var self = this;
  var urlString = [];
  Url.find({}, function(err, obj) {
    if (err) return res.status(501).json(err);
    _.forEach(obj, function(data) {
      if (data.views == -1)
        urlString.push(data.url);
      if (data.views > 0) {
        urlString.push(data.url);
        decrementViews(data._id,data.views);
      }
    });
    return res.json({
      urlString: [getRandomUrl(urlString)]
    });
  });

};

TrafficMaster.prototype.updateUrl = function(req, res) {
  var self = this;
  var temp = {
    $set: {
      url: req.body.newUrl
    }
  };
  Url.findOneAndUpdate({
    url: req.body.url
  }, temp, {
    upsert: false,
    new: true
  }, function(err, response) {
    if (err) return res.status(501).json(err);
    return res.json(response);
  });
};

TrafficMaster.prototype.deleteUrl = function(req, res) {
  var self = this;
  Url.remove({
    url: req.body.url
  }, function(err, response) {
    if (err) return res.status(501).json(err);
    return res.json(response);
  });
};

function decrementViews(id,views){
  var self = this;
  var temp = {
    $set: {
      views: views-1
    }
  };
  Url.findOneAndUpdate({
    _id: id
  }, temp, {
    upsert: false,
    new: true
  }, function(err, response) {
  });
}

function getRandomUrl(names) {
  return names[Math.floor(Math.random() * (names.length))];
}


module.exports = new TrafficMaster();
