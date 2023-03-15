import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/joao.jpg"
          alt="Joao image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm João Almeida</h1>
      <p>I blog about web development! Especially about frontend frameworks!</p>
    </section>
  );
}

export default Hero;
