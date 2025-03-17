import '../Styles/Offers.css';
function Offers() {
    return (
      <div className="offers-container">
        <h2>Special Offers</h2>
        
        {/* هنا يمكن أن تضع أي محتوى خاص بالعروض */}
        <div className="offer">
          <h3>Offer 1: Discount on Electronics</h3>
          <p>Get up to 50% off on all electronic items. Don't miss out!</p>
        </div>
        
        <div className="offer">
          <h3>Offer 2: Buy 1 Get 1 Free on Clothing</h3>
          <p>Exclusive offer on all clothing items. Buy one and get another free!</p>
        </div>
        
        <div className="offer">
          <h3>Offer 3: Free Shipping on Orders Over $100</h3>
          <p>Enjoy free shipping on all orders over $100. Limited time only!</p>
        </div>
      </div>
    );
  }
  
  export default Offers;
  