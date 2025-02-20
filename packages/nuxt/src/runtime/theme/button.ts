interface ButtonConfig {
  slots: {
    base: string[]
  }
  size: {
    xs: { base: string }
    sm: { base: string }
    md: { base: string }
    lg: { base: string }
    xl: { base: string }
  }
  colors: { [key: string]: string }
}

export default (): ButtonConfig => {
  // Extraemos los colores de Tailwind usando la función recursiva

  return {
    slots: {
      base: [
        'rounded-sm font-semibold shadow-xs hover:bg-opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-75',
      ],
    },
    size: {
      xs: {
        base: 'px-2 py-1 text-xs',
      },
      sm: {
        base: 'px-2 py-1 text-sm',
      },
      md: {
        base: 'px-2.5 py-1.5 text-sm',
      },
      lg: {
        base: 'px-3 py-2 text-sm',
      },
      xl: {
        base: 'px-3.5 py-2.5 text-sm',
      },
    },
    colors: {
      indigo: 'bg-indigo-600 text-white hover:bg-indigo-500',
      blue: 'bg-blue-600 text-white hover:bg-blue-500',
      red: 'bg-red-600 text-white hover:bg-red-500',
      green: 'bg-green-600 text-white hover:bg-green-500',
      yellow: 'bg-yellow-600 text-white hover:bg-yellow-500',
      purple: 'bg-purple-600 text-white hover:bg-purple-500',
      pink: 'bg-pink-600 text-white hover:bg-pink-500',
      gray: 'bg-gray-600 text-white hover:bg-gray-500',
      // Add other color classes if necessary
    }, // Los colores de Tailwind extendidos se asignan aquí
  }
}
