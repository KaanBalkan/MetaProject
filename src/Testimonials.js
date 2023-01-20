import favicon from './icons_assets/favicon.png'

function Testimonials() {
    return (
      <>
      <div class="testimonials">
        <div class="testimonials1">
          <text class="testtext">Testimonials</text>
        </div>
        <div class="testimonials2">
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating: *****</text>
            <text>Name: George </text>
            <text>Review Text</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating: ***</text>
            <text>Name: Kyle</text>
            <text>Review Text</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating: ****</text>
            <text>Name: Karl</text>
            <text>Review Text</text>
          </div>
          <div class="review1">
            <img src={favicon} class="favicon" alt="favicon"/>
            <text>Rating: **</text>
            <text>Name: Luis</text>
            <text>Review Text</text>
          </div>
        </div>
      </div>
      </>
    );
  }


export default Testimonials;
