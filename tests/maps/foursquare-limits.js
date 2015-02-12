export default function(){
  this.get('/api/v1/crawls/2', function(){
    return [200, {"Content-Type": "application/json"}, {
      "crawl": {
        "id": 2,
        "name": "Monopoly",
        "city": "London",
        "user_id": 1,
        "links": {
          "stops": "/api/v1/stops?crawl_id=1"
        }
      }
    }];
  });

  this.get('/foursquare_api_v2/venues/search', function(){
    return [
      403,
      { "Content-Type": "application/json" },
      {
        "meta": {
          "code":403,
          "errorType":"rate_limit_exceeded",
          "errorDetail":"Quota exceeded"
        },
        "response":{}
      }
    ];
  });
}
