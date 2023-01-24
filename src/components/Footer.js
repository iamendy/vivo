import React from 'react';

const Footer = () => {
  return (
    <div className="container flex flex-col items-center space-y-5 py-6 md:flex-row md:justify-between">
      <p className="text-gray text-xs text-center">copyright by vivo protocols. All rights reserved.</p>

      <img src="/img/logo.svg" alt="logo"/>

      <div className="social flex">
        <a href="#"> <img src="/img/twitter.png" alt=""/></a>
        <a href="#"> <img src="/img/discord.png" alt=""/></a>
        <a href="#"> <img src="/img/reddit.png" alt=""/></a>
        <a href="#"> <img src="/img/telegram.png" alt=""/></a>
        <a href="#"> <img src="/img/medium.png" alt=""/></a>
      </div>
    </div>
  );
};

export default Footer;
