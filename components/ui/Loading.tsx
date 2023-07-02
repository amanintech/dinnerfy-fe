import Image from 'next/image'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <Image src={"/loader.svg"} height={50} width={50} alt='loader animation' />
  )
}

export default Loading