import {useState} from 'react';

const Gallery=()=>{
    const [imageId,setImageId]=useState('');
    const [imageTitle, setImageTitle]=useState('');
    const [imageDescription,setImageDescription]=useState('');
    const [image,setImage]=useState('');
    const [date,setDate]=useState(new Date().toDateString());
    const [msg,setMsg]=useState('');
    const [images, setImages] = useState([1,2,3,4,5]);

    const deleteHandler=(imageId)=>{
        //api call
    }

    const isDisabled=()=>imageId.trim().length===0|| imageTitle.trim().length===0||imageDescription.trim().length===0||
    image.trim().length===0;
    return(
        <>
        <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">Add New Images</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="ImageId" className="form-label">Image Id<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="ImageId" onChange={e=>setImageId(e.target.value)} value={imageId} placeholder="Image Id"/>
                                        
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="ImageTitle" className="form-label">Image Title<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="ImageTitle" onChange={e=>setImageTitle(e.target.value)} value={imageTitle} placeholder="Image Title"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="ImageDescription" className="form-label">Image Descriptions<span style={{color:"red"}}>*</span></label>
                                        <textarea type="text" className="form-control " id="ImageDescription" onChange={e=>setImageDescription(e.target.value)} value={imageDescription} placeholder="Image Descriptions"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="Image" className="form-label">Choose Image<span style={{color:"red"}}>*</span></label>
                                        <input type="file" className="form-control " id="Image" onChange={e=>setImage(e.target.value)} value={image} placeholder="Choose Image"/>
                                    </div>
                                    </div>
                                    </div>                                   
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()}>Add New Image</button>
                                
                            </div>
                            {/* <span>Sign Up Successfull! , for sign in please <Link to="/">click here to login</Link></span> */}
                            {msg?<div style={{color:"green"}} >Add Successfully!</div>:null}
                        </div>
                    </div>
                </div>
        </div> 
        <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">Images</h3>
                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">Image Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Image Title</th>
                                        <th scope="col">Image Description</th>
                                        <th scope="col">Date</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {images.map((value,index)=>{
                                        return(
                                            <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><button type="button" className="btn btn-light" onClick={e=>deleteHandler(123)}>Delete</button></td>
                                    </tr>
                                        );
                                    }
                                       
                                    )}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery;