import React from "react";

const CategoryForm = ({ value, setValue, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="category-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
