import React from 'react'

interface IMyTestComponentProps {
  /**
   * A prop with a name
   */
  name: string
  /**
   * What background color to use
   */
  color: string
  /**
   * A prop with a name
   */
  otherProp?: string
  /**
   * A prop with a name
   */
  otherProp2?: string
}

export const MyTestComponent = ({ name }: IMyTestComponentProps) => {
  return (
    <div>
      <h1>Welcome, {name}! My Test Component</h1>
    </div>
  )
}
