/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    screens: {
      'sm': {
        'max': '639px'
      },
    },
    extend: {
      colors: {
        primary: 'var(--ai-color-primary)',
        secondary: 'var(--ai-text-secondary)',
        hyperlink: 'var(--ai-text-hyperlink)',
        error: 'var(--ai-color-error)',
        hover: 'var(--ai-color-primary)',
        tab: 'var(--ai-text-tab)',
        placeholder: 'var(--ai-text-placeholder)',
        'cex-border-primary': 'var(--ai-border-primary)',
        'cex-border-secondary': 'var(--ai-border-secondary)',
        'cex-border-input': 'var(--ai-border-input)',
        'cex-border-hover': 'var(--ai-border-hover)',
        'cex-bg-primary': 'var(--ai-bg-primary)',
        'cex-text-primary': 'var(--ai-text-primary)',
        'cex-text-label-mobile': 'var(--ai-text-input-label-mobile)',
        'blue-500': 'linear-gradient(184.5deg, rgb(38, 221, 249) 2.88%, rgb(0, 176, 203) 76.95%)'
      },
      fontSize: {
        '3xl': ['2rem', '2.5rem'],
        xxs: ['0.625rem', '0.875rem']
      }
    }
  },
  plugins: []
}