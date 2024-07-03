<script setup lang="ts">
const title = 'Nuxt Open Fetch';

console.log('foo');

const { data: userWithId2 } = await useLazySkilldb('/users/{id}', {
  path: {
    id: '2',
  },
});

console.log(`userWithId2:`, userWithId2);

// const { data: petWithId2 } = await usePets('/pet/{petId}', {
//   path: {
//     petId: 2,
//   },
// });

// console.log(`petWithId2:`, petWithId2);
</script>

<template>
  <div>
    <h1>{{ title }}</h1>

    <p>userWithId2:</p>
    <pre>{{ userWithId2 }}</pre>

    <!-- <p>petWithId2:</p>
    <pre>{{ petWithId2 }}</pre> -->
  </div>
</template>
