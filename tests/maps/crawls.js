var userCrawls = [{
  "id": 56,
  "name": "My crawl",
  "city": "London",
  "user_id": 2,
  "featured": false,
  "stopCount": 2,
  "links": {
    "stops": "/api/v1/stops?crawl_id=56"
  }
  }, {
  "id": 89,
  "name": "Another one",
  "city": "New York",
  "user_id": 2,
  "featured": false,
  "stopCount": 2,
  "links": {
    "stops": "/api/v1/stops?crawl_id=89"
  }
}];

var crawls = [{
  "id": 2,
  "name": "The best",
  "city": "London",
  "user_id": 15,
  "featured": true,
  "stopCount": 2,
  "links": {
    "stops": "/api/v1/stops?crawl_id=2"
  }
  }, {
  "id": 6,
  "name": "Amazing",
  "city": "London",
  "user_id": 3,
  "featured": true,
  "stopCount": 2,
  "links": {
    "stops": "/api/v1/stops?crawl_id=6"
  }
  }, {
  "id": 10,
  "name": "Whoa",
  "city": "New York",
  "user_id": 12,
  "featured": true,
  "stopCount": 2,
  "links": {
    "stops": "/api/v1/stops?crawl_id=10"
  }
  }];

export default function(){
  this.post('/api/v1/crawls', function(){
    return [200, {"Content-Type": "application/json"}, {
      "crawl": {
        "id": 2,
        "name": "My Crawl 1",
        "city": "London",
        "user_id": 1,
        "links": {
          "stops": "/api/v1/stops?crawl_id=1"
        }
      }
    }];
  });
  this.get('/api/v1/crawls/2', function(){
    return [200, {"Content-Type": "application/json"}, {
      "crawl": {
        "id": 2,
        "name": "My Crawl 1",
        "city": "London",
        "user_id": 1,
        "links": {
          "stops": "/api/v1/stops?crawl_id=1"
        }
      }
    }];
  });
  this.get('/api/v1/crawls', function(){
    var theCrawls = crawls;
    if (currentSession().get("id") === 2) {
      theCrawls = crawls.concat(userCrawls);
    }
    return [200, {"Content-Type": "application/json"}, {
      "crawls": theCrawls
    }];
  });
  this.put('/api/v1/crawls/2', function(){
    return [200, {"Content-Type": "application/json"}, {}];
  });
  this.get('/api/v1/stops', function(){
    return [200, {"Content-Type": "application/json"}, { "stops": [] }];
  });
  this.delete('/api/v1/crawls/56', function() {
    return [204, {"Content-Type": "application/json"}, {}];
  })
}
