import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "./Homepage.module.scss";

export default function Homepage(){
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.gallery}>
          <Gallery />
        </div>
      </main>
      <Footer /> 
    </>
  );
}