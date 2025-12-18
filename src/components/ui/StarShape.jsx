import React from 'react'

const StarShape = ({ className }) => {
  return (
      <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          className={className}
      >
          {/* This path creates the smooth inward curves */}
          <path d="M50 0C53 35 65 47 100 50C65 53 53 65 50 100C47 65 35 53 0 50C35 47 47 35 50 0Z" />
      </svg>
  )
}

export default StarShape