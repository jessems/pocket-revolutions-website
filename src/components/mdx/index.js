import React from 'react'

import Title from './Title'
import Subtitle from './Subtitle'
import SubSubtitle from './SubSubtitle'
import Paragraph from './Paragraph'
import Code from './Code'
import Image from './Image'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <SubSubtitle {...props} />,
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
  img: props => <Image {...props} />
}
