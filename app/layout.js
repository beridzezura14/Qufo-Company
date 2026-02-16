import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Concrete",
  description: "ბეტონის პროდუქცია"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}