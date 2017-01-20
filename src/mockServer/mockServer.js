import { Server as MockServer } from 'mock-socket';

export default function(address) {
  const mockServer = new MockServer(address);
  mockServer.on('connection', server => {
    mockServer.send(JSON.stringify({
      type: "text",
      label: "You can request 'text', 'select' or 'results' for message examples"
    }));
  });
  mockServer.on('message', msg => {
    setTimeout(() => {
      if (msg === 'text') {
        mockServer.send(JSON.stringify({
          "name":"to-location-text",
          "type":"text",
          "label":"This is test text message",
          "value":""
        }));
      }
      if (msg === 'select') {
        mockServer.send(JSON.stringify({
          "name":"to-location-select",
          "type":"select",
          "label":"This is an example select question",
          "options":[
            {
              "id":"BCN-sky",
              "name":"Barcelona, Spain"
            },
            {
              "id":"BLA-sky",
              "name":"Barcelona, Venezuela"
            }
          ],
          "value":null
        }));
      }
      if (msg === 'result') {
        mockServer.send(JSON.stringify({
          "type":"none",
          "label":{
            "from":{
              "Id":5227,
              "ParentId":191,
              "Code":"MOW",
              "Type":"City",
              "Name":"Moscow"
            },
            "to":{
              "Id":9772,
              "ParentId":782,
              "Code":"BCN",
              "Type":"Airport",
              "Name":"Barcelona"
            },
            "date":"2017-05-01",
            "itineraries":[
              {
                "price":96.45723690095402,
                "deeplink":"http://deeplink.com/",
                "departure":"2017-05-01T20:40:00",
                "arrival":"2017-05-02T16:10:00",
                "duration":1230,
                "stops":[
                  {
                    "Id":15888,
                    "ParentId":6713,
                    "Code":"RIX",
                    "Type":"Airport",
                    "Name":"Riga International"
                  }
                ],
                "carriers":[
                  {
                    "Id":900,
                    "Code":"BT",
                    "Name":"airBaltic",
                    "ImageUrl":"http://s1.apideeplink.com/images/airlines/BT.png",
                    "DisplayCode":"BT"
                  }
                ]
              },
              {
                "price":124.99,
                "deeplink":"http://deeplink.com/",
                "departure":"2017-05-01T04:00:00",
                "arrival":"2017-05-01T09:15:00",
                "duration":375,
                "stops":[
                  {
                    "Id":13066,
                    "ParentId":4133,
                    "Code":"KIV",
                    "Type":"Airport",
                    "Name":"Chisinau"
                  }
                ],
                "carriers":[
                  {
                    "Id":242,
                    "Code":"5F",
                    "Name":"Fly One",
                    "ImageUrl":"http://s1.apideeplink.com/images/airlines/52.png",
                    "DisplayCode":"5F"
                  }
                ]
              },
              {
                "price":127.42435602115403,
                "deeplink":"http://deeplink.com/",
                "departure":"2017-05-01T09:45:00",
                "arrival":"2017-05-01T16:10:00",
                "duration":445,
                "stops":[
                  {
                    "Id":15888,
                    "ParentId":6713,
                    "Code":"RIX",
                    "Type":"Airport",
                    "Name":"Riga International"
                  }
                ],
                "carriers":[
                  {
                    "Id":900,
                    "Code":"BT",
                    "Name":"airBaltic",
                    "ImageUrl":"http://s1.apideeplink.com/images/airlines/BT.png",
                    "DisplayCode":"BT"
                  }
                ]
              }
            ]
          }
        }));

      }
    }, 0);
  });
}
