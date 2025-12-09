/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* soft-rose-gold-30 */
        input: "var(--color-input)", /* soft-rose-gold-30 */
        ring: "var(--color-ring)", /* deep-rose */
        background: "var(--color-background)", /* pure-white */
        foreground: "var(--color-foreground)", /* charcoal */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep-rose */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* soft-rose-gold */
          foreground: "var(--color-secondary-foreground)", /* charcoal */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* blush-pink */
          foreground: "var(--color-accent-foreground)", /* charcoal */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* warm-gray */
          foreground: "var(--color-surface-foreground)", /* charcoal */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* warm-light-gray */
          foreground: "var(--color-muted-foreground)", /* medium-gray */
        },
        card: {
          DEFAULT: "var(--color-card)", /* pure-white */
          foreground: "var(--color-card-foreground)", /* charcoal */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* pure-white */
          foreground: "var(--color-popover-foreground)", /* charcoal */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* deep-dusty-rose */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* muted-rose */
          foreground: "var(--color-success-foreground)", /* charcoal */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* dusty-rose */
          foreground: "var(--color-warning-foreground)", /* charcoal */
        },
        error: {
          DEFAULT: "var(--color-error)", /* deep-dusty-rose */
          foreground: "var(--color-error-foreground)", /* white */
        },
        text: {
          primary: "var(--color-text-primary)", /* charcoal */
          secondary: "var(--color-text-secondary)", /* medium-gray */
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'subhero': ['24px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'base': 'var(--spacing-base)',
        '13': '13px',
        '21': '21px',
        '34': '34px',
        '55': '55px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'brand': '0 8px 32px rgba(244, 194, 194, 0.15)',
        'brand-hover': '0 20px 40px rgba(244, 194, 194, 0.3)',
        'soft': '0 4px 20px rgba(192, 132, 151, 0.1)',
        'float': '0 15px 35px rgba(244, 194, 194, 0.4)',
      },
      backgroundImage: {
        'gradient-rose': 'linear-gradient(135deg, rgba(244, 194, 194, 0.9) 0%, rgba(255, 182, 193, 0.7) 50%, rgba(212, 165, 165, 0.8) 100%)',
        'gradient-rose-overlay': 'linear-gradient(180deg, rgba(244, 194, 194, 0.1) 0%, rgba(255, 182, 193, 0.05) 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'confident': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}