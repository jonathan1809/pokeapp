import { render, screen } from "@testing-library/react";
import { Image } from "./Image";
describe("Image", () => {
  it("renders the image with the correct src and alt", () => {
    const mockSrc = "https://example.com/image.png";
    const mockAlt = "Test Image";
    render(<Image src={mockSrc} alt={mockAlt} srcOnError="" />);

    const imageElement = screen.getByAltText(mockAlt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockSrc);
  });

  it("renders the image with the correct custom size", () => {
    const mockSrc = "https://example.com/image.png";
    const mockAlt = "Test Image";
    const mockCustomSize = 200;
    render(
      <Image
        src={mockSrc}
        alt={mockAlt}
        customSize={mockCustomSize}
        srcOnError=""
      />
    );

    const imageElement = screen.getByAltText(mockAlt);
    expect(imageElement).toHaveStyle(`max-width: ${mockCustomSize}px`);
    expect(imageElement).toHaveStyle(`max-height: ${mockCustomSize}px`);
  });
});
