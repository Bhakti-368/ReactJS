import Header from "./componet/Header";
import Home from "./componet/Home";
import Footer from "./componet/Footer";
import './App.css';


const bikes = [
  {
    companyName: "Royal Enfield",
    model: "Classic 350",
    price: "₹1.93 Lakh",
    category: "Cruiser Bike",
    img: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/360/stealth-black/stealth-black-000.png"
  },
  {
    companyName: "Kawasaki",
    model: "Ninja H2",
    price: "₹79.90 Lakh",
    category: "Hyperbike",
    img: "https://m.media-amazon.com/images/I/71c7-154VDL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    companyName: "Ducati",
    model: "Panigale V4",
    price: "₹27.72 Lakh",
    category: "Superbike",
    img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
  },
  {
    companyName: "BMW Motorrad",
    model: "M 1000 RR",
    price: "₹49.00 Lakh",
    category: "Superbike",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80"
  },
  {
    companyName: "Yamaha",
    model: "YZF R1",
    price: "₹20.39 Lakh",
    category: "Superbike",
    img: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    companyName: "Honda",
    model: "CBR1000RR-R Fireblade",
    price: "₹23.11 Lakh",
    category: "Superbike",
    img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    companyName: "Suzuki",
    model: "Hayabusa",
    price: "₹16.90 Lakh",
    category: "Sports Bike",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/SUZUKI_Hayabusa_2007TMS.jpg"
  },
  {
    companyName: "KTM",
    model: "1290 Super Duke R",
    price: "₹19.99 Lakh",
    category: "Naked Superbike",
    img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80"
  },
  {
    companyName: "Triumph",
    model: "Speed Triple 1200 RS",
    price: "₹18.25 Lakh",
    category: "Street Bike",
    img: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    companyName: "Harley-Davidson",
    model: "Fat Boy 114",
    price: "₹25.65 Lakh",
    category: "Cruiser Bike",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY__DcAus87JqgYqNFO-qdIMktJje2MUXLw5fIbiPa4A&s=10"
  },
  {
    companyName: "Aprilia",
    model: "RSV4 Factory",
    price: "₹31.26 Lakh",
    category: "Superbike",
    img: "https://apriliaindia.com/images/rsv4/aprilia_rsv4_model2.webp"
  },
  {
    companyName: "MV Agusta",
    model: "Brutale 1000 RR",
    price: "₹34.36 Lakh",
    category: "Naked Superbike",
    img: "https://www.evoindia.com/evoindia/2021-06/219880f2-3d1d-410d-b2ca-6d4299fcb9ca/press_release_40.jpg"
  },
  {
    companyName: "Indian Motorcycle",
    model: "Challenger",
    price: "₹36.00 Lakh",
    category: "Cruiser Touring",
    img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    companyName: "Bajaj",
    model: "Pulsar NS400Z",
    price: "₹1.59 Lakh",
    category: "Street Bike",
    img: "https://www.bikewale.com/n/cw/ec/1/versions/bajaj-pulsar-ns400z-standard1776759948430.jpg"
  },
  {
    companyName: "Hero MotoCorp",
    model: "Mavrick 440",
    price: "₹2.15 Lakh",
    category: "Roadster",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80"
  }
];



function App() {

  return (
    <>
      <Header />
      <Home mybikes={bikes} />
      <Footer />
    </>
  )
}


export default App;