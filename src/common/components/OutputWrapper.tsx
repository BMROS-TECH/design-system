import { DivComponentTypeFC } from 'common/types/commonTypes'

export const OutputWrapper: DivComponentTypeFC = ({ children }) => {
  return (
    <>
      {children && <div className="p-2 my-3 text-sm bg-muted">{children}</div>}
    </>
  )
}
