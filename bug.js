```javascript
// Incorrect usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id": ObjectId("65196855c11772e868d52766")}, {"$inc": {"counter": -1}});
```