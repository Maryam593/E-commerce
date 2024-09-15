import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const MediaIcons = () => {
  return (
    <div className="flex space-x-4 mb-6">
          <a href="https://facebook.com" target="_blank" className="hover:text-orange-500">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-orange-500">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-orange-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-orange-500">
            <FaLinkedinIn size={20} />
          </a>
        </div>
  )
}

export default MediaIcons
