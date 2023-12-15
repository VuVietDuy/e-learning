'use client'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import "./index.scss";

interface LoadingLayoutProps {
  children: React.ReactNode;
}

function LoadingLayout({children}: LoadingLayoutProps): JSX.Element {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  console.log(loading);
  useEffect(() => {
    const handleStart = (url: string): void | boolean =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string): void | boolean =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div className="loading-layout">
      {/* {loading && ( */}
      {/*  <div className="loading-layout-content"> */}
      {/*    <Icon icon="Logo_Visang" size={300} className="logo" /> */}
      {/*    <LoadingGlobal size="large" /> */}
      {/*  </div> */}
      {/* )} */}
      {children}
    </div>
  );
}

export default LoadingLayout;
