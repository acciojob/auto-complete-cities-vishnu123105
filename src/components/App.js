import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [suggetion, setSuggetion] = useState(false);
  const allCitiesInIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivli",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Navi Mumbai",
    "Prayagraj",
    "Howrah",
    "Ranchi",
    "Jabalpur",
    "Gwalior",
    "Coimbatore",
    "Vijayawada",
    "Chandigarh",
    "Mysore",
    "Gurgaon",
    "Bhubaneswar",
    "Noida",
    "Kochi",
    "Thiruvananthapuram",
    "Dehradun",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Kota",
    "Guwahati",
    "Bhubaneswar",
    "Solapur",
    "Tiruchirappalli",
    "Bareilly",
    "Moradabad",
    "Guntur",
    "Bikaner",
    "Saharanpur",
    "Gorakhpur",
    "Bhiwandi",
    "Jamshedpur",
    "Cuttack",
    "Firozabad",
    "Amravati",
    "Ujjain",
    "Jhansi",
    "Nellore",
    "Jammu",
    "Belgaum",
    "Mangalore",
    "Kurnool",
    "Malegaon",
    "Gaya",
    "Tirupati",
    "Udaipur",
    "Davanagere",
    "Kozhikode",
    "Akola",
    "Kurnool",
    "Rajahmundry",
    "Bokaro",
    "South Dumdum",
    "Bellary",
    "Muzaffarpur",
    "Kollam",
    "Bhilai",
    "Ahmednagar",
    "Rourkela",
    "Bardhaman",
    "Kakinada",
    "Nanded",
    "Bhavnagar",
    "Warangal",
    "Durgapur",
    "Shimoga",
    "Tumkur",
    "Mathura",
    "Chandrapur",
    "Darbhanga",
    "Panipat",
  ];
  return (
    <div className="parent">
      <div className="chaild">
        <h3>Search cities of india</h3>
         <input placeholder="Enter cities name.." value={input} onChange={(e)=>{
          setSuggetion(true);
          setInput(e.target.value)
         }}/>
          <ul className="list">
             {input!==""&&suggetion&&allCitiesInIndia.filter((ele)=>ele.toLowerCase().includes(input.toLowerCase())).map((ele)=><li className="item" onClick={()=>{
              setInput(ele);
              setSuggetion(false)
             }}
        >{ele}</li>)}
  
          </ul>
      </div>
    </div>
  );
};

export default App;
/**
 * 
      
      
      
       
 */
