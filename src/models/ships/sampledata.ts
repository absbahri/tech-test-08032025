import { type Type } from './'

const sampleShips = (): Type[] => [
  {
    id: 1,
    vesselName: 'Cargo Tanker',
    mailProductState: 'Disabled',
    cyberProductState: 'Disabled',
    assetCount: 0,
  },
  {
    id: 2,
    vesselName: 'Vessel at Sea',
    mailProductState: 'Live',
    cyberProductState: 'Live',
    assetCount: 5,
  },
  {
    id: 3,
    vesselName: 'Cargo Tanker 2',
    mailProductState: 'Disabled',
    cyberProductState: 'Live',
    assetCount: 3,
  },
  {
    id: 4,
    vesselName: 'Vessel at Sea 2',
    mailProductState: 'Live',
    cyberProductState: 'Disabled',
    assetCount: 2,
  },
  {
    id: 5,
    vesselName: 'Black Sea',
    mailProductState: 'Disabled',
    cyberProductState: 'Disabled',
    assetCount: 3,
  },
  {
    id: 6,
    vesselName: 'Black Sea 2',
    mailProductState: 'Live',
    cyberProductState: 'Live',
    assetCount: 6,
  },
  {
    id: 7,
    vesselName: 'Cargo Tanker 3',
    mailProductState: 'Disabled',
    cyberProductState: 'Live',
    assetCount: 4,
  },
  {
    id: 8,
    vesselName: 'Black Sea 3',
    mailProductState: 'Live',
    cyberProductState: 'Disabled',
    assetCount: 4,
  },
  {
    id: 9,
    vesselName: 'GTMaritime Vessel',
    mailProductState: 'Live',
    cyberProductState: 'Live',
    assetCount: 3,
  },
  {
    id: 10,
    vesselName: 'GTMaritime Vessel 2',
    mailProductState: 'Live',
    cyberProductState: 'Live',
    assetCount: 3,
  },
]

export default sampleShips
