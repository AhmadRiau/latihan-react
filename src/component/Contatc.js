import { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

class Contact extends Component{
   render() {
      if(!this.props.data) return null;

      const name = this.props.data.name;
      const street = this.props.data.address.street;
      const city = this.props.data.address.city;
      const state = this.props.data.address.state;
      const zip = this.props.data.address.zip
      const phone = this.props.data.phone;
      const message = this.props.data.contactmessage;

      return(
         <section id="contact">
            <Fade bottom duration={1000}>
               <div className="row section-head">
                  <div className="two columns header-col">
                     <h1>  <span>Get In Touch</span> </h1>
                  </div>
                  <div className="ten columns">
                     <p className="lead"> {message} </p>
                  </div>
               </div>
            </Fade>
            <div className="row">
               <Fade right duration={1000}>
                  <div className="eight columns">
                     <form action="" method="post" id="contactForm" name="contactForm">
                        <fieldset>
                           <div>
                              <label htmlFor="contactName">
                                 Name <span className="required">*</span>
                              </label>
                              <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                           </div>
                           <div>
                              <label htmlFor="contactEmail">
                                 Email <span className="required">*</span>
                              </label>
                              <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                           </div>
                           <div>
                              <label htmlFor="contactSubject"> Subject </label>
                              <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                           </div>
                           <div>
                              <label htmlFor="contactMessage"> 
                                 Message <span className="required">*</span>
                              </label>
                              <textarea cols="30" rows="3" id="contactMessage" name="contactMessage" onChange={this.handleChange} defaultValue={"Write your message here."}>
                                 
                              </textarea>
                           </div>
                           <div>
                                <button className="submit">Submit</button>                           
                            </div>
                        </fieldset>
                     </form>
                     <div id="message-warning"> Error </div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!
                            <br />
                        </div>
                  </div>
               </Fade>
               <Fade bottom duration={1000}>
                  <aside className="four columns footer-widgets">
                     <div className="widget widget_contact">
                           <h4>Address and Phone</h4>
                           <p className="address">
                              {name}
                              <br />
                              {street} <br />
                              {city}, {state} : {zip}
                              <br />
                              <span>{phone}</span>
                           </p>
                     </div>

                     <div className="widget widget_tweets">
                        <h4 className="widget-title">Latest Tweets</h4>
                        <ul id="twitter">
                           <li>
                              <span> 
                                 Saya bahagia kemarin <br/> <a href="./">http://t.co/CGIrdxIlI3</a>
                              </span>
                              <b> <a href="./">2 Days Ago</a>  </b>
                           </li>
                           <li>
                              <span>
                                 semoga kamu baik-baik saja yaa<br/> <a href="./">http://t.co/CGIrdxIlI3</a>
                              </span>
                              <b> <a href="./">3 Days Ago</a> </b>
                           </li>
                        </ul>
                     </div>
                  </aside>
               </Fade>
            </div>
         </section>
      );
   }
}

export default Contact;