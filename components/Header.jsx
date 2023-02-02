import React from "react";
import Image from "next/image";
import logo from "../assets/logo2.png";
import Search from "../assets/svg/search";

const styles = {
  header:
    "bg-[#17171A] text-white h-auto flex gap-[100px] w-full p-[30px] object-contain",
  headerWrapper: "flex justify-center h-full max-w-screen-xl mx-auto px-4",
  nav: "flex justify-center items-center gap-[20px]",
  navItem: "relative mr-1 cursor-pointer hover:opacity-40",
  badge:
    "rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4",
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src={logo} alt="logo" width={220} height={220} />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className="navLink ">Crptocurrencies</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className="navLink ">Exchanges</div>
          </div>

          <div className={styles.navItem}>
            <div className="navLink ">NFT</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className="navLink ">Cryptotown</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className="navLink ">Community</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className="navLink ">Products</div>
            <div className={styles.badge}></div>
          </div>

          <div className={styles.navItem}>
            <div className="navLink ">Learn</div>
          </div>
        </nav>

        <div className="flex items-center">
          {/* <ConnectButton /> */}
          <div className="inputContainer flex item-center justify-center p-2 rounded bf-[#171924]">
            <Search />

            <input
              type="text"
              className="bg-transparent outline-none text-white w-70 ml-3"
              placeholder="Search asset name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
