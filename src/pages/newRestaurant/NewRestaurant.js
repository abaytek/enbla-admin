import "./newRestaurant.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const NewRestaurant = ({ inputs, title }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [file, setFile] = useState('')

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
    console.log(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      // navigate(-1);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
        </div>
         <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className='right'>
            <form onSubmit={handleAdd}>
              <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
              </div>
              {inputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  {input.label === 'dishes' || input.label === 'Category' ? 
                  (<div className="formInput">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div> )
                : (
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}/>
                  )}
                  
                </div>
              ))}
              <button type='submit'>{loading ? "Submitting" : "Send"}</button>
              {error && <span>Something went wrong</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRestaurant;
