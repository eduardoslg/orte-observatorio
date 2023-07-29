import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

export const CarouselContent = styled.div`
  display: flex;
  overflow: hidden;
`

export const CarouselItem = styled.div<any>`
  flex: 0 0 300px;
  height: 200px;
  margin: 10px;
  background-color: ${(props) => (props.isActive ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.isActive ? '#fff' : 'inherit')};
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

export const CarouselButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;

  &:hover {
    background-color: #0056b3;
  }
`
