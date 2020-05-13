import styled from 'styled-components'
import { flex, height } from 'styled-system'

const ImageBox = styled.div`
  height: 50%; /* fill img box when img have small height and large width */
  overflow: hidden;
  border: 1px solid;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out, filter 0.1s ease-in;
    &:hover {
      transform: scale(1.05);
    }
  }

  ${flex}
  ${height}
`

export default ImageBox
