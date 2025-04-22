const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Book_Store:Dhivya1234*@cluster0.rbjtpcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const JWT_SECRET = "bookstore";

async function run() {
  try {
    await client.connect();
    const bookCollection = client.db("BookStore").collection("books");
    const userCollection = client.db("BookStore").collection("users");

    // Books routes
    app.post("/uploadbooks", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });

    app.put("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updatedBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const { _id, ...updateFields } = updatedBookData;
      const updateDoc = { $set: updateFields }; 
  
      try {
          const result = await bookCollection.updateOne(filter, updateDoc);
          res.json(result);
      } catch (error) {
          console.error('Error updating book:', error);
          res.status(500).json({ error: 'Error updating book' });
      }
  });     

    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

    app.get("/getbook/:id", async (req, res) => {
      const id = req.params.id;
      const book = await bookCollection.findOne({ _id: new ObjectId(id) });
      res.json(book);
    });
    
   //User routes
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const user = await userCollection.findOne({ _id: new ObjectId(id) });
      res.json(user);
    });
    app.post("/register", async (req, res) => {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { username, email, password: hashedPassword };
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    app.post("/login", async (req, res) => {
      const { email, password } = req.body;
      const user = await userCollection.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: "Invalid password" });
      }
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.json({ token });
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Close the MongoDB client when done
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
