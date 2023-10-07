import { useEffect } from 'react'
import "../styles/globals.css";
import Layout from '../components/layout'
import TGbot from '../components/tgbot'

const publicVapidKey = "BHJLAPYKNyifC6Fz3KVihUxlimbzLWwQwmVFJRaMkgbSkjSIajpNJTwCfH91_wIPgNKczT9h2Y3EkFjvK_IkmJA";


export default function MyApp({ Component, pageProps }) {

  useEffect(() => {

    async function registerServiceWorker() {
      const register = await navigator.serviceWorker.register('./worker.js', {
          scope: '/'
      });
    
      const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: publicVapidKey,
      });
    
      // Payload contains
      /**
      
      {
          "endpoint":"https://fcm.googleapis.com/fcm/send/ddv9SwJgXY0:APA91bG-wJe4Nmv_ZZ8TmjJcF0ciUT-jXWVtIIA7bLO--CjadVUmcAavbrbrM6JbpmxsCyEidHlHhto9yluFg30H0PazOHSIRAaE6uo0y93eGbxwQJ--HjYM5syQJqiNnv9HNX9Cu49d",
          "expirationTime":null,
          "keys":{"p256dh":"BJIzQTb5rEweVKahiTOCtmCYxr3JMv7bV6wbg8fFgMMRk3K7Ah9SxvB2jkWOiM7OCwKvZyESD9sHCBkoqq009wI","auth":"9KToshlqvyovyXgd6YWnAg"}
      }
       */
      if(indexedDB) {
        const request = window.indexedDB.open('MyDatabase', 1);
        let db;
        // Event handling
          request.onerror = (e) => {
              console.error(`IndexedDB error: ${request.errorCode}`);
          };
      
          request.onsuccess = (e) => {
              console.info('Successful database connection');
              db = request.result;
          };
      
          request.onupgradeneeded = (e) => {
              console.info('Database created');
              db = request.result;
              //...
          };
        
      }


    
      await fetch("/api/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
              "Content-Type": "application/json",
          }
      })
    }

    if('serviceWorker' in navigator) {
      console.log("Worker registered");
      registerServiceWorker();
      //send().catch(console.log)
    }
  })

  return (
    <Layout>
      <TGbot></TGbot>
      <Component {...pageProps} />
    </Layout>
  )
}