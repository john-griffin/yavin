export default function(){
  this.post('/api/v1/sessions', function(){
    return [201, {"Content-Type": "application/json"}, {
      "authentication_token":"Je4xZPxjBeA4RjxEs5MB","email":"j@j.com", "id": 2
    }];
  });
}
