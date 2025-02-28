import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigationBar />
    </>
  );
}
