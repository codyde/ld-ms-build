import React, { useState } from "react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import { fadeInUp, rollIn, zoomInDown, zoomInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import toast, { Toaster } from "react-hot-toast";
import AppArch from "./appArch.js";
import { useFlags } from "launchdarkly-react-client-sdk";


export default function Banner() {
  const { newText } = useFlags();
  return (
    <div>
      <div className="grid shadow-2xl bg-ldgray p-10 lg:px-28 py-8">
        <img
          className="mx-auto max-h-30"
          src="./ld-white-wide.png"
          alt="launch-darkly"
        />
        {newText ?
        <div className="mx-auto py-4 text-2xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-ldyellow to-lddblue text-center italic">
          Running in Azure Kubernetes Service!
        </div>
        : null}
      </div>
    </div>
  );
}
