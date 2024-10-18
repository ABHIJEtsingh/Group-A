import React from 'react';

const Footerr = () => {
  return (
    <footer className=" text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Shop and Learn</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Mac</a></li>
              <li><a href="#" className="hover:underline text-xs">iPad</a></li>
              <li><a href="#" className="hover:underline text-xs">iPhone</a></li>
              <li><a href="#" className="hover:underline text-xs">Watch</a></li>
              <li><a href="#" className="hover:underline text-xs">TV & Home</a></li>
              <li><a href="#" className="hover:underline text-xs">Music</a></li>
              <li><a href="#" className="hover:underline text-xs">AirPods</a></li>
              <li><a href="#" className="hover:underline text-xs">Accessories</a></li>
              <li><a href="#" className="hover:underline text-xs">Gift Cards</a></li>
            </ul>

            <h3 className="text-lg font-bold text-black mb-4 mt-8">About Apple</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Newsroom</a></li>
              <li><a href="#" className="hover:underline text-xs">Apple Leadership</a></li>
              <li><a href="#" className="hover:underline text-xs">Career Oppurtunities</a></li>
              <li><a href="#" className="hover:underline text-xs">Investors</a></li>
              <li><a href="#" className="hover:underline text-xs">Ethics & Compliance</a></li>
              <li><a href="#" className="hover:underline text-xs">Events</a></li>
              <li><a href="#" className="hover:underline text-xs">Contact Apple</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Apple Store</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Find a Store</a></li>
              <li><a href="#" className="hover:underline text-xs">Genius Bar</a></li>
              <li><a href="#" className="hover:underline text-xs">Today at Apple</a></li>
              <li><a href="#" className="hover:underline text-xs">Apple Camp</a></li>
              <li><a href="#" className="hover:underline text-xs">Apple Store App</a></li>
              <li><a href="#" className="hover:underline text-xs">Refurbished and Clearance</a></li>
              <li><a href="#" className="hover:underline text-xs">Financing</a></li>
              <li><a href="#" className="hover:underline text-xs">Order Status</a></li>
              <li><a href="#" className="hover:underline text-xs">Apple Trade in</a></li>
              <li><a href="#" className="hover:underline text-xs">Shopping Help</a></li>
              <li><a href="#" className="hover:underline text-xs">Group Reservations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-4">For Business</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Apple and Business</a></li>
              <li><a href="#" className="hover:underline text-xs">Shop for Business</a></li>
            </ul>
            <h3 className="text-lg font-bold text-black mb-4 mt-8">For Education</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Apple and Education</a></li>
              <li><a href="#" className="hover:underline text-xs">Shop for K-12</a></li>
              <li><a href="#" className="hover:underline text-xs">Shop for college</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-black mb-4">For Healthcare</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Apple in Healthcare</a></li>
              <li><a href="#" className="hover:underline text-xs">Health on Apple Watch</a></li>
              <li><a href="#" className="hover:underline text-xs">Health Records on iPhone</a></li>
            </ul>
            <h3 className="text-lg font-bold text-black mb-4 mt-8">For Government</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Shop for Government</a></li>
              <li><a href="#" className="hover:underline text-xs">Shop for Veterans and Military</a></li>
            </ul>

          </div>

          <div>
            <h3 className="text-lg font-bold text-black mb-4">Apple Values</h3>
            <ul>
              <li><a href="#" className="hover:underline text-xs">Accessibility</a></li>
              <li><a href="#" className="hover:underline text-xs">Education</a></li>
              <li><a href="#" className="hover:underline text-xs">Environment</a></li>
              <li><a href="#" className="hover:underline text-xs">Inclusion and Diversity</a></li>
              <li><a href="#" className="hover:underline text-xs">Privacy</a></li>
              <li><a href="#" className="hover:underline text-xs">Racial Equity and Justice</a></li>
              <li><a href="#" className="hover:underline text-xs">Supply Chain</a></li>
            </ul>
            
          </div>
        </div>
        {/* Legal & Copyright */}
        <div className="border-t border-gray-700 pt-4 text-sm text-center">
          <p>Copyrigt &copy; 2024 Apple Inc. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline text-xs">Privacy Policy</a>
            <a href="#" className="hover:underline text-xs">Terms of Use</a>
            <a href="#" className="hover:underline text-xs">Sales and Refunds</a>
            <a href="#" className="hover:underline text-xs">Legal</a>
            <a href="#" className="hover:underline text-xs">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerr;
