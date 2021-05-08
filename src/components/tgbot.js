import { useEffect } from 'react';



export default function TGbot() {
    
    const url = "https://ayzom.com/js/telegram.js";
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        //script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, [url]);

    return (
        <tg-chat name="world"></tg-chat>
    );
}