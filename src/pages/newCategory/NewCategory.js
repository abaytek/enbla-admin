import "./newCategory.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import sanityClient from '../../config/sanity';
import {useEffect} from 'react'



const NewCategory = ({ inputs, title }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [file, setFile] = useState('')
  const [image, setImage] = useState('')


  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  const handleImageUpload = async () => {
	  const asset = await sanityClient.assets.upload('image', file);
	  setImage(asset?._id);
	  console.log(image)
	};

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    	handleImageUpload()
    	const category = {
		    _type: 'category',
		    name: data[1],
		    description: data[2],
		    price: data[3],
		    image: {
		    	_type:'image',
		    	asset: {
		    		_type:'reference',
		    		_ref:image
		    	}
		    }
  		}
  	  await sanityClient.create(category);
      navigate(-1);
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
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
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

export default NewCategory;
