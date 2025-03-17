function About() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">About Us</h1>

            {/* مقدمة عن الموقع */}
            <section>
                <h3>Who We Are</h3>
                <p>At <strong>ShopMate</strong>, we aim to provide a seamless and enjoyable online shopping experience with a wide range of high-quality products. We believe in offering great value and excellent customer service.</p>
            </section>

            {/* تاريخ الموقع */}
            <section>
                <h3>Our Story</h3>
                <p>Founded in 2020, <strong>ShopMate</strong> started with a vision to bring the best products to customers at affordable prices. Over the years, we have grown our product range and built strong customer relationships based on trust and service.</p>
            </section>

            {/* مهمة ورؤية الموقع */}
            <section>
                <h3>Our Mission & Vision</h3>
                <p><strong>Mission:</strong> Our mission is to provide customers with the latest and highest quality products, making shopping easy and enjoyable.</p>
                <p><strong>Vision:</strong> We aim to become the leading online retailer, known for quality, affordability, and exceptional customer service.</p>
            </section>

            {/* قيم الموقع */}
            <section>
                <h3>Our Values</h3>
                <ul>
                    <li><strong>Quality:</strong> We are committed to offering only the best products.</li>
                    <li><strong>Customer Satisfaction:</strong> We always put our customers first and strive for their satisfaction.</li>
                    <li><strong>Innovation:</strong> We continuously seek to improve and offer new, exciting products.</li>
                </ul>
            </section>

            {/* فريق العمل */}
            <section>
                <h3>Meet Our Team</h3>
                <p>Our team consists of passionate professionals who work tirelessly to bring the best online shopping experience to our customers. From curating the best products to ensuring smooth delivery, we are here for you!</p>
            </section>

            {/* خدمات الموقع */}
            <section>
                <h3>Our Services</h3>
                <p>We offer fast and secure shipping services, multiple payment options, and dedicated customer support to ensure a smooth shopping experience for all our customers.</p>
            </section>

            {/* مراجعات العملاء */}
            <section>
                <h3>What Our Customers Say</h3>
                <p>"The best shopping experience I've had online!" - Ahmed S.</p>
                <p>"Highly recommend ShopMate for its great products and amazing customer service!" - Sara K.</p>
            </section>
        </div>
    );
}

export default About;
