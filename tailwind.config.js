/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
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
        'dr-border-primary': 'var(--ai-border-primary)',
        'dr-border-secondary': 'var(--ai-border-secondary)',
        'dr-border-input': 'var(--ai-border-input)',
        'dr-border-hover': 'var(--ai-border-hover)',
        'dr-bg-primary': 'var(--ai-bg-primary)',
        'dr-text-primary': 'var(--ai-text-primary)',
        'dr-text-label-mobile': 'var(--ai-text-input-label-mobile)'
      },
      fontSize: {
        '3xl': ['2rem', '2.5rem'],
        xxs: ['0.625rem', '0.875rem']
      }
    }
  },
  plugins: []
}