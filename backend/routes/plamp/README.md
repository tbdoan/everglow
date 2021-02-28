# Endpoints
### GET `/plamp/`
Request Body: - \
Response: 
* `200` Returns a plamp endpoint documentation in JSON 

### POST `/plamp/`
Request Body: 
* `{ user: string, name: string }`

Response Codes:
* `200` New plamp successfully added to Firebase Realtime Database (RTDB)
* `400` Request is missing a name or user
* `500` Generic Firebase RTDB error

Response Body: 
*     {
          "id": string,
          "plamp": {
              "user": string,
              "name": string,
              "batteryLevel": int (1-100),
              "batteryHistory": {
                  [timestamp]: int (1-100)
              }
          }
      }

### GET `/plamp/{id}`
Request Body: -

Response Codes:
* `200`Successfully found and returned a JSON-formatted plamp from Firebase RTDB
* `404`Plamp not found on Firebase RTDB
* `500` Generic Firebase RTDB error

Response Body: 
*         {
              "batteryHistory": {
                  [timestamp]: int (1-100)
              },
              "batteryLevel": int (1-100),
              "name": string,
              "user": string
          }

### PUT `/plamp/{id}`
Request Body:
* `{ batteryLevel: int (1-100) }`

Response Codes:
* `200` Specified plamp's `batteryLevel` and `batteryHistory` updated on Firebase RTDB
* `400` Request is either missing `batteryLevel` or `batteryLevel` is an invalid value
* `500` Generic Firebase RTDB error
