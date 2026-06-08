/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        // font-display -> premium serif headings (matches --serif in main.css)
        display: ['Newsreader', 'Georgia', 'serif'],
        // font-body -> soft geometric sans (matches --sans in main.css)
        body: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        // make `font-sans` (Tailwind's default body font) resolve to the same stack
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif']
      }
    }
  }
}
