import { render, fireEvent, screen } from "@testing-library/react";
import Feed from "../app/feed/page";

describe("Feed Component", () => {
  it("renders the initial posts", () => {
    render(<Feed />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
    expect(screen.getByText("My first post!")).toBeInTheDocument();
  });

  it("can add a new post", () => {
    render(<Feed />);
    fireEvent.change(screen.getByPlaceholderText("What's on your mind?"), {
      target: { value: "This is a new post" },
    });
    fireEvent.click(screen.getByText("Post"));
    expect(screen.getByText("This is a new post")).toBeInTheDocument();
  });

  it("can like a post", () => {
    render(<Feed />);
    fireEvent.click(screen.getAllByText("Like (0)")[0]);
    expect(screen.getByText("Like (1)")).toBeInTheDocument();
  });
});
