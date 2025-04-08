module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
        },
        'gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          400: '#9ca3af',
          600: '#4b5563',
          800: '#1f2937',
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}