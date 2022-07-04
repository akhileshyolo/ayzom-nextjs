import { useState, useEffect } from 'react';

// This function gets called at build time
export async function getAPIData() {
    // context has params,locale
    // Call an external API endpoint to get posts
  
    const res = await fetch("https://api.hashnode.com/", {
      "headers": {
        "content-type": "application/json",
      },
      "body": "{\"operationName\":null,\"variables\":{},\"query\":\"{\\n  user(username: \\\"arki7n\\\") {\\n    publication {\\n      posts(page: 0) {\\n        title\\n        brief\\n        slug\\n        cuid\\n        coverImage\\n        dateAdded\\n      }\\n    }\\n  }\\n}\\n\"}",
      "method": "POST"
    });
    const postsData = await res.json()
  
    if (!postsData) {
      return {
        notFound: true,
      }
    }
  
    const {data: {user: {publication: posts}}} = postsData;
  
    console.log(JSON.stringify(posts));
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return Promise.resolve({
        blog: posts
    });
  }


  
export default function Blog() {
    const [content, setData] = useState({});
    const [isUpdated, setUpdate] = useState(false);

    if(!isUpdated) {
      getAPIData().then(res=> {        
          setUpdate(true);
          setData(res.blog.posts);
      })
    }

    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return (
        <div>
            <div className="custom-width mt-20">
                <h1 className="text-3xl">Awesome Articles</h1>
                <div className="band pt-16">
                    {content.length && content.map((post, index) => (
                        <div className={"item-"+(index+1)} key={index}>
                            <a href={"https://blog.ayzom.com/"+post.slug} className="card">
                            <div className="thumb" style={{
                                backgroundImage: "url("+ post.coverImage +")"
                            }}></div>
                            <article>
                                <h1>{post.title} </h1>
                                <span>{new Date(post.dateAdded).toLocaleDateString('en-US', options)}</span> 
                            </article>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        <style jsx>{`
          width: 100%;
          .custom-width {
            padding-left: 10%;
            padding-right: 10%;
          }

          .band {
              width: 90%;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: auto;
              grid-gap: 20px;
            }
            @media (min-width: 30em) {
              .band {
                grid-template-columns: 1fr 1fr;
            }
            }
            @media (min-width: 60em) {
              .band {
                grid-template-columns: repeat(4, 1fr);
            }
            }
            .card {
              background: white;
              text-decoration: none;
              color: #444;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              display: flex;
              flex-direction: column;
              min-height: 100%;
              position: relative;
              top: 0;
              transition: all 0.1s ease-in;
            }
            .card:hover {
              top: -2px;
              box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
            }
            .card article {
              padding: 20px;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .card h1 {
              font-size: 20px;
              margin: 0;
              color: #333;
            }
            .card p {
              flex: 1;
              line-height: 1.4;
            }
            .card span {
              font-size: 12px;
              font-weight: bold;
              color: #999;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin: 2em 0 0 0;
            }
            .card .thumb {
              padding-bottom: 60%;
              background-size: cover;
              background-position: center center;
            }
            @media (min-width: 60em) {
              .item-1 {
                grid-column: 1 / span 2;
            }
              .item-1 h1 {
                font-size: 24px;
            }
            }
            


        `}
        </style>

        </div>
    )
}
