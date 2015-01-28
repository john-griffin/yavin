export default function(){
  this.get('/api/v1/crawls/1', function(){
    return [200, {"Content-Type": "application/json"}, {
      "crawl": {
        "id": 1,
        "name": "Monopoly",
        "links": {
          "stops": "/api/v1/stops?crawl_id=1"
        }
      }
    }];
  });
  this.get('/api/v1/stops', function(){
    return [200, {"Content-Type": "application/json"}, {
      "stops": [
        {
          "id": 73,
          "crawl_id": 1,
          "row_order": 5242880,
          "name": "Fenchurch Street",
          "venue_name": "O'Reilly's Irish Pub",
          "description": null,
          "photo_id": "4f65101ae4b087553d7d85d5",
          "photo_prefix": "https://irs3.4sqi.net/img/general/",
          "photo_suffix": "/MsCkzl0oa7rHxMYcVw7PMzY_H9dWUkMbD9TDmvDCmGQ.jpg",
          "location": [
            "54 W 31st St (at Broadway)",
            "New York, NY 10001",
            "United States"
          ],
          "foursquare_id": "4259be00f964a520ef201fe3"
        },
        {
          "id": 74,
          "crawl_id": 1,
          "row_order": 5767168,
          "name": "Old Kent Road",
          "venue_name": "The Donut Pub",
          "description": null,
          "photo_id": "509ece2ee4b0bae035ce3d33",
          "photo_prefix": "https://irs2.4sqi.net/img/general/",
          "photo_suffix": "/33670510_9zUTvLlMRcmirrgNmVCBgPZy2PcCaQOJQcTFsdL9AUg.jpg",
          "location": [
            "203 W 14th St (btwn 7th & 8th Ave)",
            "New York, NY 10011",
            "United States"
          ],
          "foursquare_id": "459b8681f964a5208c401fe3"
        },
        {
          "id": 75,
          "crawl_id": 1,
          "row_order": 6291456,
          "name": "Mayfair",
          "venue_name": "Twins Pub",
          "description": null,
          "photo_id": "513d453be4b0242788d05377",
          "photo_prefix": "https://irs0.4sqi.net/img/general/",
          "photo_suffix": "/1094017_OyC7T309BQ-jx7hoUz2MvRD95eu9fLTnziAbnT1wcN4.jpg",
          "location": [
            "421 9th Ave, Frnt 1 (btwn 33rd & 34th)",
            "New York, NY 10001",
            "United States"
          ],
          "foursquare_id": "4ad2b22af964a52081e220e3"
        }
      ]
    }];
  });
}
