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
  this.put('/api/v1/crawls/2', function(){
    return [200, {"Content-Type": "application/json"}, {}];
  });
  this.get('/api/v1/stops', function(){
    return [200, {"Content-Type": "application/json"}, { "stops": [] }];
  });
}
