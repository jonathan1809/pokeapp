import styled from "styled-components";

export type ImageProps = {
  src: string;
  alt: string;
  customSize?: number;
  srcOnError: string;
};
export const Image = ({ src, alt, customSize, srcOnError }: ImageProps) => {
  const size = customSize ?? 200;
  return (
    <$Image
      src={src}
      alt={alt}
      $size={`${size}`}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = srcOnError;
      }}
    />
  );
};

type $ImageProps = {
  $size?: string;
};

const $Image = styled.img<$ImageProps>`
  width: 100%;
  max-width: ${(p: $ImageProps) => p.$size}px;
  max-height: ${(p: $ImageProps) => p.$size}px;
  height: auto;
`;
