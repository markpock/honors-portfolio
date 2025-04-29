export default {
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.white'),
                textDecoration: 'underline',
              },
            },
            h1: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.serif')
            },
            h2: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.serif')
            },
            h3: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.serif')
            },
            h4: {
              color: theme('colors.white'),
              fontFamily: theme('fontFamily.serif')
            },
            strong: {
              color: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.white'),
              borderLeftColor: theme('colors.white/30'),
            },
            code: {
              color: theme('colors.white'),
            },
            figcaption: {
              color: theme('colors.white/70'),
            },
            hr: {
              borderColor: theme('colors.white/20'),
            },
          },
        },
      }),
    }
  }
}