import React from 'react';
const Contact =()=>{
    return(
        <>
        <div className="contact-info">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">

                    <div className="card text-dark bg-light mb-3" >
                        <h5>Phone</h5>
                        <p>9815406058</p>

                    </div>
                    <div className="card text-dark bg-light mb-3">
                        <h5>Email</h5>
                        <p>ishita@gmail.com </p>

                    </div>
                    <div className="card text-dark bg-light mb-3">
                        <h5>Address</h5>
                        <p>Bathinda, Punjab</p>

                    </div>
                       
                </div>
                <div className="col-3">
               
                </div>
                <div className="col-3">


                </div>
            </div>
    
        </div>
        </div>
        <div className="contact_form">
           <div className="container_form">
               <h3 className="Chead">Get in touch..</h3>
               <div className="row">
                   <div className="col-lg-10 offset-lg-1">
                   <div class="input-group mb-3 justify-content-between" >
                       <div>
                       <input type="text" class="form-control" placeholder="name" required="true" aria-label="Username"/>

                       </div>
  
                       <div>
                       <input type="email" class="form-control" placeholder="email" required="true" aria-label="Server"/>

                       </div>
                       <div>
                       <input type="number" class="form-control" placeholder="phone" required="true" aria-label="Phone"/>

                       </div>
  
 
             </div>

              <div class="input-group">
  
              <textarea class="form-control mb-5" placeholder="Your message.." aria-label="With textarea" cols="30" rows="5"></textarea>
              
              </div>
              <button type="button" class="btn btn-primary">Submit!</button>
                   </div>

               </div>
              
           </div>
        </div>
        </>
    )
}
export default Contact;