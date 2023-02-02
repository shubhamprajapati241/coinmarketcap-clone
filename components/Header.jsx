import React from "react";
import Image from "next/image";
import logo from "../assets/logo2.png";
import Search from "../assets/svg/search";
import { ConnectButton } from "web3uikit";

const styles = {
  header:
    "bg-[#17171A] text-white h-auto flex gap-[100px] w-full p-[20px] object-contain",
  headerWrapper: "flex justify-center h-full max-w-screen-xl mx-auto",
  nav: "flex justify-center items-center gap-[15px]",
  navItem: "relative mr-1 cursor-pointer hover:opacity-40 text-md",
  navLink: "text-white mx-[10px]",
  badge:
    "rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4",
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src={logo} alt="logo" width={180} height={100} />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Crptocurrencies</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptotown</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className="navLink ">Community</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>

        <div className="flex items-center">
          <ConnectButton />
          {/* <div className="inputContainer flex item-center justify-center p-2 rounded bf-[#171924]">
            <Search />

            <input
              type="text"
              className="bg-transparent outline-none text-white w-70 ml-3"
              placeholder="Search"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
