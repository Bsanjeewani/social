# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Social

## Overview
Social is an application where users can like, share, and comment on different posts. 

### Skills used
React.js, Redux, Redux Toolkit, Event Handling, Forms, React Hooks, REST API, Tailwind CSS, State management, Vite, Axios

<br/>


## Key Features

* **Timeline Display** - Fetch and display posts from an external API in a timeline format.
* **Liking, Commenting, Reposting** - Interact with posts by liking, commenting, and reposting, with simulated API responses.
* **Responsive UI** - Ensure a seamless experience across devices with a fully responsive design.
* **Redux State Management** - Centralized state management with Redux, ensuring efficient data flow and state updates.

During this project
<ul>
<li>Implemented Like feature to like the post and also the user name and avatar get added</li>
<li>Implemented Comment feature to Comment on the post and also the user name and avatar get added</li>
<li>Improved UI by adding responsive design elements for a uniform experience across different devices</li>
<li>Utilized REST APIs to dynamically load and render data served by the backend server</li>
<li>Deployed website to Vercel</li>
</ul>
<br/>

<image src="https://drive.google.com/file/d/1JJwuIMadnECeB8ZbdIUP-Gik385l5A9G/view?usp=sharing" alt="desktop view-architecture" width=100%/>
<p align="center"><b>Desktop View</b></p>

<br/>

<image src="https://drive.google.com/file/d/1mAbU65KgZpy42UjxxjmUigBzg46J8jph/view?usp=sharing" alt="mobile view" width=100%/>
<p align="center"><b>Mobile View (Responsive design)</b></p>

<br/>

<hr>

<br/>

## Like feature
### Scope of work
<ul>
<li>Added Like button above/on the image, when clicked it has logic to  increase the count on the backend count of likes from API and also its user name and avatar get added it is a toggle effect It is managed using redux state management </li>
</ul>
<image src="https://drive.google.com/file/d/1X6OCw-CYkHl_uNxh5lvNOZB-M4zNKtXs/view?usp=sharing" alt="Like view" width=100%/>
<br/>

<hr>

## Comment feature
### Scope of work
<ul>
<li>Added Comment section, when clicked it has logic to  show comment dynamically fetch from API and also has feature to add user multiple comments and user username and avatar gets added and It is managed using redux state management</li>
</ul>
<image src="https://drive.google.com/file/d/1dVmQxyCIL5qytdefr4IGQocM0kE3f9bo/view?usp=sharing" alt="Comment view" width=100%/>
<br/>

<hr>







<p align="center"><b>Response cycle state management using Redux </b></p>
<p align="center"><b>Use Post reducer and user reducer for state management</b></p>
<br/>

<image src="https://drive.google.com/file/d/1bwY-tfgB1rfkyJTkYQUq4kCnbt-TaUcc/view?usp=sharing" alt="User-flow-on-website-for-signup-and-login.png" width=100%/>
<p align="center"><b>User flow on website state management using redux </b></p>

<br/>

<hr>









## Deploy the Social website
### Scope of work
<ul>
<li>Deployed the Social React app to Vercel</li>
<li>Configured Vercel to support visiting any sub pages directly as React is a single page application</li>
</ul>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/yourusername/social-continent-timeline

# Go into the repository
$ cd social-continent-timeline

# Install dependencies
$ npm install

# Run the app
$ npm run dev

### Skills used
Deployment, Vercel
