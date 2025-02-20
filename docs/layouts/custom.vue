<template>
  <div>
    <header>Mi Encabezado</header>
    <main>
      <slot />
    </main>
    <footer>Mi Pie de Página</footer>
  </div>
</template>

<style scoped>
header {
  background-color: blue;
  padding: 1rem;
  text-align: center;
}
</style>
