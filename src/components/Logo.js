import React from 'react'

function Logo() {
  return (
    <div 
      className='w-24 h-14 justify-center items-center flex py-0 my-0'
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <img 
        className="lazyautosizes ls-is-cached lazyloaded" 
        data-widths="[180,360,540,720,900,1080,1200]" 
        data-sizes="auto" 
        tabIndex="-1" 
        alt="Banana Republic Home" 
        data-srcset="//brhome.com/cdn/shop/files/NEW_BR-HOME_180x.svg?v=1708646601 180w, //brhome.com/cdn/shop/files/NEW_BR-HOME_360x.svg?v=1708646601 360w, //brhome.com/cdn/shop/files/NEW_BR-HOME_540x.svg?v=1708646601 540w, //brhome.com/cdn/shop/files/NEW_BR-HOME_720x.svg?v=1708646601 720w, //brhome.com/cdn/shop/files/NEW_BR-HOME_900x.svg?v=1708646601 900w, //brhome.com/cdn/shop/files/NEW_BR-HOME_1080x.svg?v=1708646601 1080w, //brhome.com/cdn/shop/files/NEW_BR-HOME_1200x.svg?v=1708646601 1200w" 
        sizes="130px" 
        srcSet="//brhome.com/cdn/shop/files/NEW_BR-HOME_180x.svg?v=1708646601 180w, //brhome.com/cdn/shop/files/NEW_BR-HOME_360x.svg?v=1708646601 360w, //brhome.com/cdn/shop/files/NEW_BR-HOME_540x.svg?v=1708646601 540w, //brhome.com/cdn/shop/files/NEW_BR-HOME_720x.svg?v=1708646601 720w, //brhome.com/cdn/shop/files/NEW_BR-HOME_900x.svg?v=1708646601 900w, //brhome.com/cdn/shop/files/NEW_BR-HOME_1080x.svg?v=1708646601 1080w, //brhome.com/cdn/shop/files/NEW_BR-HOME_1200x.svg?v=1708646601 1200w"
      >
      </img>
    </div>
  )
}

export default Logo
