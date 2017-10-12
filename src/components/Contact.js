import React, { Component } from 'react';


class Contact extends Component {
    render(){
        return (

            <div class="row">
            <div class="col-sm-6">

               <h5 class="page-header"> say hi here </h5>
               <form role="form">
                   <div class="form-group float-label-control">
                       <label for="">Name</label>
                       <input type="name" class="form-control" placeholder="Name"/>
                   </div>
                   <div class="form-group float-label-control">
                       <label for="">Email</label>
                       <input type="email" class="form-control" placeholder="Email"/>
                   </div>
                   <div class="form-group float-label-control">
                       <label for="">Message</label>
                       <textarea class="form-control" placeholder="Textarea" rows="5"></textarea>
                  <button class ='form-group float-label-control'>  Send it</button>
               </div>
               </form>

           </div>
       </div>

        )
    }
}

export default Contact;
