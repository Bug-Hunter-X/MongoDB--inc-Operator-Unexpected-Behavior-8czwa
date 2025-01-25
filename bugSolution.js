```javascript
// Solution using $inc with a conditional check
db.collection('myCollection').updateOne({"_id": ObjectId("65196855c11772e868d52766")}, {"$inc": {"counter": -1}}, {upsert:true});

// Alternatively: Solution using $max to prevent negative values
db.collection('myCollection').updateOne({"_id": ObjectId("65196855c11772e868d52766")}, {"$max": {"counter": 0}});
```