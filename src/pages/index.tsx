import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenrePage from './Genre';
import BookListPage from './BookList';
import { useTheme } from "styled-components";

const Pages = () => {

    useTheme();
    return (
        <Router>
        <Routes>
          <Route path="/" element={<GenrePage />} />
          <Route path="/books/:genre" element={<BookListPage />} />
        </Routes>
      </Router>
    )
}

export  default Pages;