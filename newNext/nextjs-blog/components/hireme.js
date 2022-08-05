import { useState, useCallback, createRef, useEffect } from 'react';


function FormDataToJSON(FormElement){    
    var formData = new FormData(FormElement);
    var ConvertedJSON= {};
    for (const [key, value]  of formData.entries())
    {
        ConvertedJSON[key] = value;
    }

    return ConvertedJSON
}

async function sendMessage(formRef, updateFormSubmitted) {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const jsonData = (FormDataToJSON(formRef));
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(jsonData)
    };

    fetch("https://api.ayzom.com/Resume-handler", requestOptions)
      .then(response => {
        document.querySelector("#formResumeElemBtn").textContent = "Check your Email!";
        return response.json();
      })
      .then(result => {
        updateFormSubmitted(true);
      })
      .catch(error => console.log('error', error));
}

const usePostForm = field => {
    const [values, setValues] = useState({
        firm_name_person:"",
        firm_name:"",
        firm_role:"",
        recruiter_email:"",
        recruiter_phone:"",
        ...field
    });
  
    const setFormPost = useCallback(
      ({ target: { name, value } }) =>
        setValues(prevState => ({ ...prevState, [name]: value })),
      [setValues]
    );
  
    return [values, setFormPost];
};

export default function HireMe(props) {


    const formRef = createRef();
    const [isFormSubmitted, updateFormSubmitted] = useState(false);

    const [values, setFormPost] = usePostForm({ 
        firm_name_person:"",
        firm_name:"",
        firm_role:"",
        recruiter_email:"",
        recruiter_phone:"",
        buttonHit: false
      });
      
     const handleSubmit = (e, ref, updateFormSubmitted) => {    
            e.preventDefault();
            const isAllValid = (values.firm_name_person && values.firm_name && values.firm_role && values.recruiter_email && values.recruiter_phone);
            alert(JSON.stringify(values, null, 4));
            setFormPost({
                target: {name: "buttonHit", value: !isAllValid},
            });
            if(isAllValid) {
                sendMessage(ref, updateFormSubmitted);       
            }
    };

    // clear values once Form Submit response arrives back
    useEffect(()=>{
        if(isFormSubmitted===true) {
                setFormPost({
                    target: {name: "firm_name_person", value: ""}
                });
                setFormPost({
                    target: {name: "firm_name", value: ""}
                });
                setFormPost({
                    target: {name: "firm_role", value: ""}
                });
                setFormPost({
                    target: {name: "recruiter_email", value: ""}
                }); 
                setFormPost({
                    target: {name: "recruiter_phone", value: ""}
                }); 
        }
    }, [isFormSubmitted])



  return (
    <div>
      {/* <!-- The Modal --> */}
      <div
        id="myModal"
        className={`modal ${props.isModalVisible ? "showModal" : "hideModal"}`}
      >
        {/* <!-- Modal content --> */}
        <div className="modal-content">
            <div className="bg-gray">
                <span className="close" onClick={(e) => props.triggerHireModal(e)}>
                    &times;
                </span>
                <h2 className="text-black text-center text-xl">
                    Get Resume at your Email Inbox
                </h2>
            </div>
          <p className="mt-2">
            Please fill in below details to get my resume in your email inbox.
            Hope you find it helpful.
          </p>

          <div>
            <form id="formResumeElem" ref={formRef}>
              <fieldset>
                <div className="flex flex-wrap -mx-3 xl:mb-4 mid:mb-2 sm:mb-0 mt-2">
                  <div className="w-full md:w-7/8 px-3 mb-6 md:mb-0">
                    <input
                      name="firm_name_person"
                      value={values.firm_name_person}
                      onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.firm_name_person) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      id="grid-first-name"
                      type="text"
                      placeholder="Your Name"
                      autoFocus
                      tabIndex={0}
                    />
                    {/* {Boolean(values.buttonHit && !values.firstName) && (<p  className="text-red-500 text-xs italic">Please fill out this field.</p>)} */}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 xl:mb-4 mid:mb-2 sm:mb-0">
                  <div className="w-full md:w-7/8 px-3 mb-6 md:mb-0">
                    <input
                      name="recruiter_email"
                      value={values.recruiter_email}
                      onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.recruiter_email) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      id="grid-last-name"
                      type="email"
                      placeholder="Email Address"
                    />
                    {/* {Boolean(values.buttonHit && !values.firstName) && (<p  className="text-red-500 text-xs italic">Please fill out this field.</p>)} */}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 xl:mb-4 mid:mb-2 sm:mb-0">
                  <div className="w-full md:w-7/8 px-3 mb-6 md:mb-0">
                    <input
                      name="firm_name"
                      value={values.firm_name}
                      onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.firm_name) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      id="grid-firm-name"
                      type="text"
                      placeholder="Company Name"
                    />
                    {/* {Boolean(values.buttonHit && !values.firstName) && (<p  className="text-red-500 text-xs italic">Please fill out this field.</p>)} */}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-7/8 px-3 mb-6 md:mb-0">
                    <input
                      name="firm_role"
                      value={values.firm_role}
                      onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.firm_role) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      id="grid-role-name"
                      type="text"
                      placeholder="Hiring Job Role/Designation"
                    />
                    {/* {Boolean(values.buttonHit && !values.firstName) && (<p  className="text-red-500 text-xs italic">Please fill out this field.</p>)} */}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 xl:mb-4 mid:mb-2 sm:mb-0">
                  <div className="w-full md:w-7/8 px-3 mb-6 md:mb-0">
                    <input
                      name="recruiter_phone"
                      value={values.recruiter_phone}
                      onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.recruiter_phone) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                      id="grid-recruiter-phone"
                      type="text"
                      placeholder="Contact Phone Number"
                    />
                    {/* {Boolean(values.buttonHit && !values.firstName) && (<p  className="text-red-500 text-xs italic">Please fill out this field.</p>)} */}
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3">
                    <button
                      type="submit"
                      onClick={(e) =>
                        handleSubmit(e, formRef.current, updateFormSubmitted)
                      }
                      className="text-black shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Get Resume
                    </button>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
              </fieldset>
            </form>
          </div>
          {isFormSubmitted && (<p className="text-gray-600 text-sm italic mt-6 text-green-900 font-bold">Please check your Email.</p>) }
        </div>
      </div>

      <style jsx>
        {`
          .showModal {
            display: block;
          }
          .hideModal {
            display: none;
          }

          /* The Modal (background) */
          .modal {
            position: absolute; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
          }

          /* Modal Content/Box */
          .modal-content {
            background-color: #fefefe;
            margin: 10% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            border-radius: 20px;
            width: 30%; /* Could be more or less, depending on screen size */
          }

          @media screen and (max-width: 1000px) {
          .modal-content {
              background-color: #fefefe;
              margin: 20% auto; /* 15% from the top and centered */
              padding: 20px;
              border: 1px solid #888;
              border-radius: 20px;
              width: 80%; /* Could be more or less, depending on screen size */
            }
          }

          /* The Close Button */
          .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }

          .close:hover,
          .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
