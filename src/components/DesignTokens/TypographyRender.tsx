/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'react'

export const TypographyRender = (typography: Record<string, unknown>) => {
  return (
    <>
      <div className="mb-16 ">
        <h1 className="text-t ">TYPOGRAPHY</h1>
        <h3 className="text-t4 !text-muted-foreground">Font family: Inter</h3>
      </div>
      <div className="grid gap-8">
        {Object.entries(typography).map(([typographyClass, value]: any) => {
          const classNameTypo = typographyClass.split('.')[1]
          console.log(classNameTypo)
          return (
            <div className="flex flex-row w-full gap-4" key={typographyClass}>
              <div className=" w-[250px]">
                <p className="dt-title">{typographyClass}</p>
                <div>
                  {Object.entries(value).map(([prop, valueProp]: any) => (
                    <div
                      className="flex gap-2"
                      key={`${typographyClass}-${prop}`}
                    >
                      <p className="mb-0 dt-detail text-muted-foreground">
                        {prop}:{' '}
                      </p>
                      <p className="mb-0 dt-detail text-muted-foreground">
                        {valueProp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="w-full" style={value as CSSProperties | undefined}>
                The fintech platform that simplifies cross-border trade
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
