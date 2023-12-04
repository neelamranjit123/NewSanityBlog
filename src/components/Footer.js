import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Footer() {
  return (
    <>
        <footer className="border-slate-400 max-w-7xl mx-auto py-10 flex items-center justify-center text-center flex-col">
            <h3>Share on social media.</h3>
            <ul className="text-sm text-slate-600 mt-4 flex items-center justify-center flex-wrap gap-4">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>                
            </ul>
        </footer>
      
    </>
  )
}
