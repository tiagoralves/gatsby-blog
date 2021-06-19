import React from "react";
import {useStaticQuery, graphql} from "gatsby"

import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
    query {
      avatarImage: file(relativePath: { eq: "monkey-profile-02.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, maxHeight: 60 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `
  )

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid}/>
}

export default Avatar