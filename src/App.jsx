import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { filterData,apiUrl} from "./data";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect,useState } from "react";
import { toast } from 'react-toastify';
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFilteredData(data.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col bg-pink-200">
      <Header/>
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
        {loading?<Spinner/>:<Cards courses={courses} category={category}/>}
      <ToastContainer style={{ width: "fit-content" }}/>
    </div>
  );
}

export default App;
