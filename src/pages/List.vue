<script lang="ts" setup>
import Card from '@components/ui/card/Card.vue'
import Badge from '@components/ui/badge/Badge.vue'

import { useShipStore, Sample as Ships } from '@models/ships'

const ships = useShipStore()
</script>

<template>
  <section>
    <div class="container">
      <h1
        class="text-xl sm:text-2xl md:text-3xl font-bold md:mb-12 mb-6 text-center"
      >
        Ships
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          v-for="ship in ships.state"
          :key="ship.id"
          :title="ship.vesselName"
          :link="`/${ship.id}`"
          :description="`Number of assets: ${ship.assetCount}`"
        >
          <div class="flex flex-row gap-2 mt-2">
            <Badge
              size="xs"
              class="flex-grow flex-1"
              :variant="ship.mailProductState === 'Live' ? 'success' : 'danger'"
            >
              {{ ship.mailProductState }}
            </Badge>
            <Badge
              size="xs"
              :variant="
                ship.cyberProductState === 'Live' ? 'success' : 'danger'
              "
              class="flex-grow flex-1"
            >
              {{ ship.cyberProductState }}
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
