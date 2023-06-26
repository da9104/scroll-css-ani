import './App.css';
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef  } from "react";
gsap.registerPlugin(ScrollTrigger);

function App() {
const lenis = new Lenis()
lenis.on({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

let tl = useRef()

useLayoutEffect(() => {    
  tl.current = gsap.timeline({
   scrollTrigger: {
     trigger: '.img',
     scrub: true
   }
 })
 .to('.img', {
   stagger: .2,
   y: -700,
   scrub: true
 })
 }, []);
 
 return (
    <div className="App">
      <h1>Hi, I'm Dami</h1>

      <section>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </section>

      <section>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
      </section>

      <section></section>

    </div>
  );
}

export default App;
