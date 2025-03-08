<script lang="ts" setup>
type Button = {
  label: string
  onClick: () => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | 'link'
  variant: 'primary' | 'secondary' | 'error'
}

defineProps<Button>()
</script>
