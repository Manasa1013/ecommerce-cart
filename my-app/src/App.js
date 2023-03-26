import { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { useToast } from "./Contexts/ToastContext";
import { Toast } from "./Components/Toast/Toast";

export default function App() {
  const { toast, setToast, hideToastBar } = useToast();
  useEffect(() => {
    const fetchProducts = async () => {
      let data = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => console.log(json));
      console.log(data);
    };
    fetchProducts();
  });
  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToastBar]);

  return (
    <div className="App">
      <Navbar />

      <Toast />
    </div>
  );
}
