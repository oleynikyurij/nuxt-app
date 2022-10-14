<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page">
            page 1
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/info">
            page 2
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
nav {
  background-color: aqua;
  padding: 5px 20px;
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    li {
      margin-right: 10px;
      a {
        text-decoration: none;
        font-size: 20px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
