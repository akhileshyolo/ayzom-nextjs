import { useState, useCallback, createRef, useEffect } from 'react';

async function sendMessage(values, formRef, updateFormSubmitted) {
    
    //console.log({ref});
    let response = await fetch('https://my-project.aykz.workers.dev/submission', 
    {
      method: 'POST',
      body: new FormData(formRef)
    });

    let result = await response.json();
    if(result){
        updateFormSubmitted(true);
    }
}

const usePostForm = field => {
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:"",
        ...field
    });
  
    const setFormPost = useCallback(
      ({ target: { name, value } }) =>
        setValues(prevState => ({ ...prevState, [name]: value })),
      [setValues]
    );
  
    return [values, setFormPost];
};


export default function Contact() {

    const formRef = createRef();
    const [isFormSubmitted, updateFormSubmitted] = useState(false);

    const [values, setFormPost] = usePostForm({ 
        firstName:"",
        lastName:"",
        email:"",
        message:"",
        buttonHit: false
      });
      
     const handleSubmit = (e, ref, updateFormSubmitted) => {    
            e.preventDefault();
            const isAllValid = (values.firstName && values.lastName && values.email && values.message);
            // alert(JSON.stringify(values, null, 4));
            setFormPost({
                target: {name: "buttonHit", value: !isAllValid},
            });
            if(isAllValid) {
                sendMessage(values, ref, updateFormSubmitted);       
            }
    };

    // clear values once Form Submit response arrives back
    useEffect(()=>{
        if(isFormSubmitted===true) {
                setFormPost({
                    target: {name: "firstName", value: ""}
                });
                setFormPost({
                    target: {name: "lastName", value: ""}
                });
                setFormPost({
                    target: {name: "email", value: ""}
                });
                setFormPost({
                    target: {name: "message", value: ""}
                }); 
        }
    }, [isFormSubmitted])

    return (
        <div id="contact">
            <style jsx>{`
                background-color: #fff;
            `}
            </style>
            <h1 className="text-black text-center text-3xl font-bold pt-10 pb-5">CONTACT</h1>
            <p className="text-center mt-5">
            I'd love to hear from you! Fill out the form below, email me at toakhileshyadav@gmail.com, or find me on <a className="underline" href="https://twitter.com/arki7n">Twitter</a> or <a className="underline" href="https://github.com/arki7n">GitHub</a>.
            </p>
            <div className="flex place-content-center mt-10">
                <form id="formElem" className="w-full max-w-lg" ref={formRef}>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input value={values.firstName} name="firstName" onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.firstName) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder=""/>
                        {/* {Boolean(values.buttonHit && !values.firstName) && (<p  className="text-red-500 text-xs italic">Please fill out this field.</p>)} */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input value={values.lastName} name="lastName" onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.lastName) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="grid-last-name" type="text" placeholder=""/>
                        {/* {Boolean(values.buttonHit && !values.lastName) && <p className="text-red-500 text-xs italic">Please fill out this field.</p>} */}
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input value={values.email} name="email" onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.email) && 'border-red-500 '} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} id="email" type="email"/>
                        {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap  mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea value={values.message} name="message" onChange={setFormPost} className={` ${ Boolean(values.buttonHit && !values.message) && 'border-red-500 '} no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`} id="message"></textarea>                     
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        <button type="submit" onClick={(e)=>handleSubmit(e, formRef.current, updateFormSubmitted)} className="text-black shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="button">
                            Send
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                    {isFormSubmitted && (<p className="text-gray-600 text-sm italic mt-6 text-green-900 font-bold">Form has been submitted successfully. I will reach back to your shorty. </p>) }
                    
                    <div className="mt-4">&nbsp;</div>
                </form>
                </div>
                <style jsx>{`
                
                    #contact {
                        padding: 0 10%;
                    }

                `}</style>
        </div>

    )

}