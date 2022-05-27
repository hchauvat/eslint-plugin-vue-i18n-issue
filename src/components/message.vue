<template>
  <div>
    <h1>{{ $t("title") }}</h1>
    <button @click="switchLocale">Switch lang</button>
  </div>
</template>

<script>
export default {
  name: "Message",
  methods: {
    switchLocale() {
      this.$i18n.locale = this.$i18n.locale === "fr" ? "en" : "fr";
    },
  },
};
</script>