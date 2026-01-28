
import Product from './models/Product.js'
import connectDB from "./db/mongo.js";

connectDB();

const seed = async () => {
    await Product.deleteMany();
    await Product.insertMany([
        { name: "Laptop", stock: 5 },
        { name: "Mouse", stock: 50 },
        { name: "Keyboard", stock: 40 },
        { name: "Monitor", stock: 20 },
        { name: "Headphones", stock: 35 },
        { name: "Webcam", stock: 25 },
        { name: "USB Cable", stock: 100 },
        { name: "Charger", stock: 60 },
        { name: "Power Bank", stock: 45 },
        { name: "Hard Drive", stock: 30 },
        { name: "SSD", stock: 28 },
        { name: "RAM 8GB", stock: 70 },
        { name: "RAM 16GB", stock: 55 },
        { name: "Graphics Card", stock: 10 },
        { name: "Processor", stock: 15 },
        { name: "Motherboard", stock: 18 },
        { name: "Cabinet", stock: 22 },
        { name: "Cooling Fan", stock: 90 },
        { name: "Router", stock: 26 },
        { name: "Switch", stock: 33 },
        { name: "Ethernet Cable", stock: 120 },
        { name: "Printer", stock: 14 },
        { name: "Scanner", stock: 12 },
        { name: "Speaker", stock: 40 },
        { name: "Microphone", stock: 27 },
        { name: "Tablet", stock: 16 },
        { name: "Smartphone", stock: 48 },
        { name: "Smartwatch", stock: 32 },
        { name: "Projector", stock: 9 },
        { name: "UPS", stock: 11 },
        { name: "External DVD Drive", stock: 19 }
    ]);



    console.log("Product seeded");
    process.exit();
};

seed();
