import React from 'react';
import {GrLinkedin} from 'react-icons/gr';
import {FaTwitter, FaGithub} from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

export default function Profile() {
  return (
    <>
      <div className="max-w-sm mx-auto my-20 grid grid-cols-1 gap-8 bg-white md:grid-cols-2 
      rounded-lg shadow-lg md:place-items-center overflow-hidden" >
        <article>
            <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?
            auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Neelam Ranjit"/>
        </article>

        <article className="md:pr-8">
            <h3 className="text-2xl mb-4">Neelam Ranjit</h3>
            <p className="text-black text-xl">
                Is a Website developer and software developer.
            </p>

            <ul className="flex items-center justify-start gap-4 mt-8">
                <li>
                    <GrLinkedin className="text-2xl text-slate-600"/>
                </li>
                <li>
                    <FaTwitter className="text-2xl text-slate-600"/>
                </li>
                <li>
                    <FaGithub className="text-2xl text-slate-600"/>
                </li>
                
            </ul>
        </article>
      </div>
    </>
  )
}
