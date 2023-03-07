import Navbar from "./Navbar";
const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Navbar locales={locales} locale={locale} defaultLocale={defaultLocale} />
    {children}
  </div>
);
export default Layout;
