<div align="center">

  <img src="./public/logo.png" alt="logo" width="230" height="auto" />
  
  <h1>RapidReel - Rapid Faceless Content Creation!</h1>
  
  <p>
Full Stack Content Creation Platform with REACT.JS! (Next.js, Tailwind CSS, Video Uploading, Google Authentication, Creator Network, 6-Module System)
  </p>
  
  
<!-- Badges -->

![](https://img.shields.io/badge/Maintained-Yes-indigo)
![](https://img.shields.io/badge/Status-Active-success)
![](https://img.shields.io/badge/License-MIT-blue)
![](https://img.shields.io/badge/Platform-Vercel-black)

   
<h4>
    <a href="https://rapidreel.wizdevtech.com">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Wiz-DevTech/rapidreel/blob/main/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Wiz-DevTech/rapidreel/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Wiz-DevTech/rapidreel/issues">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->
## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center">
<a href="https://rapidreel.wizdevtech.com" target="_blank"><img width='800'  src='https://user-images.githubusercontent.com/99184393/199413058-3c4720d3-a24d-45f1-9c2c-f27abb73fac0.gif' alt='image'/></a>
</div>

## <a href="https://rapidreel.wizdevtech.com" target="_blank">LIVE DEMO 💥</a>

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/for-you.svg)
![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Javascript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://firebase.google.com">Firebase</a></li>
  </ul>
</details>
<br />

<table>
    <tr>
        <td>
<a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="Google" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/179383376-874f547c-4e6f-4826-850e-706b009e7e2b.png" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/180462270-ea4a249c-627c-4479-9431-5c3fd25454c4.png" alt="" width="30" height="30" /></a>
        </td>
                                <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/177784603-d69e9d02-721a-4bce-b9b3-949165d2edeb.png" alt="" width="30" height="30" /></a>
        </td>
                                <td>
<a href="#"><img src="https://th.bing.com/th/id/R.28f6279ad775efdbdda55c1f7100d580?rik=pv2J4G38ak2j8w&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" width="30" height="30" /></a>
        </td>
    </tr>
</table>

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for a Firebase account <a href='https://firebase.google.com'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_FIREBASE_API_KEY`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SET`

`NEXT_PUBLIC_FIREBASE_APP_ID`

`NEXT_PUBLIC_BASE_URL`

### :gear: Installation

Install my-project with npm

```
npx create-next-app my-project
```

```
cd my-project
```

Install dependencies

### :test_tube: Install Tailwind CSS with Next.js

#### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

#### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install dependencies

<a href="https://github.com/Wiz-DevTech/rapidreel/blob/main/package.json" target="_blank">🔶 Other Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/Wiz-DevTech/rapidreel.git
```

change directory

```bash
  cd rapidreel
```

Install dependencies

```bash
  npm install
```

Create `.env.local` file with Firebase credentials

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Getting Started

Start the server
First, run the development server:

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages in the `pages/` directory. The app auto-updates as you edit the files.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

##### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :handshake: Contact

WizDevTech - [@WizDevTech](https://twitter.com/WizDevTech) - contact@wizdevtech.com

Project Link: [https://github.com/Wiz-DevTech/rapidreel](https://github.com/Wiz-DevTech/rapidreel)

<hr />

<div align="center">
<a href="https://rapidreel.wizdevtech.com" target="_blank"><img width='900'  src='https://user-images.githubusercontent.com/99184393/200150496-009df347-759d-4dd6-8089-cc28abf46c0a.png' alt='image'/></a>
</div>

<br />
