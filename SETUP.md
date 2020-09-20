Setup and Troubleshooting
===

Facebook Application has to be verified same way.




## Facebook API v8.0 troubleshooting

From page: https://developers.facebook.com/apps/2033979273403321/webhooks/



Webhooks \ Permissions

Test POST request for `user_friends`

```
{
  "field": "user_friends",
  "value": {
    "verb": "granted",
    "target_ids": [
      "123123123123123",
      "321321321321321"
    ]
  }
}
```

Response:




Webooks \ User

```
{
  "field": "friends",
  "verb": "add",
  "value": {
    "uid": "4444444444"
  }
}
```


v4.0


`about` webhook test:

`Request Body {"object":"user","entry":[{"id":"0","uid":"0","time":1600603307,"changed_fields":["about"]}]}`

`friends` webhook test:

`Request Body {"object":"user","entry":[{"id":"0","uid":"0","time":1600603327,"changed_fields":["friends"]}]}`
