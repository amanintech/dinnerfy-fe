import React, { FC } from 'react'

interface Props extends React.HTMLAttributes<HTMLInputElement> {
styles?: string
register : any
}

const Input:FC<Props> = ({styles, register , ...props}) => {
  return (
    <input className={"sm:px-8 sm:py-4 px-2 py-1 border rounded-xl max-w-[90%] shadow-sm shadow-gray-300/40 inline-block sm:text-2xl text-lg max-[300px]:text-sm active:ring-0 "+" "+styles} {...register}  {...props} />
  )
}

export default Input