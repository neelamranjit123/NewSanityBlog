import React, {useState, useEffect} from 'react';
import Newsletter from "../components/Newsletter";
import Profile from "../components/Profile";
import Footer from '../components/Footer';
import {client} from "../lib/client";
import {format} from "date-fns";
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Logout from './Logout';







export default function Homepage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
    )
    .then((data) => {
      setStories(data.slice(0, 3));      
    })
    .catch(console.error);
  }, [])

  return (
    <>
      {stories[0] && ( 
      <Link to={`/blog/${stories[0].slug.current}`}>
        <section className="max-w-7xl mx-auto my-20 px-5">
          <article className="relative flex flex-col md:flex-row">
            {stories[0].mainImage && 
              <img 
                src={stories[0].mainImage.asset.url} 
                alt={stories[0].mainImage.alt}
                className="h-96 w-full object-cover rounded-2xl"
              />
            }
            <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl lg:text-5xl mb-6 text-white">
              {stories[0].title}
              </h1>
            <p className="text-slate-100 mb-8 md:w-1/2">
              {`${stories[0].body[0].children[0].text.substring(0, 200)}...`}
              </p>
            <Link to={`/blog/${stories[0].slug.current}`} 
            className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide 
            hover:opacity-75 transition-allduration-200">
              Read more
            </Link>
            </div>
          </article>
        </section>   
      </Link>
      )
      }  

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10">
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
            <article className="border border-slate-400 rounded-lg overflow-hidden hover:bg-slate-200 transition-all duration-200 h-full">
              {story.mainImage && (                 
                <img 
                  src={story.mainImage.asset.url} 
                  alt={story.mainImage.alt}
                  loading="lazy"
                  className="object-cover w-full h-60"
                />              
            )}
              <div className="p-4">
              <p className="text-black text-sm">
                By {story.name} : {format(new Date(story.publishedAt), "dd MMMM yyyy")}
              </p>
              <h2 className="text-xl my-2">{story.title}</h2>
              <p className="text-black text-sm leading relaxed">              
              {`${story.body[0].children[0].text.substring(0, 200)}...`}
              </p>
              </div>         
            </article>
          </Link>
        ))}          
      </section>      

      <div className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end">
        <Link to="/blog"
        className="bg-gray-500 py-2 px-8 rounded shadow text-slate-00 tracking-wide 
          hover:opacity-75 transition-allduration-200">
          Read All Blog Posts
        </Link>
      </div>
      
      <Newsletter />
      <Profile />
      <Footer />
      <Logout />
      
    </>
  )
  
}