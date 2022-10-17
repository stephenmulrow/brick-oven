import React, { useState } from "react"
import Navigation from "./Navigation"
import Owner from "./pages/Owner"
import Chef from "./pages/Chef"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';




export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Owner');


  const renderPage = () => {
    if (currentPage === 'Owner') {
      return <Owner />;
    }
    if (currentPage === 'Chef') {
      return <Chef />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div>
      <Navigation currentPage={currentPage}
      handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )
}