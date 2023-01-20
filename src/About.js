import jpg1 from './icons_assets/restaurant.jpg'
import jpg2 from './icons_assets/restaurant chef B.jpg'

function About() {
    return (
      <>
      <div class="about">
        <div class="leftabout">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <div class="rightabout">
          <img src={jpg1} class="jpg1" alt="photo"/>
          <img src={jpg2} class="jpg2" alt="photo"/>
        </div>
      </div>
      </>
    );
  }


export default About;
