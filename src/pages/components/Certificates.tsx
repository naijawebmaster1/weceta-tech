import { Carousel } from 'antd';
import React from 'react';


const contentStyle: React.CSSProperties = {
  height: '60%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
};

function Certificates(props: any) {
  return <>

    {/* <section id="video-3" className="bg-scroll bg-dark video-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 white-color section-title">
            <h2 className="h2-lg">Generated certificate</h2>
            <p>
              Wecetatech provides an advanced technology that flows from farm to fork within the supply chain and facilitates seamless execution of effective traceable edible meats (including fish and other kinds of sea food).
            </p>
          </div>{" "}
        </div>{" "}
        <div className="row">
          <div className="video-inner-bg">
            <div className="col-xl-10 offset-xl-1">

              <div className="video-content">
                <div className="row d-flex align-items-center">
                  <img alt="" width="100%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Lagos-State.png" />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>{" "} */}




    <section id="video-3" className="bg-scroll bg-dark video-section division p-10">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-10 offset-md-1 white-color section-title">
            {/* Title 	*/}
            <h2 className="h2-lg">Generated certificate</h2>
            {/* Text */}
            <p>
              Wecetatech provides an advanced technology that flows from farm to fork within the supply chain and facilitates seamless execution of effective traceable edible meats (including fish and other kinds of sea food).
            </p>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END SECTION TITLE */}
        <Carousel autoplay dots={true} >
          <div>
            <h3 style={contentStyle}>
              <img alt="" width="70%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Lagos-State.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img alt="" width="70%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Abia-State.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img alt="" width="70%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Abuja-State.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img alt="" width="70%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Anambra-State.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img alt="" width="70%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Delta-State.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img alt="" width="70%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Kaduna-State.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img alt="" width="70%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Ondo-State.png" />
            </h3>
          </div>
        </Carousel>
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>{" "}
    {/* END VIDEO-3 */}



  </>;
}
export default Certificates;
