import React from 'react'

function Footer() {
  return (
        <footer className="bg-white shadow-inner p-6 text-center mt-12">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Ned Mwanza. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
