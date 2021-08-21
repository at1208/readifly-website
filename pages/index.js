import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Readifly Technologies</title>
        <meta
          name="description"
          content="Virtual reading space for readers like you.More than 2,00,000 organic visitors till date."
        />
        <link rel="canonical" href={`http://www.readifly.com`} />
        <meta property="og:title" content={`Readifly Technologies`} />
        <meta
          property="og:description"
          content="Virtual reading space for readers like you.More than 2,00,000 organic visitors till date."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://www.readifly.com`} />
        <meta property="og:site_name" content={`Readifly Technologies`} />
        <meta property="og:image" content={`/readifly-logo.svg`} />
        <meta property="og:image:secure_url" content={`/readifly-logo.svg`} />
        <meta property="og:image:type" content="image/jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.screen1}>
        <div className={styles.header}>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container>
                <Grid item>
                  <img
                    src="/readifly-logo.svg"
                    width={80}
                    height={80}
                    className={styles.logo}
                  />
                </Grid>
                <Grid item>
                  <div className={styles.name}>Readifly</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={styles.hiring}>We're hiring.</div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.tagline}>
          virtual reading space for readers like you.
        </div>
        <div className={styles.subTagline}>
          more than 2,00,000 organic visitors till date.
        </div>
      </main>

      <div className={styles.domains}>
        <a
          href="http://travlojournal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="travlojournal.svg" width={120} height={120} />
        </a>
        <a href="http://artoftalk.in" target="_blank" rel="noopener noreferrer">
          <img src="artoftalk.svg" width={130} height={120} />
        </a>
        <a
          href="http://geeksocean.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="geeksocean.svg" width={90} height={120} />
        </a>
        <a href="http://vedifly.com" target="_blank" rel="noopener noreferrer">
          <img src="vedifly.svg" width={130} height={120} />
        </a>
        <a
          href="http://elitegamezone.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="elitegamezone.svg" width={150} height={120} />
        </a>
      </div>

      <main className={styles.screen2}>
        <div className={styles.tagline2}>we take your interest seriously.</div>
        <div className={styles.tagline3}>so that you don't worry.</div>
        <div className={styles.description}>
          every genre you love, health & lifestyle, public speaking, gaming,
          travelling, science, fashion and many more.
        </div>
      </main>

      <footer className={styles.footer}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className={styles.contact}>contact us at hr@readifly.com</div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className={styles.copyright}>
              copyright © 2021 Readifly Technologies.
            </div>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
