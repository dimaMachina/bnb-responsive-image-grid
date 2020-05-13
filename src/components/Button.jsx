import styled from 'styled-components'

const Button = styled.button`
  height: 36px !important; /* this fix onload css change */
  cursor: pointer;
  border: 1px solid transparent;
  padding: 6px 15px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  color: #484848;
  box-shadow: rgba(0, 0, 0, .14) 0 1px 1px 1px;
  background-color: #fff;
`

export default Button
