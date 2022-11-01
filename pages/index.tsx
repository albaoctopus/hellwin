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
          <a href="https://startech.vc/ru">StarTech VC </a> и <a href="muivlab.ru">MUIV LAB</a>
          <p className="text-slate-200"> представляют  </p>
        </h1>

        <a  className={styles.card}>
            <h2>Праздник закончился, но чудеса продолжаются! </h2>
            <p>
              На нашей вечеринки было три темы. "Какие скелеты в гараже? Культура в компании". "Ночной кошмар или эликсир жизни?" "Страх и ненависть в digital-маркетинге. Ужасные истории из работы с клиентами".

              
              И по этим темам мы cоздали НФТ. Выпущены они в сети Polygon. Ограниченным тиражом, каждая по 50 экземпляров.
              Получить вы их можете бесплатно, заплатив только за транзакцию. 
              
            </p>
          </a>

  
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
      <div
  className="mt-20  text-center text-white-700 p-4 bg-gradient-to-r from-[#892afe] 66% via-[#ff2366] 33% to-[#B9261C]"
  
>
  
  <a className="pl-2 self-center text-3xl font-bold whitespace-nowrap text-white">
  created by  a:tereta
  </a>
</div>
    </div>
  );
};

export default Home;
