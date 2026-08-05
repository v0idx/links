import styles from "./page.module.css";

import { EnvelopeSimpleIcon, GithubLogoIcon, ButterflyIcon, LastfmLogoIcon, GoogleChromeLogoIcon, SmileyIcon, TumblrLogoIcon, InstagramLogoIcon} from "@phosphor-icons/react/ssr";

export default function Home() {
  return (
    <div className={styles.page}>      
      <div className={styles.infoPanel}>
        <div className="imageContainer">
          <img className="profileImage" src="lily.webp" />
        </div>
        <div className="infoText">
          <h1>Eloise</h1>
          <p>Developer  |  Linux Enjoyer  |  Cretin</p>
          <br/>
          <hr/>
          <p>Everforest Colour Theme Enthusiast</p> 
        </div>
         
      </div>
      <main className={styles.main}>
        
        <h1 className="mainTitle">socials that i use</h1>
        <ol>
          <li><a href="https://instagram.com/v0idx_x"><InstagramLogoIcon /> my instagram</a></li>
          <li><a href="https://bsky.app/profile/v0idx.com"><ButterflyIcon /> my bluesky</a></li>
          <li><a href="https://v0idx.com"><GoogleChromeLogoIcon /> portfolio website!! (in redevelopment)</a></li>
          <li><a href="https://en.pronouns.page/@v0idx"><SmileyIcon /> pronouns page</a></li>
          <li><a href="https://last.fm/user/v0idx"><LastfmLogoIcon /> last.fm!! see what i'm listening to</a></li>
        </ol>
        <h1>i write abt music (sometimes)</h1>
        <ol>
          <li><a href="https://tumblr.com/lily-likes-music"><TumblrLogoIcon /> da blog</a></li>
        </ol>
      <h1 className="mainTitle">development / contact</h1>
      <ol>
        <li><a href="https://github.com/v0idx"><GithubLogoIcon /> github</a></li>
        <li><a href="mailto:contact@v0idx.com"><EnvelopeSimpleIcon /> email me!</a></li>
      </ol>
      </main>
    </div>
  );
}
