
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navigationbar/NavBar';
import Footer from './components/footer/Footer';
import ShoppingCartDrawer from './components/spareparts/shoppingcart/ShoppingCartDrawer';
import { currentProducts } from './components/spareparts/ProductGridBakers';
import AppRoutes from './routes/AppRoutes'; 

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handleSidebarToggle = () => setIsSidebarVisible(!isSidebarVisible);

  const product = currentProducts[0];
  const quantity = 1;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar handleSidebarToggle={handleSidebarToggle} />
        <main className="flex-grow">
          <AppRoutes /> {/* <-- using extracted routes */}
        </main>
        <Footer />
        <ShoppingCartDrawer
          isSidebarVisible={isSidebarVisible}
          handleCloseSidebar={handleSidebarToggle}
          product={product}
          quantity={quantity}
        />
      </div>
    </Router>
  );
}

export default App;
