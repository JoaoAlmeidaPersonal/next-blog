import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://joaoalmeida:pOkM1byyvvhyuvo7@cluster0.y0bykl5.mongodb.net/events?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Error Connecting to Database!" });
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Error inserting file!" });
    }

    res
      .status(201)
      .json({
        message: "Successfully stored message!",
        newMessage: newMessage,
      });
  }
}

export default handler;
