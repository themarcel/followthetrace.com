<template>
  <blockquote class="quote">
    <div class="quote-content">
      <slot />
    </div>
    <footer class="quote-footer">
      <span class="quote-author">{{ author }}</span>
      <span v-if="source" class="quote-source">, {{ source }}</span>
    </footer>
  </blockquote>
</template>

<script setup lang="ts">
interface Props {
  author: string;
  source?: string;
}

withDefaults(defineProps<Props>(), {
  source: undefined,
});
</script>

<style scoped>
.quote {
  margin-top: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.03);
  transition:
    border-color 0.15s ease-out,
    background-color 0.15s ease-out;
  font-family: var(--font-merriweather);
  font-style: italic;
}

.quote:hover {
  border-color: #0000ee;
  background-color: rgba(0, 0, 238, 0.04);
}

html.dark .quote {
  background-color: rgba(170, 229, 116, 0.06);
  border-color: rgba(170, 229, 116, 0.15);
}

html.dark .quote:hover {
  border-color: #aae574;
  background-color: rgba(170, 229, 116, 0.1);
}

.quote-content {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text);
}

.quote-content > *:first-child {
  margin-top: 0;
}

.quote-content > *:last-child {
  margin-bottom: 0;
}

.quote-footer {
  font-size: 0.8rem;
  font-style: normal;
  text-align: right;
  opacity: 0;
  transform: translateY(-2px);
  transition:
    opacity 0.1s ease-out,
    transform 0.1s ease-out;
}

.quote:hover .quote-footer {
  opacity: 1;
  transform: translateY(0);
}

.quote-dash {
  color: var(--color-text-muted);
}

.quote-author {
  font-weight: 600;
  color: var(--color-text);
}

.quote:hover .quote-author {
  color: #0000ee;
}

.quote-source {
  color: var(--color-text-muted);
}

.quote:hover .quote-source {
  color: #0000ee;
}

html.dark .quote:hover .quote-author,
html.dark .quote:hover .quote-source {
  color: #aae574;
}
</style>
