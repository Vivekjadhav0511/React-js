node_modules
dist
dist-ssr
package.json
package-lock.json
README.md
vite.config.js
.eslintrc.cjs
*.local

react_app:- npm create vite@latest

<!-- ++++++++++++++++++++++++++++++++++++++= -->

tailwind :- 

npm install -D tailwindcss
npx tailwindcss init



<!-- Add the paths to all of your template files in your tailwind.config.js file. -->

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


<!-- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. -->

@tailwind base;
@tailwind components;
@tailwind utilities;