import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";


import MintCard from "../components/MintCard";
import MintCardq from "../components/MintCardq";
import MintCardw from "../components/MintCardw";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    
    
    <div className={styles.container}>
      <div>
        <Navbar/>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://startech.vc/ru">StarTech VC и</a> <a href="muivlab.ru">MUIV LAB</a>
          <p className="text-slate-200"> Представляют  </p>
        </h1>

        <p className={styles.description}>
          30 Октября 2022 год вечеринка Hell & Win
          
        </p>

  
        <div className={styles.grid}>
          <a>
           <MintCard/>
          </a>

          <a>
            <MintCardq/>
          </a>

          <a>
           <MintCardw/>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
