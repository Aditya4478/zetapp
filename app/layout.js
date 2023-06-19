import "../styles/app.css";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
  description: 'Site Creator @ditya'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
    <head>
      <title>ZET : Become a Certified Financial Advisor and Earn Big</title>
    </head>
      <body>
        <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
