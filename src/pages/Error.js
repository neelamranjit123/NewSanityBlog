import React from "react";
import {Link} from "react-router-dom";
import 'tailwindcss/tailwind.css';

export default function Error() {
  return (
    <>
    <section className="flex items-center justify-center h-screen text-center px-5">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl mb-8">Oops! You found a page that doesn't exist.
        </h1>
        <p className="mb-8 bg-black">
          You seem to have discovered a page on our website that either doesn't 
        exist or may have moved.
        </p>

        <Link to="/" className="underline text-slate-600">Back to Haomepage</Link>
      </article>
    </section>
      
    </>
  )
}
