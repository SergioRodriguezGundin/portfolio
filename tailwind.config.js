export default {
  content: ['./src/**/*.{js,ts,astro}'],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
    extend: {
      // Design system tokens (docs/design-system/tokens.json via src/styles/tokens.css).
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-sans)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
        12: 'var(--space-12)',
      },
      boxShadow: {
        hard: 'var(--shadow-hard)',
        'hard-lift': 'var(--shadow-hard-lift)',
        none: 'var(--shadow-none)',
      },
      fontSize: {
        'display-xl': ['67px', { lineHeight: '1.02', letterSpacing: '-0.031em', fontWeight: '400' }],
        'display-l': ['51px', { lineHeight: '1.02', letterSpacing: '-0.031em', fontWeight: '400' }],
        h1: ['38px', { lineHeight: '1.02', letterSpacing: '-0.031em', fontWeight: '400' }],
        h2: ['28px', { lineHeight: '1.02', letterSpacing: '-0.031em', fontWeight: '400' }],
        h3: ['21px', { lineHeight: '1.02', letterSpacing: '-0.031em', fontWeight: '400' }],
        'body-l': ['21px', { lineHeight: '1.48', letterSpacing: '-0.002em' }],
        body: ['16px', { lineHeight: '1.48', letterSpacing: '-0.002em' }],
        label: ['13px', { lineHeight: '1.3', letterSpacing: '0.007em', fontWeight: '500' }],
      },
      colors: {
        paper: { DEFAULT: 'var(--paper)', tint: 'var(--paper-tint)' },
        night: 'var(--night)',
        'tennis-ball': { DEFAULT: 'var(--tennis-ball)', tint: 'var(--tennis-ball-tint)' },
        ultramarine: 'var(--ultramarine)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        accent: 'var(--accent)',
        link: 'var(--link)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        button: 'var(--radius-button)',
        sticker: 'var(--radius-sticker)',
        round: 'var(--radius-round)',
      },
    },
  },
};
