import React from 'react';

const styles = {
  p: {
    margin: 32,
    fontSize: 20
  }
}

export default function About() {
  return (
    <div>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center" >
        <h1>About Me</h1>

      </div>

      <p style={styles.p} className="text-center">
      Hello and welcome to my About Me page!

My name is James Simpson, and I'm a web developer based in Charlotte, North Carolina. I've been passionate about coding and web development since I was young, and I've spent the last few years honing my skills and building websites for clients of all types.
I specialize in front-end web development, but I'm also proficient in back-end development and have experience with a variety of programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, and more. I enjoy taking on challenging projects and working with clients to bring their vision to life.
If you're interested in working with me, please don't hesitate to reach out. I'm always excited to take on new projects and help businesses and individuals create beautiful, functional websites that meet their needs and exceed their expectations. Thank you for visiting my page, and I hope to hear from you soon!

      </p>
    </div>
  );
}
