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
<p align="center"><b>Desktop View</b></p>
<img width="1469" alt="Desktop view " src="https://github.com/user-attachments/assets/13909e3b-9802-4261-8a63-255725aed3fd">
<br/>

<hr>
<br/>
<p align="center"><b>Mobile View (Responsive design)</b></p>
<br/>
<img width="333" alt="Responsive" src="https://github.com/user-attachments/assets/4068dd46-8282-4caa-841c-158bd92cdaa5">


<br/>

<hr>

<br/>

## Like feature
### Scope of work
<ul>
<li>Added Like button above/on the image, when clicked it has logic to  increase the count on the backend count of likes from API and also its user name and avatar get added it is a toggle effect It is managed using redux state management </li>
</ul>
<image<img width="424" alt="Like" src="https://github.com/user-attachments/assets/4f74f266-7ae3-439a-a43a-57e30225aa4f">



  
<br/>

<hr>
<br/>

## Comment feature
### Scope of work
<ul>
<li>Added Comment section, when clicked it has logic to  show comment dynamically fetch from API and also has a feature to add user multiple comments and user username and avatar gets added and It is managed using redux state management</li>
</ul>

<img width="429" alt="comment " src="https://github.com/user-attachments/assets/775f6da9-1f77-4a99-b5f3-23657f08b99e">


  
<br/>

<hr>

<br/>





<p align="center"><b>Response cycle state management using Redux </b></p>
<p align="center"><b>Use Post reducer and user reducer for state management</b></p>
<p align="center"><b>User flow on website state management using redux </b></p>
<br/>
<img width="680" alt="redux" src="https://github.com/user-attachments/assets/386a601c-db14-48de-af3d-c5684d695c87">

  



<br/>

<hr>




<br/>




## Deploy the Social website
### Scope of work
<ul>
<li>Deployed the Social React app to Vercel</li>
<li>Configured Vercel to support visiting any pages directly as React is a single-page application</li>
</ul>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Bsanjeewani/social

# Go into the repository
$ cd social

# Install dependencies
$ npm install

# Run the app
$ npm run dev

### Skills used
Deployment, Vercel
