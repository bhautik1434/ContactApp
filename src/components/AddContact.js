
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const AddContact = () => {
    
    //console.log(contacts);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const contacts= useSelector((state)=>state);

    const handlesubmit= (e)=>{
        e.preventDefault();

        const checkEmail= contacts.find(contact=>contact.email===email && email);

        const checkNumber= contacts.find(contact=>contact.number===parseInt(number) && parseInt(number));

        if(!email||!number||!name){
            return toast.warning("Please fill required data!")
        }

        if(checkEmail){
            return toast.error("Email ID already Exists!!")
        }

        if(checkNumber){
            return toast.error("Email ID already Exists!!")
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="display-3 text-center">
                        Add Contact

                    </h1>
                    <div className="col-md-6 shadow mx-auto p-5">
                        <form onSubmit={handlesubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Name" className="form-control mb-2" value={name} onChange={e => { setName(e.target.value) }} />
                                <input type="email" placeholder="Email" className="form-control mb-2" value={email} onChange={e => { setEmail(e.target.value) }} />
                                <input type="number" placeholder="Phone Number" className="form-control mb-2" value={number} onChange={e => { setNumber(e.target.value) }} />
                                <input type="submit" value="Add Contact" className="btn btn-block btn-dark mb-2" />
                                <Link to="/" className="btn btn-danger mb-2 ms-3">Cancel</Link>
                            </div>

                        </form>

                    </div>


                </div>



            </div>
        </>
    )
}

export default AddContact;