'use client';

import React, { useEffect } from "react";

export default function Metamask() {
  useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }

    //Button ID
    const connectButton = document.getElementById("connect");

    //Click Event
    connectButton.addEventListener("click", () => {
      connectAccount();
    });

    //Connect Account Function
    async function connectAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      connectButton.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    }
  }, []);

  return (
    <div className="text-black">
      <button id="connect" type="button" className="flex items-center h-fit py-4 px-6 bg-[#ffffff] rounded-[32px] gap-[12px]">
         Connect Wallet
      </button>
    </div>
  );
}