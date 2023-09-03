/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    screens: {
      "sm": "320px", // small mobile
      "mm": "426px", // medium mobile
      "lm": "600px", // large mobile
      "mt": {"max": "768px"}, // medium tablet
      "lt": "769px", // large tablet 
      "xt": {"max": "900px"}, // extra large tablet
      "md": "901px", // medium desktop
      "ld": {"max": "1024px"}, // large desktop
      "xd": "1025px", // extra large desktop
      "xxd": "1536px", // 2x large desktopZ
    },

    extend: {
      fontSize: {
        "scales-xtiny": "0.5rem", // 8px
        "scales-tiny": "0.625rem", // 10px
        "scales-caption": "0.75rem", // 12px
        "scales-body": "0.875rem", // 14px
        "scales-default": "1rem", // 16px
        "scales-large": "1.125rem", // 18px
        "scales-xlarge": "1.25rem", // 20px
        "scales-2xlarge": "1.5rem", // 24px
        "scales-3xlarge": "1.875rem", // 30px
        "scales-4xlarge": "3.75rem", // 60px
        "arbitary-1": "0.8125rem", // 13px
        "arbitary-2": "1.0625rem", // 17px
        "arbitary-3": "1.5625rem", // 25px
        "arbitary-4": "1.3125rem", // 21px
        "arbitary-5": "1.6875rem" // 27px
      },

      lineHeight: {
        "lineHeight-primary": "1",
        "lineHeight-secondary": "1.3",
        "lineHeight-title": "1.2"
      },

      colors: {
        "surface-main": "#e94560",
        "surface-light": "#ffe1e6",
        "accent-main": "#0f3460",
        "accent-light": "#aeb4be",
        "accent-dark": "#0c2a4d",
        "accent-active": "#2b3445",
        "accent-alpha-dark": "#373f50",
        "white-light": "#f3f5f9",
        "white2": "#f6f6f6",
        "white3": "#f6f9fc",
        "white4": "#f6f9fc",
        "gray-dark": "#222222",
        "gray1": "#7d879c",
        "gray2": "#dae1e7",
        "gray3": "#dfe3eb",
      },

      backgroundImage: {
        'banner-15': 'url(/assets/images/banners/banner-15.jpg)',
        'banner-21': 'url(/assets/images/banners/banner-21.jpg)',
        'banner-22': 'url(/assets/images/banners/banner-22.jpg)',
        'long-banner': 'url(/assets/images/banners/long-banner.jpg)'
      },

      backgroundColor: {
        'white-shadow': 'rgba(255, 255, 255, 0.67)',
        'modal-overlay': 'rgba(0, 0, 0, 0.53)'
      },

      backgroundPosition: {
        'left-center': 'left center',
      },

      boxShadow: {
        'shadows-card': '0px 1px 3px rgba(3, 0, 71, 0.09)',
        'shadows-navbar': '0px 4px 16px rgba(43, 52, 69, 0.1)',
        'shadows-category': 'rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.042) 0px 3px 4px 0px, rgba(0, 0, 0, 0.036) 0px 1px 8px 0px',
        'shadows-all-category': 'rgba(0, 0, 0, 0.16) 0px 6px 12px'
      }
    },
  },
  plugins: [],
}
