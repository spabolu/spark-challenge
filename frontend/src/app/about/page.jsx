import React from "react";

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About mineTALK</h1>
      <p className="text-lg text-gray-700 mb-6">
        At mineTALK, we are dedicated to discussing the impact of mining
        activities on local communities and the environment. Our mission is to
        provide a platform where community members can share their experiences,
        raise concerns, and work together to find solutions for a sustainable
        future.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Top AI Solutions This Week
      </h2>

      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Environmental Pollution:</strong> Implementing sustainable and environmentally-friendly mining practices, such as reducing dust emissions and using cleaner technologies, can mitigate the negative impacts of mining on the environment. This can include implementing measures to prevent water pollution, such as using water treatment systems and restoring damaged ecosystems.
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Health Impacts:</strong> Implementing measures to reduce exposure to pollution and dust, such as providing personal protective equipment and improving ventilation systems, can help mitigate the health impacts of mining. The company should also provide regular health checks and medical support to community members affected by mining activities.
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Disruption to Traditional Practices:</strong> The company should engage with the community to understand their traditional practices and work with them to develop strategies to minimize the impacts of mining on their culture and way of life. This can include preserving sacred sites and cultural heritage, and providing support for community-led conservation efforts.
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Economic Impacts:</strong> The company should work with the community to develop economic opportunities that benefit the community and respect their traditional practices. This can include providing support for community-led economic development initiatives, such as sustainable agriculture and eco-tourism.
        </p>
      </div>

      <p className="text-lg text-gray-600 mt-8">
        mineTALK is a registered 501(c)(3) non-profit organization. All rights
        reserved © 2024 mineTALK.
      </p>
    </div>
  );
};

export default Page;
