import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ReviewModal from ".";

describe("ReviewModal", () => {
  const movie = {
    movieContext: {
      title: "Test Movie",
      id: 123,
      posterPath: "test.jpg",
    },
  };

  it("should render modal header and close button", () => {
    const onClose = jest.fn();
    render(
      <BrowserRouter>
        <ReviewModal movie={movie} onClose={onClose} />
      </BrowserRouter>
    );
    expect(screen.getByText("Share your thoughts")).toBeInTheDocument();
    expect(screen.getByAltText("Close")).toBeInTheDocument();
    fireEvent.click(screen.getByAltText("Close"));
    expect(onClose).toHaveBeenCalled();
  });

});
