<script lang="ts" setup>
import { useComputerStore, Actions as ComputerActions } from '@models/computers'
import { useShipStore, Actions as ShipActions } from '@models/ships'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Badge from '@components/ui/badge/Badge.vue'

const computers = useComputerStore()
const ships = useShipStore()

const currentShip = ref({})

const shipComputers = ref({})
const pageId = useRoute().params.id

onMounted(() => {
  currentShip.value = ShipActions.get(ships.state, Number(pageId))
  shipComputers.value = ComputerActions.get(computers.state, Number(pageId))
})
</script>

<template>
  <section>
    <div class="container">
      <div
        class="md:mb-12 mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">
          {{ currentShip.vesselName }}
          {{ currentShip.cyberProductState }}
          {{ currentShip.mailProductState }}
        </h1>
        <div class="flex flex-row gap-2 mt-6">
          <Badge size="md" class="uppercase" variant="primary">
            Asset Count: {{ currentShip.assetCount }}
          </Badge>
          <Badge
            size="md"
            class="uppercase"
            :variant="
              currentShip.mailProductState === 'Live' ? 'success' : 'danger'
            "
          >
            Mail Product State: {{ currentShip.mailProductState }}
          </Badge>
          <Badge
            size="md"
            class="uppercase"
            :variant="
              currentShip.cyberProductState === 'Live' ? 'success' : 'danger'
            "
          >
            Cyber Product State: {{ currentShip.cyberProductState }}
          </Badge>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div
          v-for="computer in shipComputers"
          :key="computer.id"
          class="p-4 border border-gray-200 rounded"
        >
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-brand-tertiary"
          >
            {{ computer.computerName }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Computer ID: {{ computer.id }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
