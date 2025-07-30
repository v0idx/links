import styles from "./page.module.css";

import { TwitterLogoIcon, ButterflyIcon, LastfmLogoIcon, GoogleChromeLogoIcon, SmileyIcon, TumblrLogoIcon} from "@phosphor-icons/react/ssr";

export default function Home() {
  return (
    <div className={styles.page}>      
      <div className={styles.infoPanel}>
        <div className="imageContainer">
          <img className="profileImage" src="lily.webp" />
        </div>
        <div className="infoText">
          <h1>Eloise</h1>
          <p>Developer |  Student  | Gremlin</p>
          <br/>
          <hr/>
          <p>Nord Colour Theme Enthusiast</p> 
        </div>
         
      </div>
      <main className={styles.main}>
        
        <h1 className="mainTitle">things that i have</h1>
        <ol>
          <li><a href="https://x.com/v0idx_"><TwitterLogoIcon /> my twitter</a></li>
          <li><a href="https://bsky.app/profile/v0idx.com"><ButterflyIcon /> my bluesky</a></li>
          <li><a href="https://v0idx.com"><GoogleChromeLogoIcon /> my website!!</a></li>
          <li><a href="https://en.pronouns.page/@v0idx"><SmileyIcon /> pronouns page</a></li>
          <li><a href="https://last.fm/user/v0idx"><LastfmLogoIcon /> last.fm!! see what i'm listening to</a></li>
        </ol>
        <h1>i write abt music (sometimes)</h1>
        <ol>
          <li><a href="https://tumblr.com/lily-likes-music"><TumblrLogoIcon /> da blog</a></li>
        </ol>
      </main>
      
    </div>
  );
}
