import './App.css';
import Certificates from "./certificates.js";

function App() {
  return (
    <>
   <div className="event">
   <section className="box">
            <h1> Perks of Participating</h1>
            <div className="crts">
              {Certificates.map((curr,index)=>{
                return(
                  <div className="crt" key={index}>
                  <div className="crt-img">
                    <div className="img">
                      {curr.img!==""? curr.img: <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.37896 17.017H19.3307V0.111328H3.33494C2.62728 0.113603 1.94925 0.395729 1.44886 0.896123C0.948463 1.39652 0.666338 2.07454 0.664062 2.7822V18.3488H0.664547C0.664547 18.3554 0.664062 18.362 0.664062 18.3687C0.664062 19.9272 1.88717 21.2435 3.33494 21.2435H19.3307V19.8346H3.33494C2.67443 19.8346 2.07287 19.1359 2.07287 18.3686C2.07287 17.636 2.67095 17.017 3.37896 17.017ZM14.7521 1.53479V9.14305L12.6213 7.27242L10.5257 9.13208V1.53479H14.7521ZM9.11689 1.52013V11.0296H10.5099L12.6264 9.1515L14.7655 11.0296H16.1609V1.52013H17.9219V15.6082H4.894L4.89048 1.52013H9.11689ZM3.33494 1.52013H3.48167L3.48502 15.6082H3.37879C2.9207 15.6083 2.47056 15.7279 2.07287 15.9552V2.79321C2.07179 2.45714 2.20406 2.13437 2.44066 1.89571C2.67726 1.65704 2.99887 1.52197 3.33494 1.52013Z"
                          fill="#633A26" />
                      </svg>
                      }
                    </div>
                  </div>
                  <div className="crt-disc">
                    <h2>{curr.heading}</h2>
                    <p>{curr.disc}</p>
                  </div>
                </div>
                )
              })}
            </div>
        </section>
       
      </div>
    </>
  );
}

export default App;

