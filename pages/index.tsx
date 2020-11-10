import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import Link from "next/link";

const Home: React.FC<{ categories: [] }> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
      <ul>
        {categories.map((category, i) => {
          return (
            <li key={i}>
              <Link href={"/categories/" + category}>
                <a>{category}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await response.json();

  return {
    props: {
      categories: categories,
    },
  };
};

export default Home;
