<template>
  <div>
    <button @click="switchLocale">{{ $t("title") }}</button>
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