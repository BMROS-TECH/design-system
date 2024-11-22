// @ts-nocheck
const copyColor = (color: string) => {
  navigator.clipboard
    .writeText(color)
    .then(function () {
      console.log(`Texto copiado al portapapeles ${color}`)
    })
    .catch(function (error) {
      console.error('Error al copiar al portapapeles: ', error)
    })
}

export const ColorRender: React.FC<{
  colors: Record<string, string>
}> = (colors) => {
  return <div className="grid gap-3 dt-grid">{RenderCard(colors)}</div>
}

const RenderCard: React.FC<{
  colors: Record<string, string>
  rootName?: string
}> = (colors, rootName) => {
  return (
    <>
      {Object.entries(colors).map(([name, color]) => {
        const nameFormatted = name.toLowerCase()
        if (typeof color === 'string') {
          const fullName = rootName
            ? `${rootName}-${nameFormatted}`
            : nameFormatted
          return (
            <div
              onClick={() => copyColor(fullName)}
              className="dt-card"
              key={nameFormatted}
            >
              <p className="!dt-title">{fullName}</p>
              <p className="!dt-detail">{color} </p>
              <div className="w-full h-16" style={{ backgroundColor: color }} />
            </div>
          )
        } else {
          return RenderCard(color, nameFormatted)
        }
      })}
    </>
  )
}
