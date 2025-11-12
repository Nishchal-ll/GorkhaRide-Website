import React from 'react'

const Marketplace = () => {
  return (
   <>
   <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
    {/* Large image */}
    <img
      src="src/components/YoutubeVideo/bazar.png"
      alt="Main Visual"
      className="rounded-xl w-full h-64 object-cover mb-4"
    />

    {/* Grid of 3 smaller images */}
    <div className="grid grid-cols-3 gap-4">
      <img
        src="src/components/YoutubeVideo/bazar1.png"
        alt="Feature 1"
        className="rounded-xl h-24 object-cover w-full"
      />
      <img
        src="src/components/YoutubeVideo/bazar1.png"
        alt="Feature 2"
        className="rounded-xl h-24 object-cover w-full"
      />
      <img
        src="src/components/YoutubeVideo/bazar1.png"
        alt="Feature 3"
        className="rounded-xl h-24 object-cover w-full"
      />
    </div>
  </div>
</div>

                <div class="md:w-1/2 md:pl-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Gorkha Bazaar (Marketplace)</h2>
                    <p class="text-lg text-gray-600 mb-6">Shop online from local businesses and support your community. Find everything from fresh produce to handmade crafts.</p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Wide variety of local products</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Support local businesses</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Fast and reliable delivery</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-green-500 mr-3"></i>
                            <span>Secure payment options</span>
                        </li>
                    </ul>
                    <button
  onClick={() => window.open('https://www.youtube.com/@gorkharide', '_blank')}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 gtag-event"
  data-event="explore_marketplace"
  data-category="cta"
  data-label="gorkha_bazaar"
>
  Explore Marketplace
</button>
                </div>
            </div>
        </div>
    </section>

   </>
  );
}

export default Marketplace
