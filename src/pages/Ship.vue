<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import {
  useComputerStore,
  useComputerEditStore,
  Actions as ComputerActions,
  type Type as ComputerType,
} from '@models/computers'
import {
  useShipStore,
  useShipEditStore,
  Actions as ShipActions,
  type Type as ShipType,
} from '@models/ships'

import Wrapper from '@/components/ui/card/Wrapper.vue'
import Badge from '@components/ui/badge/Badge.vue'
import Button from '@components/ui/button/Button.vue'
import Modal from '@components/ui/modal/Modal.vue'
import { ArrowRight } from 'lucide-vue-next'

// States
const computers = useComputerStore() as unknown as { state: ComputerType[] }
const ships = useShipStore() as unknown as { state: ShipType[] }

// Page Data
const currentShip = ref<ShipType>({})

const shipComputers = ref<ComputerType[]>([])

const computerChanges = useComputerEditStore() as unknown as {
  state: ComputerType
  unset: () => void
  set: (computer: ComputerType) => void
}
const shipChanges = useShipEditStore() as unknown as {
  state: ShipType
  unset: () => void
  set: (ship: ShipType) => void
}

// Modal States
const computerModalOpen = ref<{ id: number | null; open: boolean }>({
  open: false,
  id: null,
})
const shipModalOpen = ref<boolean>(false)

// Page Data
const pageId = useRoute().params.id

// Run on load
onMounted(() => {
  currentShip.value = ShipActions.get(ships.state, Number(pageId))
  shipComputers.value = ComputerActions.get(computers.state, Number(pageId))
})

// Ship Modal Methods
const loadShip = (): void => {
  shipChanges.set(currentShip.value)
}

const updateShipDetails = (data: Partial<ShipType>): void => {
  shipChanges.set({ ...shipChanges.state, ...data })
}

const saveShip = (): void => {
  useShipStore().update(currentShip.value.id, currentShip.value)
  shipChanges.unset()
}

const closeShipModal = (): void => {
  shipModalOpen.value = false
  shipChanges.unset()
}

// Computer Modal Methods
const loadComputer = (id: number): void => {
  computerChanges.set(shipComputers.value.find((c) => c.id === id))
}

const updateComputerDetails = (data: Partial<ComputerType>): void => {
  computerChanges.set({ ...shipChanges.state, ...data })
}

const saveComputer = (): void => {
  useComputerStore().update(computerChanges.state.id, computerChanges.state)
  computerChanges.unset()
}

const closeComputerModal = (): void => {
  shipModalOpen.value = false
  shipChanges.unset()
}
</script>

<template>
  <section class="ship-details">
    <Wrapper class="md:mb-12 mb-6 max-w-full">
      <h1
        class="text-xl text-center md:text-left sm:text-2xl md:text-3xl font-bold"
      >
        Ship name: {{ currentShip.vesselName }}
      </h1>
      <div class="flex flex-col md:flex-row gap-2 mt-6">
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
    </Wrapper>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Wrapper
        v-for="computer in shipComputers"
        :key="computer.id"
        class="p-4 border border-gray-200 rounded"
      >
        <h5
          class="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight"
        >
          Computer name: {{ computer.computerName }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Computer ID: {{ computer.id }}
        </p>

        <Button
          variant="secondary"
          :onClick="() => (computerModalOpen.open = true)"
        >
          Edit Computer <ArrowRight />
        </Button>
      </Wrapper>
    </div>
  </section>
  <Modal
    title="Test 2"
    :open="computerModalOpen.open"
    @closed="closeComputerModal"
    :action="saveComputer"
  >
  </Modal>
  <Modal
    :title="currentShip.vesselName"
    :open="computerModalOpen.open"
    @closed="closeShipModal"
    :action="saveShip"
  >
  </Modal>
</template>
