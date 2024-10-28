import Image from "next/image";
import {
  ContainerRect,
  isImageFitCover,
  isImageSlide,
  Slide,
  SlideImage,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";
// type Slide = {
//   src: string;
//   width: number;
//   height: number;
//   blurDataURL?: string;
// };

// Tipo para o rect
type Rect = ContainerRect;

// Tipo para as props do componente
interface NextJsImageProps {
  slide: Slide;
  offset: number;
  rect: Rect;
}
function isNextJsImage(slide: Slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width! === "number" &&
    typeof slide.height! === "number"
  );
}

export default function NextJsImage({ slide, offset, rect }: NextJsImageProps) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height!) * slide.width!)
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width!) * slide.height!)
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}
