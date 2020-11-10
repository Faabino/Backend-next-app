import { GetServerSideProps } from "next";

const category = ({ joke, error }) => {
  if (error) {
    return <h1>Page Not Found</h1>;
  } else {
    return <h1>{joke}</h1>;
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${context.params.category}`
  );
  if (!response.ok) {
    return {
      props: { error: true },
    };
  } else {
    const joke = await response.json();
    return {
      props: { joke: joke.value },
    };
  }
};

export default category;
