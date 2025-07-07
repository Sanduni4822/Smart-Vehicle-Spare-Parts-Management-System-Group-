
import React, { useState } from "react";
import NavBar from "./components/navigationbar/NavBar";
import Footer from "./components/footer/Footer";
import ShoppingCartDrawer from "./components/spareparts/shoppingcart/ShoppingCartDrawer";
import { currentProducts } from "./components/spareparts/ProductGridBakers";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handleSidebarToggle = () => setIsSidebarVisible(!isSidebarVisible);

  const product = currentProducts[0];
  const quantity = 1;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar handleSidebarToggle={handleSidebarToggle} />
      <main className="flex-grow">
        <AppRoutes /> 
      </main>
      <Footer />
      <ShoppingCartDrawer
        isSidebarVisible={isSidebarVisible}
        handleCloseSidebar={handleSidebarToggle}
        product={product}
        quantity={quantity}
      />
    </div>
  );
}

export default App;
