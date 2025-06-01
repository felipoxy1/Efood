import styled from 'styled-components'

export const BannerContainer = styled.div`
  position: relative;
`

export const BannerImg = styled.img`
  width: 100%;
  height: 280px;
  filter: brightness(50%);
`

export const ContainerSecundario = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const BannerInfo = styled.div`
  position: absolute;
  top: 10px;
  padding-left: 20px;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: #ffffff;
    font-weight: 900;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
  }

  h3 {
    color: #ffffff;
    font-weight: 100;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`
