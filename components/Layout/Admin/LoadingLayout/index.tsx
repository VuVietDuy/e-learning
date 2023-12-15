'use client'
import React from "react";
import "./index.scss";

interface LoadingLayoutProps {
  children: React.ReactNode;
}

function LoadingLayout({children}: LoadingLayoutProps): JSX.Element {


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
