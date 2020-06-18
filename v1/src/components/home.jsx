import React from 'react';



const home = (props) => {
    return ( 
        <>
            <div style={{
                right: 0,
                // marginTop: "12rem",
                // color: "white",
                position: "absolute",
                width: "100%",
                // backgroundColor: "black",
                // height: "200vh",
            }}>
          <section>
              <div className="row">
                  <div className="col l6">
                  <div className="container">
                      <div className="card card-1">
                        <div class="card-image">
                            <img src="img2/img1.jpg" alt="" />
                            {/* <span class="card-title">Card Title</span> */}
                        </div>
                      </div>
                        <div className="card card-2 ">
                            <div class="card-image">
                                <img src="img2/img2.jpg" alt="" />
                                <span class="card-title">Card Title</span>
                            </div>
                        </div>
                        <div className="card card-3">
                            <div class="card-image">
                                <img src="img2/img3.jpg" alt="" />
                                <span class="card-title">will always care</span>
                            </div>
                        </div>
                  </div>
                  </div>
                  <div className="col l6">
                      <div className="">
                                <h2 className="blue-text  text-darken-4">We bring all your picture in one frame</h2>
                                <h5 className="blue-text  text-darken-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos eum ipsa obcaecati quia inventore tempora nisi perspiciatis autem quae neque eveniet, voluptates, reiciendis laboriosam cupiditate blanditiis magnam minus repudiandae.</h5>
                                <h5 className="blue-text  text-darken-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos eum ipsa obcaecati quia inventore tempora nisi perspiciatis autem quae neque eveniet, voluptates, reiciendis laboriosam cupiditate blanditiis magnam minus repudiandae.</h5>
                                <h5 className="blue-text  text-darken-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos eum ipsa obcaecati quia inventore tempora nisi perspiciatis autem quae neque eveniet, voluptates, reiciendis laboriosam cupiditate blanditiis magnam minus repudiandae.</h5>
                      </div>
                  </div>
              </div>

          </section>
        </div>
       
        </>
     );
}
 
export default home;