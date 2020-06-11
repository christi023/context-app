import React from 'react';
// Component
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import PageContent from './Components/PageContent/PageContent';
// contexts
import ThemeProvider from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}
