import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { ReactBnbGallery } from 'react-bnb-gallery'
import { Flex } from 'reflexbox'
import ImageBox from './ImageBox'
import Button from './Button'
import { useViewport } from '../hooks/useViewport'

import 'react-bnb-gallery/dist/style.css';

const Wrapper = styled.div`
  position: relative;
  background-color: #f2f2f2;
  .is-hover img:not(.hovered) {
    filter: brightness(0.7);
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`

const ResponsiveImageGrid = ({ photos, blockOne, blockTwo, blockThree, reactBnbGalleryProps, buttonStyle }) => {
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const container = useRef()
  const viewport = useViewport()

  if (!photos.length) {
    return false
  }

  const toggleGallery = () => {
    if (container.current) {
      container.current.classList.remove('is-hover') // this fix bug when after toggle container has class
    }
    setOpen(prevIsOpen => !prevIsOpen)
  }

  const handleMouse = e => {
    const isMouseEnter = e.type === 'mouseenter'
    container.current.classList.toggle('is-hover', isMouseEnter)
    e.target.classList.toggle('hovered', isMouseEnter)
  }

  const handleClick = e => {
    setOpen(true)
    setPhotoIndex(parseInt(e.target.dataset.idx))
  }

  const Image = ({ idx, ...props }) => (
    <ImageBox {...props}>
      <img
        src={photos[idx].photo}
        alt={photos[idx].caption}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
        onClick={handleClick}
        data-idx={idx}
      />
    </ImageBox>
  )

  return (
    <Wrapper>
      <div>
        <Flex
          ref={container}
          css={`height: 55vh; max-height: 55vh;`}
        >
          <Image idx={0} {...blockOne} />
          {viewport.includes('large') && photos[2] && (
            <Flex {...blockTwo}>
              <Image idx={1} />
              <Image idx={2} />
            </Flex>
          )}
          {viewport === 'extra-large' && photos[4] && (
            <Flex {...blockThree}>
              <Image idx={3} />
              <Image idx={4} />
            </Flex>
          )}
          <Button style={buttonStyle} onClick={toggleGallery}>
            Voir les photos
          </Button>
        </Flex>
      </div>

      <ReactBnbGallery
        activePhotoIndex={photoIndex}
        show={isOpen}
        photos={photos}
        onClose={toggleGallery}
        showThumbnails={true}
        {...reactBnbGalleryProps}
      />
    </Wrapper>
  )
}

ResponsiveImageGrid.defaultProps = {
  photos: [],
  blockOne: {
    flex: 2,
    height: '100%'
  },
  blockTwo: {
    flex: 1,
    display: ['none', null, 'block']
  },
  blockThree: {
    flex: 1,
    display: ['none', null, null, 'block']
  },
  buttonStyle: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    bottom: 10
  },
  reactBnbGalleryProps: {
    backgroundColor: '#262626',
    phrases: {
      noPhotosProvided: 'Aucune photo à afficher',
      showPhotoList: 'Afficher la liste des photos',
      hidePhotoList: 'Masquer les photos'
    }
  }
}

export default ResponsiveImageGrid
