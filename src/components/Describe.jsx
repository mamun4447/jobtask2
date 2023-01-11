import React from "react";

const Describe = () => {
  return (
    <div className="container mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mb-10">
      <div className="text-left">
        <h3 className="font-bold my-2">Indian Cuisine</h3>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="text-left">
        <h3 className="font-bold my-2">American Cuisine</h3>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard.
        </p>
      </div>
      <div className="text-left">
        <h3 className="font-bold my-2">Chinese Cuisine</h3>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default Describe;
