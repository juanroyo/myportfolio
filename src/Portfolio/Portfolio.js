import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";


export const Portfolio = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
}
  return(
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>

          </div>
        );
    }

export default Portfolio

/*<div>
  <Container>
<Row>
  <Col> <Image src={require('../Images/japanesebuilding.jpg')} style={{width: 171, height: 180 }}/></Col>
  <Col><Image src={require('../Images/japanesebuilding.jpg')} style={{width: 171, height: 180 }} /></Col>
</Row>
<Row>
  <Col><Image src="./Images/japanesedoor.jpg/100px250" /></Col>
  <Col><Image src="./Images/japanesepikachu.jpg/100px250" /></Col>
  <Col>3 of 3</Col>
</Row>
</Container>

</div>*/
